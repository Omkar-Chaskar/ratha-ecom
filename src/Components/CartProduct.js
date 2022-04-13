import "../styles.css";
import { useWishlist } from "../context/wishlist-provider";
import { useCart } from "../context/cart-provider";

export default function CartProduct() {
  const { wishlistState ,wishlistDispatch } = useWishlist();
  const { cartState ,cartDispatch } = useCart();

  return (
    <ul className="cart-product-container">
      {cartState.cartItems &&
        cartState.cartItems.map((products) => {
          return (
            <li className=" card-horizontal" key={products._id}>
              <div className="card__primary-action card__primary-action-row card__primary-action-horizontal">
                <div className="card__media-row card__media-row-horizontal">
                  <img
                    className="card-img card-img-horizontal"
                    src={products.productImg}
                    alt={products.subtitle}
                  />
                </div>
                <div className="card__primary card__primary-horizontal">
                <div className="card__subtitle text-center">
                <p className="p3">
                  {products.subtitle}
                </p>
                <p className="p2">
                  {products.description}
                </p>
                </div>
                  <p className="card__subtitle card-price bold p3">
                    &#8377;{products.price}{" "}
                    <span className="card-cut-price">
                      &#8377;{products.orignalPrice}
                    </span>
                  </p>
                  <p className="card__subtitle card-discount bold p3"></p>
                  <button
                    className="button"
                    onClick={() =>
                      cartDispatch({
                        type: "REMOVE_FROM_CART",
                        payload: products
                      })
                    }
                  >
                    Remove From Cart
                  </button>
                  {wishlistState.wishlist.some((item) => products._id === item._id) ? (
                    <button
                      className="button button-secondary"
                      onClick={() =>
                        wishlistDispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: products
                        })
                      }
                    >
                      Remove From Wishlist
                    </button>
                  ) : (
                    <button
                      className="button button-secondary"
                      onClick={() =>
                        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: products })
                      }
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
  );
}
