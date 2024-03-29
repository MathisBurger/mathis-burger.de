import '../styles/globals.scss';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mathis Burger - Personal Website</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
