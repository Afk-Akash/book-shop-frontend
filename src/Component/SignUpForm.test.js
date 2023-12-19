import { render, fireEvent, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm";
import React from "react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: jest.fn(({ to, children }) => <a href={to}>{children}</a>),
}));

describe("SignUpForm component", () => {
  test("renders all input fields and submit button", () => {
    render(<SignUpForm />);
    const nameInput = screen.getByPlaceholderText("Name");
    const usernameInput = screen.getByPlaceholderText("username");
    const mobileNumberInput = screen.getByPlaceholderText("mobilenumber");
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    expect(nameInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(mobileNumberInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("validates password correctly", () => {
    const validPassword = "Abcdefg1@";
    const invalidPassword = "invalidpass";

    const validatePassword = (password) => {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
      return passwordRegex.test(password);
    };

    expect(validatePassword(validPassword)).toBe(true);
    expect(validatePassword(invalidPassword)).toBe(false);
  });

  test("validates phone number correctly", () => {
    const validPhoneNumber = "1234567890";
    const invalidPhoneNumber = "12345";

    const validatePhoneNumber = (phoneNumber) => {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phoneNumber);
    };

    expect(validatePhoneNumber(validPhoneNumber)).toBe(true);
    expect(validatePhoneNumber(invalidPhoneNumber)).toBe(false);
  });

  test("toggles password visibility", () => {
    render(<SignUpForm />);

    const passwordInput = screen.getByPlaceholderText("Password");
    const togglePasswordButton = screen.getByText(/Show Password/i);

    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.click(togglePasswordButton);

    expect(passwordInput).toHaveAttribute("type", "text");

    fireEvent.click(togglePasswordButton);

    expect(passwordInput).toHaveAttribute("type", "password");
  });

  test("displays error message on invalid form submission", () => {
    render(<SignUpForm />);

    const submitButton = screen.getByRole("button", { name: "Submit" });

    fireEvent.click(submitButton);

    const errorMessage = screen.getByText(
      "Invalid data. Please check the fields."
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
