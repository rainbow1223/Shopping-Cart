import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src="https://cdn5.f-cdn.com/ppic/197505263/logo/64094534/xCFtu/profile_logo_DVVZQ_9a7aa06691f28da28040ff845f34b41f.png"
            alt="product name"
          />
        </div>
        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p className="left__price">Price: $499.9</p>
          <p className="left__description">
            This is product 1 and it is for testing this ecommerce website
            products page
          </p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span>499.9</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
