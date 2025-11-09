import { Html, Main, NextScript, Head } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/me.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          defer
          data-domain="mathis-burger.de"
          src="https://analytics.mathis-burger.de/js/script.js"
        ></script>
      </body>
    </Html>
  );
}
