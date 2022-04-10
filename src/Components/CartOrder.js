import "../styles.css";

export default function CartOrder() {
  return (
    <div className="CartOrder">
      <div class="cart-billing-container text-start">
        <div class="cart-billing-header">
          <h5>PRICE DETAILS</h5>
        </div>
        <hr />
        <div class="billing-container">
          <div class="billing-prices">
            <p>
              Price (<span class="cart-product-count">2</span> items)
            </p>
            <p>&#8377;4999</p>
          </div>
          <div class="billing-discount-price">
            <p>Discount</p>
            <p>&#8377;-1999</p>
          </div>
          <div class="billing-delivery-charges">
            <p>Delivery Charges</p>
            <p>&#8377;499</p>
          </div>
        </div>
        <hr />
        <div class="cart-billing-total">
          <p>TOTAL AMOUNT</p>
          <p>&#8377;2000</p>
        </div>
        <hr />
        <div class="cart-billing-saving">
          <p>
            You will save <span class="saving-price">&#8377;2000</span> on this
            order
          </p>
        </div>
        <button class="button button-primary">PLACE ORDER</button>
      </div>
    </div>
  );
}
