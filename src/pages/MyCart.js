import "../styles.css";
import { CartProduct, CartOrder} from "../Components/index";
import { useCart } from "../context/cart-provider";

export default function MyCart() {
  const { cartState } = useCart();

  return (
    <div className="Product-page">
      <section className="my-cart">
        {cartState.cartItems < 1 ? (
          <p className="p3 bold center">
            There is no item in cart. Please add some items in cart
          </p>
        ) : (
          <div className="cart-container">
            <div className="cart-header-container">
              <h5 className="cart-header">
                My Cart (
                <span className="cart-product-count">
                  {cartState.cartItems && cartState.cartItems.length}
                </span>{" "}
                items)
              </h5>
            </div>
            <div className="cart-main">
              <CartProduct />
              <CartOrder />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
