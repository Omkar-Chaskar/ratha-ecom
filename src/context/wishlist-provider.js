import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { addToWishlist, removeFromWishlist } from "../services";
import { productReducer } from "../reducer/wishlistReducer";
import toast from "react-hot-toast";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(productReducer, []);

  useEffect(() => {
    const getCart = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: "/api/user/wishlist",
          headers: { authorization: localStorage.getItem("auth_token") }
        });
        wishlistDispatch({ type: "GET_WISHLIST", payload: data.wishlist });
      } catch (err) {
        alert("Something went wrong: Loading Wishlist Failed");
        console.error(err);
      }
    };
    getCart();
  }, [wishlistDispatch]);

  const addToWishlistHandler = async (product) => {
    try {
      const { data, status } = await addToWishlist(product);
      if (status === 201) {
        wishlistDispatch({ type: "GET_WISHLIST", payload: data.wishlist });
        toast("Product is added to wishlist");
      }
    } catch (err) {
      toast("Something went wrong: Loading Wishlist Failed");
    }
  };

  const removeFromWishlistHandler = async (_id) => {
    const { data, status } = await removeFromWishlist(_id);
    if (status === 200) {
      wishlistDispatch({ type: "GET_WISHLIST", payload: data.wishlist });
      toast("Product is from from wishlist");
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        removeFromWishlistHandler,
        addToWishlistHandler
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, useWishlist };
