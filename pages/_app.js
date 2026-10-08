import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

const sans = Bricolage_Grotesque({ subsets: ['latin'] });
const mono = JetBrains_Mono({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${sans.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
