import "../styles.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useFilter } from "../context/filter-provider";
import { useWishlist } from "../context/wishlist-provider";
import { useCart } from "../context/cart-provider";
import { useAuth } from "../context";
import { toast, Toaster } from "react-hot-toast";

export default function Product() {
  const { user } = useAuth();
  const { loginStatus } = user;
  const { productsList: filteredProduct } = useFilter();
  const {
    wishlistState,
    removeFromWishlistHandler,
    addToWishlistHandler
  } = useWishlist();
  const { cartState, addToCartHandler } = useCart();

  return (
    <div>
      <div className="main-header-container flex">
        <h5 className="main-header">Showing All Product</h5>
        <p className="p1 main-product-count">
          ( Showing <span id="product-count">{filteredProduct.length}</span>{" "}
          products )
        </p>
      </div>
      <ul className="product-container">
        {filteredProduct.map((product) => {
          return (
            <li className="card-vertical" key={product._id}>
              <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                  {wishlistState &&
                  wishlistState.some((item) => product._id === item._id) ? (
                    <FavoriteIcon
                      onClick={() => {
                        loginStatus
                          ? removeFromWishlistHandler(product._id)
                          : alert("You need to login");
                      }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      onClick={() => {
                        loginStatus
                          ? addToWishlistHandler(product)
                          : alert("You need to login");
                      }}
                    />
                  )}
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
                <p className="card__subtitle card-price bold p3">
                  &#8377;{product.price}{" "}
                  <span className="card-cut-price">
                    &#8377;{product.orignalPrice}
                  </span>
                </p>
                <div className="card__subtitle text-center">
                  <p className="p3">{product.subtitle}</p>
                  <p className="p2">{product.description}</p>
                </div>
              </div>
              <div className="card__action-buttons text-center">
                {cartState &&
                cartState.some((carts) => product._id === carts._id) ? (
                  <button className="button button-secondary p1 btn-full bold">
                    <Link to="/MyCart"> Go To Cart</Link>
                  </button>
                ) : (
                  <button
                    className="button button-secondary p1 btn-full bold"
                    onClick={() => {
                      loginStatus
                        ? addToCartHandler(product)
                        : toast("You need to login");
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
      <Toaster position="bottom-right" reverseOrder={true} />
    </div>
  );
}
