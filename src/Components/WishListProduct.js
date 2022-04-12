import "../styles.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/wishlist-provider";

export default function WishListProduct() {
  const { wishlistState, wishlistDispatch } = useWishlist();

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
          {wishlistState.wishlist &&
            wishlistState.wishlist.map((products) => {
              return (
                <li className="card-vertical" key={products._id}>
              <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                      <FavoriteIcon
                        onClick={() =>
                          wishlistDispatch({
                            type: "REMOVE_FROM_WISHLIST",
                            payload: products
                          })
                        }
                      />
                    </span>
                <div className="card__media-column card__media-column-vertical">
                  <img
                    className="card-img-height"
                    src={products.productImg}
                    alt=""
                  />
                </div>
              </div>
              <div className="card__secondary text-center card__secondary-vertical">
                <p className="p1"> 
                <p className="card__subtitle card-price bold p3">
                &#8377;{products.price} <span className="card-cut-price">&#8377;{products.orignalPrice}</span>
            </p>
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
                  <button
                    className="button button-secondary p1 btn-full bold"
                  >
                    Add To Cart
                  </button>
              </div>
            </li>
              );
            })}
        </ul>
      )}
    </section>
  );
}
