import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://cdn5.f-cdn.com/ppic/197505263/logo/64094534/xCFtu/profile_logo_DVVZQ_9a7aa06691f28da28040ff845f34b41f.png"
        alt="Product name"
      />
      <div className="product__info">
        <p className="info__name">Product 1</p>
        <p className="info__description">
          Lorem ipsum dolor sit amet consecatur
        </p>
        <p className="info__price">$499.99</p>
        <Link to={`/product/${1111}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
