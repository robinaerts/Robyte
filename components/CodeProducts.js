import PopularProduct from "./PopularProduct";
import RegularProduct from "./RegularProduct";

const CodeProducts = ({ first, popular, second }) => {
  return (
    <div className="product-options-container">
      <RegularProduct product={first} />
      <PopularProduct product={popular} />
      <RegularProduct product={second} />
    </div>
  );
};

export default CodeProducts;
