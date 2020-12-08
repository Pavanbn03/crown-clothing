import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const onToken = (token) => {
    console.log("Payment Succesfull");
    alert("Payment Successfull");
  };

  const priceForStripe = price * 700;
  const pk =
    "pk_test_51HvzoNKDKSXUDDQnMms9gnMRW4K6Zlz04kqLG4DfBcclb200FwpnXajjPKFl0Utbyuo0UzxHmX0V5gPL8UN5Nk88006cUZNreo";
  return (
    <StripeCheckout
      label="Pay now"
      name="The Crown Clothing Ltd."
      description={`Your total is ${price} IND`}
      image="https://sendeyo.com/up/d/f3eb2117da"
      currency="IND"
      billingAddress
      shippingAddress
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pk}
    />
  );
};
export default StripeButton;
