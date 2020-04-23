import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  removeItem,
  addItemToCart,
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={cartItem.imageUrl} alt="item" />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <div onClick={() => removeItem(cartItem)} className="arrow">
        &#10094;
      </div>
      <span className="value">{cartItem.quantity}</span>
      <div onClick={() => addItemToCart(cartItem)} className="arrow">
        &#10095;
      </div>{" "}
    </span>
    <span className="price">${cartItem.price}</span>

    <div onClick={() => removeItemFromCart(cartItem)} className="remove-button">
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
