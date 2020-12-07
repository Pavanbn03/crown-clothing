import React from "react";
import "./CartDroupDown.scss";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/cartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cartActions";

const CartDroupDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go TO CHECKOUT{" "}
      </CustomButton>
    </div>
  );
};
const mapsStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapsStateToProps)(CartDroupDown));
