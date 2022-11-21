import Nav from "../../components/Nav";
import Head from "next/head";
import { FaAppStore, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { BsFillGearFill, BSFillGearFill } from "react-icons/bs";
import Link from "next/link";

export default function Store() {
  return (
    <div id="store-container">
      <Head>
        <title>Robyte | Store</title>
        <meta name="description" content="Digital products I sell" />
        <meta name="title" content="Robyte | Store" />
      </Head>
      <Nav />
      <h1 className="store-title">Store</h1>
      <p className="store-subtitle">
        Websites, UI designs, mobile apps, tutoring and more.
      </p>
      <div id="store-products-container">
        <div className="store-product">
          <h2 className="product-section-title">WEBSITE</h2>
          <FaGlobe className="product-section-icon" />
          <p className="product-section-description">
            Need a new website, or a new refreshing look for your current one?
          </p>
          <Link href="/store/web">
            <button className="product-section-cta">View the options</button>
          </Link>
        </div>
        <div className="store-product">
          <h2 className="product-section-title">MOBILE APP</h2>
          <FaMobileAlt className="product-section-icon" />
          <p className="product-section-description">
            Looking for a mobile app that works on both iOS and Android?
          </p>
          <Link href="/store/mobile">
            <button className="product-section-cta">View the options</button>
          </Link>
        </div>
        <div className="store-product">
          <h2 className="product-section-title">AUTOMATION</h2>
          <BsFillGearFill className="product-section-icon" />
          <p className="product-section-description">
            Need a script to automate a boring repeating task for you?
          </p>
          <Link href="/store/automate">
            <button className="product-section-cta">View the options</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
