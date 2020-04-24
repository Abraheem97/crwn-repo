import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../checkout-item/checkout-item.comonent";
import StripeCheckoutButton from "../stripe-button/stripe-button.component";
const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    {cartItems < 1 ? (
      <div className="empty-message">Your cart is empty</div>
    ) : (
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    )}
    <div className="test-warning">
      *Please use this credit card for test payments*
      <br /> 4242 4242 4242 4242 - EXP: 01/21 CVV:123
    </div>
    {total > 0 && <StripeCheckoutButton price={total} />}{" "}
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state),
});

export default connect(mapStateToProps)(Checkout);
