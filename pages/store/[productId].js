import { getDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../helpers/firebaseconfig";
import { checkout } from "../../helpers/checkout";
import Nav from "../../components/Nav";
import { BsCart2, BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import Head from "next/head";
// import ProductCarousel from "../../components/Store/ProductCarousel";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails() {
  const productId = useRouter().query.productId;
  const [product, setProduct] = useState({});
  const [tab, setTab] = useState("Details");

  useEffect(() => {
    if (productId) {
      getDoc(doc(db, "store", productId.toString())).then((doc) => {
        if (doc.exists()) {
          setProduct(doc.data());
        }
      });
    }
  }, [productId]);

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
                        product.title.toLowerCase() +
                        "/cover.webp"
                      }
                    />
                  )}
                </div>
              )}
            </div>
            <div id="product-details-technical">
              <h3 className="product-technical-title">Build With</h3>
              {product.buildwith && (
                <div id="product-details-technical-icons"> 
                  {product.buildwith.map((item) => (
                    <Image width={40} height={40} key={item} src={"/icons/" + item + ".svg"} alt={item} />
                  ))}
              </div>)}
              <h3 className="product-technical-title">Contributors</h3>
              {product.contributors && (
                <div id="product-details-technical-contributors"> 
                  {product.contributors.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
              </div>)}
              {product.code && (
                <div>
                <h3 className="product-technical-title">Source Code</h3>
                <a href={product.code} rel="noreferrer" target="_blank">
                  <button style={{marginLeft: "0"}} className="store-product-cta"><BsGithub/> Github</button>
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
