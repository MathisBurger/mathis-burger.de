import '../styles/globals.scss'
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
     <div>
       <Component {...pageProps} />
       <Head>
           <link rel="preconnect" href="https://fonts.gstatic.com" />
           <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
           <title>Mathis Burger - Personal Website</title>
           <link rel='icon' href='/me.jpg' />
       </Head>

     </div>
      );
}

export default MyApp
