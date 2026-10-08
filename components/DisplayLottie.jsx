import React, { useEffect, useRef } from "react";

const GreetingLottie = ({ animationPath }) => {
  const container = useRef(null);

  useEffect(() => {
    let animation;
    let cancelled = false;

    // lottie-web touches `document` on import, so load it client-side only.
    import("lottie-web").then(({ default: lottie }) => {
      if (cancelled) return;
      animation = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: animationPath,
      });
    });

    return () => {
      cancelled = true;
      animation?.destroy();
    };
  }, [animationPath]);

  return <div ref={container} />;
};

export default GreetingLottie;
