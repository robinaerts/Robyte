import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export default function StoreProduct({ product }) {
  const tagColors = {
    Hardware: "#BF5858",
    Apps: "#efba13",
  };

  return (
    <div className="store-product">
      <div className="product-header">
        <h3 className="product-title">{product.title}</h3>
        <Link href={"?tag=" + product.tag.toLowerCase()}>
          <p
            className="product-tag"
            style={{ background: tagColors[product.tag] }}
          >
            {product.tag}
          </p>
        </Link>
      </div>
      <p className="product-description">{product.description}</p>
      <div>
        {product.price !== 0 ? (
          <Link href={product.cta}>
            <button className="store-product-cta">
              <BsCart2 style={{ marginRight: "0.3rem" }} /> €{product.price}
            </button>
          </Link>
        ) : (
          <a rel="noreferrer" target="_blank" href={product.cta}>
            <button className="store-product-cta">
              <FiExternalLink style={{ marginRight: "0.8rem" }} />
              Launch
            </button>
          </a>
        )}
        <button className="store-product-more">More Info</button>
      </div>
    </div>
  );
}
