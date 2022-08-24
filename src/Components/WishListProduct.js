import "../styles.css";
import { useWishlist } from "../context/wishlist-provider";
import { Toaster } from "react-hot-toast";
import { Product } from "./index"

export default function WishListProduct() {
  const { wishlistState } = useWishlist();

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
                <Product product={product} key={product._id} />
              );
            })}
        </ul>
      )}
      <Toaster position="bottom-right" reverseOrder={true} />
    </section>
  );
}
