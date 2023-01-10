import type { AppProps } from 'next/app';
import '../styles/preflight.css';
import { Lato } from '@next/font/google';

const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700', '900'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  );
}
