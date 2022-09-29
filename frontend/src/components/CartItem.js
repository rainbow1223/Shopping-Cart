import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem_image">
        <img src="" alt="" />
      </div>
      <Link to={`/product/${111}`} className="cartitem__name"></Link>
    </div>
  );
};

export default CartItem;
