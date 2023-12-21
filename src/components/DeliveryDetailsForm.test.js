import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DeliveryDetailsForm from "./DeliveryDetailsForm";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: jest.fn(({ to, children }) => <a href={to}>{children}</a>),
}));

describe("DeliveryDetailsForm Component", () => {
  it("renders DeliveryDetailsForm component with initial state", () => {
    const { getByText, getByPlaceholderText } = render(<DeliveryDetailsForm />);

    expect(getByPlaceholderText("Address")).toBeInTheDocument();
    expect(getByPlaceholderText("Pincode")).toBeInTheDocument();
    expect(getByPlaceholderText("Alternate Mobile Number")).toBeInTheDocument();
    expect(getByText("India")).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    const { getByText, getByPlaceholderText, getByTestId, queryByText } =
      render(<DeliveryDetailsForm />);

    fireEvent.change(getByPlaceholderText("Address"), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(getByPlaceholderText("Pincode"), {
      target: { value: "123456" },
    });
    fireEvent.change(getByPlaceholderText("Alternate Mobile Number"), {
      target: { value: "9876543210" },
    });

    fireEvent.click(getByText("Submit"));

    expect(queryByText("please enter a valid phone number")).toBeNull();
    expect(queryByText("please enter a valid pincode")).toBeNull();
  });

  it("displays an error message for an invalid phone number", () => {
    const { getByText, getByPlaceholderText } = render(<DeliveryDetailsForm />);

    fireEvent.change(getByPlaceholderText("Alternate Mobile Number"), {
      target: { value: "123" },
    });

    fireEvent.click(getByText("Submit"));

    expect(getByText("please enter a valid phone number")).toBeInTheDocument();
  });

  it("displays an error message for an invalid pincode", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <DeliveryDetailsForm />
    );

    fireEvent.change(getByPlaceholderText("Pincode"), {
      target: { value: "abc123" },
    });

    fireEvent.click(getByText("Submit"));

    expect(getByText("please enter a valid pincode")).toBeInTheDocument();
  });
});
