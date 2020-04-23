import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping.svg";
import "./cart-icon.styles.scss";
import * as cartActions from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemsLength }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsLength}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemsLength: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(cartActions.toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
