import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_DYOEVdn0TVzmrcAjNnqWrDE4000hRDuR9r';

  const onToken = (token) => {
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="BG Shop"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      ammount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
