import "../styles.css";

export default function CartProduct() {
  return (
    <div className="cart-product-container">
      <div className=" card-horizontal">
        <div className="card__primary-action card__primary-action-row card__primary-action-horizontal">
          <div className="card__media-row card__media-row-horizontal">
            <img
              className="card-img card-img-horizontal"
              src="https://raw.githubusercontent.com/Omkar-Chaskar/e-commerce-app/dev/image/product-1.png"
              alt=""
            />
          </div>
          <div className="card__primary card__primary-horizontal">
            <h2 className="card__title">Men Premium Jacket</h2>
            <p className="card__subtitle card-price bold p3">
              &#8377;2000 <span className="card-cut-price">&#8377;3999</span>
            </p>
            <p className="card__subtitle card-discount bold p3">50% off</p>
            <div className="cart-product-quantity">
              <p className="p2">Quantity:</p>
              <button className="product-quantity-decrease">&minus;</button>
              <input
                className="product-quantity-count"
                type="number"
                value="0"
              />
              <button className="product-quantity-increase">&plus;</button>
            </div>
            <button className="button">Remove From Cart</button>
            <button className="button button-secondary">
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
