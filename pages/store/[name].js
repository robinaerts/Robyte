import { getDocs, collection, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../helpers/firebaseconfig";
import { checkout } from "../../helpers/checkout";
import Nav from "../../components/Nav";
import { BsCart2, BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import Head from "next/head";
// import ProductCarousel from "../../components/Store/ProductCarousel";
import Image from "next/image";

export async function getStaticPaths() {
  const products = [];
  const productsSnapshot = await getDocs(collection(db, "store"));
  productsSnapshot.docs.forEach((doc) => {
    products.push(doc.data().id);
  });

  const paths = [];
  products.forEach((id) => paths.push({ params: { name: id } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { name } = context.params;
  const product = await getDocs(
    query(collection(db, "store"), where("id", "==", name.toLowerCase()))
  );

  return {
    props: {
      product: product.docs[0].data(),
    },
  };
}

export default function ProductDetails({ product }) {
  const [tab, setTab] = useState("Details");

  const payClick = () => {
    checkout(product);
  };

  return (
    <>
      <Head>
        <title>{product.title} | Store</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
      </Head>
      <div id="product-details-page">
        <Nav />
        {product && (
          <div id="product-details-container">
            <div id="product-details-header">
              <div id="product-details-header-header">
                <h1 id="product-details-title">{product.title}</h1>
                {product.priceId ? (
                  <button className="store-product-cta" onClick={payClick}>
                    <BsCart2 style={{ marginRight: "0.3rem" }} /> €
                    {product.price}
                  </button>
                ) : (
                  <a rel="noreferrer" target="_blank" href={product.cta}>
                    <button className="store-product-cta">
                      <FiExternalLink style={{ marginRight: "0.8rem" }} />
                      Launch
                    </button>
                  </a>
                )}
              </div>
              <p id="product-details-description">{product.description}</p>
              <div id="product-details-tabs">
                {tab !== "Details" ? (
                  <button
                    onClick={() => setTab("Details")}
                    className="product-details-tab"
                  >
                    Details
                  </button>
                ) : (
                  <button className="product-details-tab-selected">
                    Details
                  </button>
                )}
                {tab !== "Docs" ? (
                  <button
                    onClick={() => setTab("Docs")}
                    className="product-details-tab"
                  >
                    Docs
                  </button>
                ) : (
                  <button className="product-details-tab-selected">Docs</button>
                )}
                {tab !== "Reviews" ? (
                  <button
                    onClick={() => setTab("Reviews")}
                    className="product-details-tab"
                  >
                    Reviews
                  </button>
                ) : (
                  <button className="product-details-tab-selected">
                    Reviews
                  </button>
                )}
              </div>
            </div>
            <div id="product-details-main">
              {tab === "Details" && (
                <div id="product-image">
                  {product.title && (
                    <Image
                      width={810}
                      height={450}
                      src={
                        "/products/" +
                        product.title.toLowerCase().replace(" ", "") +
                        "/cover.webp"
                      }
                    />
                  )}
                </div>
              )}
            </div>
            <div id="product-details-technical">
              {product.buildwith && (
                <>
                  <h3 className="product-technical-title">Build With</h3>
                  <div id="product-details-technical-icons">
                    {product.buildwith.map((item) => (
                      <Image
                        width={40}
                        height={40}
                        key={item}
                        src={"/icons/" + item + ".svg"}
                        alt={item}
                      />
                    ))}
                  </div>
                </>
              )}
              {product.contributors && (
                <>
                  <h3 className="product-technical-title">Contributors</h3>
                  <div id="product-details-technical-contributors">
                    {product.contributors.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </>
              )}
              {product.code && (
                <div>
                  <h3 className="product-technical-title">Source Code</h3>
                  <a href={product.code} rel="noreferrer" target="_blank">
                    <button
                      style={{ marginLeft: "0" }}
                      className="store-product-cta"
                    >
                      <BsGithub /> Github
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
