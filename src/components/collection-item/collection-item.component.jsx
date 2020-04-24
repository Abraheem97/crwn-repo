import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import * as cartActions from "../../redux/cart/cart.actions";
import { toast } from "react-toastify";
import { css } from "glamor";
const CollectionItem = ({ id, name, price, imageUrl, addItem }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
    <CustomButton
      inverted
      onClick={() => {
        toast(" 🤩 " + name + " added to the cart", {
          className: css({
            background: "black",
          }),
          bodyClassName: css({
            fontSize: "20px",
          }),
          progressClassName: css({
            background:
              "repeating-radial-gradient(circle at center, red 0, blue, green 30px)",
          }),
        });
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
