import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { trpc } from '../utils/trpc';

function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

export default trpc.withTRPC(App);
