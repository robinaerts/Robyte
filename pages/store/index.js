import { useEffect, useState } from "react";
import { db } from "../../helpers/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import StoreProduct from "../../components/Store/StoreProducts";
import Nav from "../../components/Nav";
import { useRouter } from "next/router";
import Head from "next/head";

export async function getStaticProps() {
  const products = [];
  const productsSnapshot = await getDocs(collection(db, "store"));
  productsSnapshot.docs.forEach((doc) => {
    products.push(doc.data());
  });
  return {
    props: {
      products,
    },
revalidate:60
  };
}

export default function Store({ products }) {
  const [selectedSection, setSelectedSection] = useState(0);
  const sections = ["All Products", "Hardware", "Services", "Assets", "Apps"];

  return (
    <>
      <Head>
        <title>Robyte | Store</title>
        <meta
          name="description"
          content="Robyte Store - Hardware, services, digital art and apps."
        />
        <meta
          name="keywords"
          content="Robyte, Store, Hardware, Services, Digital Art, Apps"
        />
      </Head>
      <div id="store-bg">
        <Nav />
        <div id="store-page-container">
          <div id="store-header">
            <ul id="store-sections">
              {selectedSection === 0 ? (
                <li id="store-section-selected">All Products</li>
              ) : (
                <li id="store-section" onClick={() => setSelectedSection(0)}>
                  All Products
                </li>
              )}
              {selectedSection === 1 ? (
                <li id="store-section-selected">Hardware</li>
              ) : (
                <li id="store-section" onClick={() => setSelectedSection(1)}>
                  Hardware
                </li>
              )}
              {selectedSection === 2 ? (
                <li id="store-section-selected">Services</li>
              ) : (
                <li id="store-section" onClick={() => setSelectedSection(2)}>
                  Services
                </li>
              )}
              {selectedSection === 3 ? (
                <li id="store-section-selected">Assets</li>
              ) : (
                <li id="store-section" onClick={() => setSelectedSection(3)}>
                  Assets
                </li>
              )}
              {selectedSection === 4 ? (
                <li id="store-section-selected">Apps</li>
              ) : (
                <li id="store-section" onClick={() => setSelectedSection(4)}>
                  Apps
                </li>
              )}
            </ul>
            <div id="store-searchbox">
              <input id="store-search" type="text" placeholder="Search..." />
              {/* <span id="store-ctrlk">CTRL + K</span> */}
            </div>
          </div>
          <div id="store-filters">
            <svg
              width="20"
              height="15"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 9H11" stroke="#6D6D6D" strokeLinecap="round" />
              <path d="M1 5H14" stroke="#6D6D6D" strokeLinecap="round" />
              <path d="M4 1H11" stroke="#6D6D6D" strokeLinecap="round" />
            </svg>
            <p>Popular</p>
            <svg
              width="14"
              height="15"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1C5 0.723858 4.77614 0.5 4.5 0.5C4.22386 0.5 4 0.723858 4 1H5ZM4.14645 9.35355C4.34171 9.54882 4.65829 9.54882 4.85355 9.35355L8.03553 6.17157C8.2308 5.97631 8.2308 5.65973 8.03553 5.46447C7.84027 5.2692 7.52369 5.2692 7.32843 5.46447L4.5 8.29289L1.67157 5.46447C1.47631 5.2692 1.15973 5.2692 0.964466 5.46447C0.769204 5.65973 0.769204 5.97631 0.964466 6.17157L4.14645 9.35355ZM4 1L4 9H5V1H4Z"
                fill="#9C9C9C"
              />
            </svg>
          </div>
          <div id="store-products">
            {products.map((product, index) => {
              if (
                selectedSection == 0 ||
                product.tag == sections[selectedSection]
              ) {
                return <StoreProduct key={index} product={product} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
