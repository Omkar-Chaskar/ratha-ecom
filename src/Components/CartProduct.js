import "../styles.css";
import { useWishlist } from "../context/wishlist-provider";
import { useCart } from "../context/cart-provider";
import { Toaster } from "react-hot-toast";

export default function CartProduct() {
  const {
    wishlistState,
    removeFromWishlistHandler,
    addToWishlistHandler
  } = useWishlist();
  const { cartState, removeFromCartHandler, cartQuantityHandler } = useCart();

  return (
    <>
    <ul className="cart-product-container">
      {cartState &&
        cartState.map((product) => {
          return (
            <li className=" card-horizontal" key={product._id}>
              <div className="card__primary-action card__primary-action-row card__primary-action-horizontal">
                <div className="card__media-row card__media-row-horizontal">
                  <img
                    className="card-img card-img-horizontal"
                    src={product.productImg}
                    alt={product.subtitle}
                  />
                </div>
                <div className="card__primary card__primary-horizontal">
                  <div className="card__subtitle text-center">
                    <p className="p3">{product.subtitle}</p>
                    <p className="p2">{product.description}</p>
                  </div>
                  <p className="card__subtitle card-price bold p3 text-center">
                    &#8377;{product.price}{" "}
                    <span className="card-cut-price">
                      &#8377;{product.orignalPrice}
                    </span>
                  </p>
                  <div className="product-quantity-count">
                    <button className="product-quantity-increase" onClick={() => {
                        cartQuantityHandler(product._id, "increment");
                      }}>+</button>
                    <p className="card-product-quantity">{product.qty}</p>
                    <button className="product-quantity-decrease" onClick={() => {
                        cartQuantityHandler(product._id, "decrement");
                      }}>-</button>
                  </div>
                  <p className="card__subtitle card-discount bold p3 text-center"></p>
                  <button
                    className="button "
                    onClick={() => {
                      removeFromCartHandler(product._id);
                    }}
                  >
                    Remove From Cart
                  </button>
                  {wishlistState.some((item) => product._id === item._id) ? (
                    <button
                      className="button button-secondary"
                      onClick={() => {
                        removeFromWishlistHandler(product._id);
                      }}
                    >
                      Remove From Wishlist
                    </button>
                  ) : (
                    <button
                      className="button button-secondary"
                      onClick={() => {
                        addToWishlistHandler(product);
                      }}
                    >
                      Move To Wishlist
                    </button>
                  )}
                </div>
              </div>
            </li>
          );
        })}
    </ul>
    <Toaster position="bottom-right" reverseOrder={true} />
    </>
  );
}
