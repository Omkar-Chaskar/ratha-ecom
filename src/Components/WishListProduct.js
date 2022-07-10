import "../styles.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/wishlist-provider";
import { useCart } from "../context/cart-provider";
import { Toaster } from "react-hot-toast";

export default function WishListProduct() {
  const { wishlistState, removeFromWishlistHandler } = useWishlist();
  const { cartState, addToCartHandler } = useCart();

  return (
    <section className="wishlist-container">
      <div className="main-header-container flex center">
        <h5 className="main-header">My Wishlist</h5>
      </div>
      {wishlistState.wishlist < 1 ? (
        <p className="p3 bold center">
          There is no item in wishlist. Please add some items in wishlist.
        </p>
      ) : (
        <ul className="product-container">
          {wishlistState &&
            wishlistState.map((product) => {
              return (
                <li className="card-vertical" key={product._id}>
                  <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                    <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                      <FavoriteIcon
                        onClick={() => {
                          removeFromWishlistHandler(product._id);
                        }}
                      />
                    </span>
                    <div className="card__media-column card__media-column-vertical">
                      <img
                        className="card-img-height"
                        src={product.productImg}
                        alt={product.subtitle}
                      />
                    </div>
                  </div>
                  <div className="card__secondary text-center card__secondary-vertical">
                    <p className="p1">
                      <p className="card__subtitle card-price bold p3">
                        &#8377;{product.price}{" "}
                        <span className="card-cut-price">
                          &#8377;{product.orignalPrice}
                        </span>
                      </p>
                    </p>
                    <div className="card__subtitle text-center">
                      <p className="p3">{product.subtitle}</p>
                      <p className="p2">{product.description}</p>
                    </div>
                  </div>
                  <div className="card__action-buttons text-center">
                    {cartState &&
                    cartState.some((cart) => product._id === cart._id) ? (
                      <button className="button button-secondary p1 btn-full bold">
                        <Link to="/MyCart"> Go To Cart</Link>
                      </button>
                    ) : (
                      <button
                        className="button button-secondary p1 btn-full bold"
                        onClick={() => {
                          addToCartHandler(product);
                        }}
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
        </ul>
      )}
      <Toaster position="bottom-right" reverseOrder={true} />
    </section>
  );
}
