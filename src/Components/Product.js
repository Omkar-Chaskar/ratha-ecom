import "../styles.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useFilter } from "../context/filter-provider";
import { useWishlist } from "../context/wishlist-provider";
import { useCart } from "../context/cart-provider";

export default function Product() {

  const { productsList: filteredProduct } = useFilter();
  const { wishlistState ,wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  
  return (
    <div>
      <div className="main-header-container flex">
        <h5 className="main-header">Showing All Product</h5>
        <p className="p1 main-product-count">
          ( Showing <span id="product-count">{filteredProduct.length}</span> products )
        </p>
      </div>
      <ul className="product-container">
      {filteredProduct.map((products) => {
          return (
            <li className="card-vertical" key={products._id}>
              <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                {wishlistState.wishlist &&
                  wishlistState.wishlist.some((item) => products._id === item._id) ? (
                    <FavoriteIcon
                      onClick={() =>
                        wishlistDispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: products
                        })
                      }
                    />
                  ) : (
                    <FavoriteBorderIcon
                      onClick={() =>
                        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: products })
                      }
                    />
                  )}
                </span>
                <div className="card__media-column card__media-column-vertical">
                  <img
                    className="card-img-height"
                    src={products.productImg}
                    alt={products.subtitle}
                  />
                </div>
              </div>
              <div className="card__secondary text-center card__secondary-vertical">
                <p className="card__subtitle card-price bold p3">
                &#8377;{products.price} <span className="card-cut-price">&#8377;{products.orignalPrice}</span>
                </p>
                <div className="card__subtitle text-center">
                <p className="p3">
                  {products.subtitle}
                </p>
                <p className="p2">
                  {products.description}
                </p>
                </div>
              </div>
              <div className="card__action-buttons text-center">
                {cartState.cartItems.some((cart) => products._id === cart._id) ? (
                  <button className="button button-secondary p1 btn-full bold">
                    <Link to="/MyCart"> Go To Cart</Link>
                  </button>
                ) : (
                  <button
                    className="button button-secondary p1 btn-full bold"
                    onClick={() =>
                      cartDispatch({ type: "ADD_TO_CART", payload: products })
                    }
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </li>
            );
          })}
      </ul>
    </div>
  );
}
