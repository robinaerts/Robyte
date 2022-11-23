import Link from "next/link";

const PopularProduct = ({ product }) => {
  return (
    <div className="product-option-popular">
      <h2 className="product-popular-text">POPULAR</h2>
      <h2 className="product-title">{product.title}</h2>
      <h3 className="product-price">{product.price}</h3>
      <p className="product-included-title">What do you get?</p>
      <ul className="product-included-list">
        {product.included.map((item, index) => (
          <li key={index}>✓ {item}</li>
        ))}
      </ul>
      <Link href={product.mail} target="_blank" rel="noreferrer">
        <a target="_blank" className="primary-cta-product">
          Contact
        </a>
      </Link>
    </div>
  );
};

export default PopularProduct;
