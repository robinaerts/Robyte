import Head from "next/head";
import Link from "next/link";
import CodeProducts from "../../components/CodeProducts";
import Nav from "../../components/Nav";
import PopularProduct from "../../components/PopularProduct";
import RegularProduct from "../../components/RegularProduct";

const AutomateStore = () => {
  const popular = {
    title: "COMPLETE",
    price: "€15/hr",
    included: [
      "Script that can automate a digital task",
      "Fast service",
      "Well organized code",
    ],
    mail: "mailto:nibor.aerts+robyte@gmail.com?subject=Automation%20Request&body=Your%20request%20here",
  };

  return (
    <div>
      <Head>
        <title>Robyte Store - Automation</title>
      </Head>
      <Nav />
      <div className="store-container">
        <Link href="/store">
          <span>&#60; Store</span>
        </Link>
        <h1>Automation Products</h1>
        <div
          style={{ marginTop: "5rem", justifyContent: "flex-start" }}
          className="product-options-container"
        >
          <PopularProduct product={popular} />
        </div>
      </div>
    </div>
  );
};

export default AutomateStore;
