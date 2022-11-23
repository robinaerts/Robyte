import Link from "next/link";

const RegularProduct = ({ product }) => {
  return (
    <div className="product-option">
      <h2 className="product-title">{product.title}</h2>
      <h3 className="product-price">{product.price}</h3>
      <p className="product-included-title">What do you get?</p>
      <ul className="product-included-list">
        {product.included.map((item, index) => (
          <li key={index} className="product-included-item">
            ✓ {item}
          </li>
        ))}
      </ul>
      <Link href={product.mail} target="_blank" rel="noreferrer">
        <a target="_blank" className="secondary-cta-product">
          Contact
        </a>
      </Link>
    </div>
  );
};

export default RegularProduct;
