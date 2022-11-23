import Head from "next/head";
import Link from "next/link";
import CodeProducts from "../../components/CodeProducts";
import Nav from "../../components/Nav";

const MobileStore = () => {
  const first = {
    title: "CODE",
    price: "€16/hr",
    included: [
      "Full access to the code",
      "Well organized code",
      "Help deploying your site",
      "Fast service",
    ],
    mail: "mailto:nibor.aerts+robyte@gmail.com?subject=Mobile%20Code%20Request&body=Your%20request%20here",
  };
  const second = {
    title: "DESIGN",
    price: "€16/hr",
    included: ["Beautiful design", "Fast service"],
    mail: "mailto:nibor.aerts+robyte@gmail.com?subject=Mobile%Design%20Request&body=Your%20request%20here",
  };
  const popular = {
    title: "COMPLETE",
    price: "€30/hr",
    included: [
      "Full access to the code",
      "Well organized code",
      "Help deploying your site",
      "Fast service",
      "Beautiful design",
    ],
    mail: "mailto:nibor.aerts+robyte@gmail.com?subject=Mobile%20Complete%20Request&body=Your%20request%20here",
  };

  return (
    <div>
      <Head>
        <title>Robyte Store - Mobile</title>
      </Head>
      <Nav />
      <div className="store-container">
        <Link href="/store">
          <span>&#60; Store</span>
        </Link>
        <h1>Mobile Products</h1>
        <CodeProducts first={first} popular={popular} second={second} />
      </div>
    </div>
  );
};

export default MobileStore;
