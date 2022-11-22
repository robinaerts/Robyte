const RegularProduct = ({ product }) => {
  return (
    <div className="product-option">
      <h2 className="product-title">{product.title}</h2>
      <h3 className="product-price">{product.price}</h3>
      <p className="product-included-title">What do you get?</p>
      <ul className="product-included-list">
        {product.included.map((item) => (
          <li className="product-included-item">✓ {item}</li>
        ))}
      </ul>
      <button className="secondary-cta-product">Contact</button>
    </div>
  );
};

export default RegularProduct;
