import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>lbxd 🎬 — Letterboxd in your terminal</title>
        <meta name="description" content="lbxd: Letterboxd in your terminal. Beautiful CLI for movie lovers." />
        <link rel="icon" href="https://a.ltrbxd.com/logos/letterboxd-decal-dots-pos-rgb-2021.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
