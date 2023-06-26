import { getDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../helpers/firebaseconfig";
import { checkout } from "../../../helpers/checkout";

export default function CheckoutProduct() {
  const productId = useRouter().query.productId;
  const [product, setProduct] = useState({});

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
      {product && (
        <div className="checkout-product">
          <h1 className="checkout-product-title">{product.title}</h1>
          <button onClick={payClick}>Pay</button>
        </div>
      )}
    </>
  );
}
