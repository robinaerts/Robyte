import "../styles/globals.css";
import "../styles/blog.css";
import "../styles/addproject.css";
import "../styles/projectdetails.css";
import "../styles/store.css";
import Script from "next/script";

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const adUrl = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.adId}`;
  return (
    <>
      <Script async src={adUrl} crossorigin="anonymous"></Script>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
