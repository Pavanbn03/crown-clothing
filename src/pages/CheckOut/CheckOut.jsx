import React from "react";
import "./CheckOut.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCartItems, selectTotal } from "../../redux/cart/cartSelectors";
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem";
import StripeButton from "../../components/StripeButton/StripeButton";

const CheckOut = ({ cartItems, total }) => {
  return (
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
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        <h3 style={{ color: "red", fontWeight: "lighter", fontSize: "30px" }}>
          *Please use following card for test payment <br /> Card no: 4242 4242
          4242 4242 <br/>Expire date: 10/25 CVV: 123*
        </h3>
      </div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotal,
});

export default connect(mapStateToProps)(CheckOut);
