import React from "react";
import "./OrderSummary.css";
import { useLocation } from "react-router-dom";

const OrderSummaryPage = () => {
  const handleConfirmOrder = () => {
    // Add logic to confirm the order (e.g., make an API call)
    console.log("Order confirmed!");
  };

  const location = useLocation();
  const { state } = location;
  //   console.log("Before", location);

  return (
    <div className="order-summary-container">
      <h2 className="order-summary-title">Order Summary</h2>
      <div className="order-details">
        <p>Order details 1:</p>
        <p>ID: {state?.bookid}</p>
        <p>Quantity: {state?.quantity}</p>
      </div>
      {/* {state?.bookid} */}
      <button className="confirm-button" onClick={handleConfirmOrder}>
        Confirm Order
      </button>
      {/* <Link to="/home">Back to Home</Link> */}
    </div>
  );
};

export default OrderSummaryPage;
