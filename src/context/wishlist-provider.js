import { useContext, createContext, useReducer } from "react";
import { productReducer } from "../reducer/wishlistReducer";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(productReducer, {
    wishlist: []
  });

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, useWishlist };
