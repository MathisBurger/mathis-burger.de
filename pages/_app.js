import '../styles/globals.scss';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (<Component {...pageProps} />);
}

export default MyApp;
