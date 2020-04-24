import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { toast } from "react-toastify";
import { css } from "glamor";
const Header = ({ currentUser, cartIsHidden }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo"> CRWN </Logo>
    </Link>
    {!cartIsHidden && <CartDropdown />}
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      {currentUser ? (
        <div
          className="option"
          onClick={() => {
            toast("💤  You are successfully signed out!", {
              className: css({
                background: "white",
              }),
              bodyClassName: css({
                fontSize: "22px",
                fontFamily: "Open Sans Condensed",
                fontWeight: "bold",
                color: "#5b5959",
              }),
            });
            auth.signOut();
          }}
        >
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/login">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  cartIsHidden: selectCartHidden(state),
});

export default connect(mapStateToProps)(Header);
