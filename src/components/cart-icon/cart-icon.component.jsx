import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping.svg";
import "./cart-icon.styles.scss";
import * as cartActions from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(cartActions.toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
