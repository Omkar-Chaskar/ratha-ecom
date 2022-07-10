import "../styles.css";
import { useCart } from "../context/cart-provider";

export default function CartOrder() {
  const { cartState } = useCart();

  const deliveryCharge = 50;

  const totalCartDiscount = cartState.reduce(
    (totalSavings, product) =>
      product.qty * product.discountPrice + totalSavings,
    0
  );

  const totalCartOriginalPrice = cartState.reduce(
    (totalOriginalPrice, product) =>
      product.qty * product.orignalPrice + totalOriginalPrice,
    0
  );

  const totalCartSellingPrice = cartState.reduce(
    (totalSellingPrice, product) =>
      product.qty * (product.orignalPrice - product.discountPrice) +
      totalSellingPrice,
    0
  );

  const totalPrice = totalCartSellingPrice + deliveryCharge;

  const totalCartItems = cartState.reduce(
    (totalCartQty, product) => product.qty + totalCartQty,
    0
  );

  const totalSave = totalCartOriginalPrice - totalCartSellingPrice;

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
              <span className="cart-product-count">{totalCartItems}</span>{" "}
              items)
            </p>
            <p>&#8377; {totalCartOriginalPrice}</p>
          </div>
          <div className="billing-discount-price">
            <p>Discount</p>
            <p>&#8377; {totalCartDiscount}</p>
          </div>
          <div className="billing-delivery-charges">
            <p>Delivery Charges</p>
            <p>&#8377; {deliveryCharge}</p>
          </div>
        </div>
        <hr />
        <div className="cart-billing-total">
          <p>TOTAL AMOUNT</p>
          <p>&#8377; {totalPrice}</p>
        </div>
        <hr />
        <div className="cart-billing-saving">
          <p>
            You will save{" "}
            <span className="saving-price">
              &#8377; {totalSave}
            </span>{" "}
            on this order
          </p>
        </div>
        <button className="button button-primary">PLACE ORDER</button>
      </div>
    </div>
  );
}
