import React, { useEffect, useRef } from 'react';

// Animated "water cells" background, inspired by bosaq.com: blue Voronoi cells
// separated by rounded channels that drift slowly and get pushed by the cursor.

const MAX_SEEDS = 16;

const vertexShader = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const fragmentShader = `
precision mediump float;
#define MAX ${MAX_SEEDS}
uniform vec2 uRes;
uniform vec2 uSeeds[MAX];
uniform int uCount;
uniform float uWidth;
uniform float uRound;
uniform vec3 uWater;
uniform vec3 uLine;

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

void main() {
  // Coordinates in "tile heights", origin top-left.
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uRes.y;

  // Nearest seed.
  vec2 mr = vec2(0.0);
  float md = 1e9;
  int mi = 0;
  for (int i = 0; i < MAX; i++) {
    if (i >= uCount) break;
    vec2 r = uSeeds[i] - p;
    float d = dot(r, r);
    if (d < md) { md = d; mr = r; mi = i; }
  }

  // Smooth-min distance to the cell borders gives rounded channel joints.
  float edge = 1e9;
  for (int i = 0; i < MAX; i++) {
    if (i >= uCount) break;
    if (i == mi) continue;
    vec2 r = uSeeds[i] - p;
    vec2 diff = r - mr;
    float d = dot(0.5 * (mr + r), diff / max(length(diff), 1e-5));
    edge = smin(edge, d, uRound);
  }

  float aa = 1.2 / uRes.y;
  float water = smoothstep(uWidth - aa, uWidth + aa, edge);
  gl_FragColor = vec4(mix(uLine, uWater, water), 1.0);
}
`;

const hexToRgb = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

const compile = (gl, type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
};

// Seeds on a jittered grid that overshoots the edges, so channels run off the tile.
const createSeeds = (aspect) => {
  const seeds = [];
  const cols = 3;
  const rows = 2;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = -0.2 + ((col + 0.5 + (Math.random() - 0.5) * 0.7) / cols) * (aspect + 0.4);
      const y = -0.2 + ((row + 0.5 + (Math.random() - 0.5) * 0.7) / rows) * 1.4;
      seeds.push({
        baseX: x,
        baseY: y,
        x,
        y,
        amp: 0.05 + Math.random() * 0.06,
        speed: 0.15 + Math.random() * 0.2,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }
  return seeds;
};

const WaterCanvas = ({
  water = '#0057ff',
  line = '#4c8cff',
  width = 0.035,
  roundness = 0.07,
  className = '',
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) return undefined;

    const program = gl.createProgram();
    const vs = compile(gl, gl.VERTEX_SHADER, vertexShader);
    const fs = compile(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vs || !fs) return undefined;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // One triangle covering the whole canvas.
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const u = (name) => gl.getUniformLocation(program, name);
    gl.uniform3fv(u('uWater'), hexToRgb(water));
    gl.uniform3fv(u('uLine'), hexToRgb(line));
    gl.uniform1f(u('uWidth'), width);
    gl.uniform1f(u('uRound'), roundness);

    let seeds = [];
    let aspect = 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(u('uRes'), canvas.width, canvas.height);
      aspect = rect.width / rect.height || 1;
      seeds = createSeeds(aspect);
      gl.uniform1i(u('uCount'), seeds.length);
    };
    resize();

    const pointer = { x: 0, y: 0, active: false };
    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.height;
      pointer.y = (event.clientY - rect.top) / rect.height;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    const seedData = new Float32Array(MAX_SEEDS * 2);
    const draw = (time) => {
      const t = time / 1000;
      seeds.forEach((seed, i) => {
        let targetX = seed.baseX + Math.cos(t * seed.speed + seed.phase) * seed.amp;
        let targetY = seed.baseY + Math.sin(t * seed.speed * 1.3 + seed.phase) * seed.amp;

        // Push cells away from the cursor.
        if (pointer.active) {
          const dx = targetX - pointer.x;
          const dy = targetY - pointer.y;
          const dist = Math.hypot(dx, dy) || 1e-5;
          const force = Math.max(0, 1 - dist / 0.6) * 0.22;
          targetX += (dx / dist) * force;
          targetY += (dy / dist) * force;
        }

        // Ease towards the target for a fluid, rippling feel.
        seed.x += (targetX - seed.x) * 0.06;
        seed.y += (targetY - seed.y) * 0.06;
        seedData[i * 2] = seed.x;
        seedData[i * 2 + 1] = seed.y;
      });
      gl.uniform2fv(u('uSeeds'), seedData);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let visible = false;
    const loop = (time) => {
      draw(time);
      frame = visible ? requestAnimationFrame(loop) : 0;
    };

    // Only animate while the tile is on screen.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !reducedMotion;
      if (visible && !frame) frame = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    const ro = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    ro.observe(canvas);

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave);
    draw(performance.now());

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [water, line, width, roundness]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export default WaterCanvas;
