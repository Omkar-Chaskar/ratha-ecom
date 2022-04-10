import "../styles.css";
import CartProduct from "../Components/CartProduct";
import CartOrder from "../Components/CartOrder";

export default function MyCart() {
  return (
    <div className="Product-page">
      <section class="my-cart">
        <div class="cart-container">
          <div class="cart-header-container">
            <h5 class="cart-header">
              My Cart (<span class="cart-product-count">2</span> items)
            </h5>
          </div>
          <div class="cart-main">
            <CartProduct />
            <CartOrder />
          </div>
        </div>
      </section>
    </div>
  );
}
