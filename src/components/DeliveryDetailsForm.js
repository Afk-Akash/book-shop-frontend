import React, { useState } from "react";
import styles from "./DeliveryDetailsForm.style";
import { Link } from "react-router-dom";

const DeliveryDetailsForm = () => {
  const [formData, setFormData] = useState({
    country: "India",
    address: "",
    pincode: "",
    alternateMobileNo: "",
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, error: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAlternatePhoneNumber(formData.alternateMobileNo)) {
      setFormData({ ...formData, error: "please enter a valid phone number" });
      return;
    } else if (
      !validatePincode(formData.pincode) &&
      formData.country === "India"
    ) {
      setFormData({ ...formData, error: "please enter a valid pincode" });
      return;
    }

    try {
      await fetch("http://localhost:8080/delivery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          country: formData.country,
          address: formData.address,
          pincode: formData.pincode,
          alternateMobileNo: formData.alternateMobileNo,
        }),
      });
    } catch (error) {
      console.error("Error :", error);
    }

    setFormData({
      country: "India",
      address: "",
      pincode: "",
      alternateMobileNo: "",
      error: "",
    });
    // window.location.href = '/login';
  };

  const validateAlternatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$|^$/;

    return phoneRegex.test(phoneNumber);
  };

  const validatePincode = (pincode) => {
    const pincodeRegex = /^\d{6}$/;
    return pincodeRegex.test(pincode);
  };

  return (
    <div style={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <select
          id="country"
          name="country"
          onChange={handleChange}
          style={styles.inputField}
          required
          value={formData.country}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        <input
          type="text"
          name="address"
          value={formData.address}
          placeholder="Address"
          onChange={(e) => {
            handleChange(e);
          }}
          style={styles.inputField}
          required
        />

        <input
          type="number"
          name="pincode"
          value={formData.pincode}
          placeholder="Pincode"
          onChange={(e) => {
            handleChange(e);
          }}
          style={styles.inputField}
          required
        />

        <input
          type="number"
          name="alternateMobileNo"
          value={formData.alternateMobileNo}
          placeholder="Alternate Mobile Number"
          onChange={handleChange}
          style={styles.inputField}
        />

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
        {formData.error && <p style={styles.errorText}>{formData.error}</p>}
      </form>
      <Link to="/delivery" />
    </div>
  );
};

export default DeliveryDetailsForm;
