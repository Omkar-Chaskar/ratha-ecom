import "../styles.css";
import { useCart } from "../context/cart-provider";

export default function CartOrder() {
  const { cartState } = useCart();

  return (
    <div className="CartOrder">
      <div className="cart-billing-container text-start">
        <div className="cart-billing-header">
          <h5>PRICE DETAILS</h5>
        </div>
        <hr />
        <div className="billing-container">
          <div className="billing-prices">
            <p>
              Price (
              <span className="cart-product-count">
                {cartState.cartItems && cartState.cartItems.length}
              </span>{" "}
              items)
            </p>
            <p>&#8377;{cartState.oriPrice}</p>
          </div>
          <div className="billing-discount-price">
            <p>Discount</p>
            <p>&#8377;{cartState.discPrice}</p>
          </div>
          <div className="billing-delivery-charges">
            <p>Delivery Charges</p>
            <p>&#8377;{cartState.deliveryCharge}</p>
          </div>
        </div>
        <hr />
        <div className="cart-billing-total">
          <p>TOTAL AMOUNT</p>
          <p>&#8377;{cartState.curPrice + cartState.deliveryCharge}</p>
        </div>
        <hr />
        <div className="cart-billing-saving">
          <p>
            You will save{" "}
            <span className="saving-price">
              &#8377;{cartState.oriPrice - cartState.curPrice}
            </span>{" "}
            on this order
          </p>
        </div>
        <button className="button button-primary">PLACE ORDER</button>
      </div>
    </div>
  );
}
