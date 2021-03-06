import React from "react";

import StripeCheckout from "react-stripe-checkout";
import { emptyCart } from "../../redux/cart/cart.actions";

import { connect } from "react-redux";

const StripeCheckoutButton = ({ price, emptyCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_9tuqy2lJYB76cQMMK49eaNf9005H8rv4cZ";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
    emptyCart();
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
const mapDispatchToProps = (dispatch) => ({
  emptyCart: () => dispatch(emptyCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
