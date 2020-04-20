import React, { Component } from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import * as cartActions from "../../redux/cart/cart.actions";

const CollectionItem = ({ id, name, price, imageUrl, addItem, removeItem }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
    <CustomButton
      inverted
      onClick={() => {
        addItem({ name, id, price, imageUrl });
      }}
    >
      Add to cart
    </CustomButton>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(cartActions.addItem(item)),
  removeItem: (item) => dispatch(cartActions.removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
