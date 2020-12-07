import "./header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
import CartIcon from "../cartIcon/CartIcon";
import CartDroupDown from "../CartDropDown/CartDroupDown";
import {selectCurrentUser} from '../../redux/user/userSelector'
import {selectCartHidden} from '../../redux/cart/cartSelectors'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDroupDown />}
    </div>
  );
};

const mapToStateProps =  createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
});

export default connect(mapToStateProps)(Header);
