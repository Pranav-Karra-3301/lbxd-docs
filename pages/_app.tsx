import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>lbxd 🎬 — Letterboxd in your terminal</title>
        <meta name="description" content="Documentation for lbxd CLI tool" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="lbxd 🎬 — Letterboxd in your terminal" />
        <meta property="og:description" content="Documentation for lbxd CLI tool" />
        <meta property="og:image" content="https://lbxd.pranavkarra.me/preview.png" />
        <meta property="og:url" content="https://lbxd.pranavkarra.me" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="lbxd 🎬 — Letterboxd in your terminal" />
        <meta name="twitter:description" content="Documentation for lbxd CLI tool" />
        <meta name="twitter:image" content="https://lbxd.pranavkarra.me/preview.png" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
