import { useContext, createContext, useReducer } from "react";
import { productReducer } from "../reducer/cartReducer";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(productReducer, {
    cartItems: [],
    oriPrice: 0,
    discPrice: 0,
    deliveryCharge: 50,
    curPrice: 0
  });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
