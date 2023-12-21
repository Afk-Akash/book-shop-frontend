import React from "react";
import DeliveryDetailsForm from "./DeliveryDetailsForm";
import { useLocation } from "react-router-dom";

const DeliveryDetailsPage = () => {
  const location = useLocation();
  const { state } = location;
  //   console.log("Before", location);
  return (
    <div>
      <h2>Delivery Details</h2>
      {/* {state?.bookid} */}
      <DeliveryDetailsForm />
    </div>
  );
};

export default DeliveryDetailsPage;
