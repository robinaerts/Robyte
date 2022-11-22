const PopularProduct = ({ product }) => {
  return (
    <div className="product-option-popular">
      <h2 className="product-popular-text">POPULAR</h2>
      <h2 className="product-title">{product.title}</h2>
      <h3 className="product-price">{product.price}</h3>
      <p className="product-included-title">What do you get?</p>
      <ul className="product-included-list">
        {product.included.map((item) => (
          <li>✓ {item}</li>
        ))}
      </ul>
      <button className="primary-cta-product">Contact</button>
    </div>
  );
};

export default PopularProduct;
