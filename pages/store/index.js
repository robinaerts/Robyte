import { useEffect, useState } from "react";
import { db } from "../../helpers/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import StoreProduct from "../../components/Store/StoreProducts";

export default function Store() {
  const [selectedSection, setSelectedSection] = useState(0);
  const [products, setProducts] = useState([]);
  const sections = ["All Products", "Hardware", "Services", "Digital Art"];

  useEffect(() => {
    if (selectedSection !== 0) {
      getDocs(
        query(
          collection(db, "store"),
          where("tag", "==", sections[selectedSection])
        )
      ).then((querySnapshot) => {
        let products = [];
        querySnapshot.forEach((doc) => {
          products.push(doc.data());
        });
        setProducts(products);
      });
    } else {
      getDocs(collection(db, "store")).then((querySnapshot) => {
        let products = [];
        querySnapshot.forEach((doc) => {
          products.push(doc.data());
        });
        console.log(products);
        setProducts(products);
      });
    }
  }, [selectedSection]);

  return (
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
            <li id="store-section-selected">Digital Art</li>
          ) : (
            <li id="store-section" onClick={() => setSelectedSection(3)}>
              Digital Art
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
          width="15"
          height="10"
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
          width="9"
          height="10"
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
          return <StoreProduct key={index} product={product} />;
        })}
      </div>
    </div>
  );
}
