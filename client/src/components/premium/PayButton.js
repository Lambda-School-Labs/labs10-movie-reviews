import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const PayButton = props => {
  const publishableKey = "pk_test_GAKbu7bXAJ5UZjNKNbWEe0XF";

  function onToken(token) {
    console.log("token", token)
    const body = {
      amount: props.totalCents,
      token: token,
      plan: props.header,
  };

  axios
    .post("http://localhost:5000/api/payment", body)
    .then(response => {
      console.log("response", response);
    })
    .catch(error => {
      console.log("Payment Error: ", error);
    });
  };

  return (
    props.header === "Yearly Subscription" ? (
      <StripeCheckout
        label={"Pay Now"} //Component button text
        name={"Yearly Subscription"} //Modal Header
        description={"$9.99"}
        panelLabel="Submit Payment" //Submit button in modal
        amount={999} //Amount in cents 
        token={res => onToken(res)}
        stripeKey={publishableKey}
        // image="" //Pop-in header image
        billingAddress={false}
      />
    ) : (
      <StripeCheckout
        label={"Pay Now"} //Component button text
        name={"Monthly Subscription"} //Modal Header
        description={"$0.99"}
        panelLabel="Submit Payment" //Submit button in modal
        amount={99} //Amount in cents 
        token={res => onToken(res)}
        stripeKey={publishableKey}
        // image="" //Pop-in header image
        billingAddress={false}
      />
    )
  );
};

export default PayButton;