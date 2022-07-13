import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { addToCart, removeFromCart, setQuantityToCart } from "../services";
import { productReducer } from "../reducer/cartReducer";
import toast from "react-hot-toast";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(productReducer, []);

  useEffect(() => {
    const getCart = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: "/api/user/cart",
          headers: { authorization: localStorage.getItem("auth_token") }
        });
        cartDispatch({ type: "GET_CART", payload: data.cart });
      } catch (err) {
        alert("Something went wrong: Loading Cart Failed");
        console.error(err);
      }
    };
    getCart();
  }, [cartDispatch]);

  const addToCartHandler = async (product) => {
    const { data, status } = await addToCart(product);
    if (status === 201) {
      cartDispatch({ type: "GET_CART", payload: data.cart });
      toast("Product is added in cart");
    }
  };

  const removeFromCartHandler = async (_id) => {
    const { data, status } = await removeFromCart(_id);
    if (status === 200) {
      cartDispatch({ type: "GET_CART", payload: data.cart });
      toast("Product is removed from cart");
    }
  };

  const cartQuantityHandler = async (_id, actionType) => {
    const { data, status } = await setQuantityToCart(_id, actionType);
    if (status === 200) {
      cartDispatch({ type: "GET_CART", payload: data.cart });
      toast("Cart is updated");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addToCartHandler,
        removeFromCartHandler,
        cartQuantityHandler
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
