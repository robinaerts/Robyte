import "../styles/globals.css";
import "../styles/blog.css";
import "../styles/addproject.css";
import "../styles/projectdetails.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return ( 
  <>
    <NextNProgress/>
    <Component {...pageProps} />;
  </>)
}

export default MyApp;
