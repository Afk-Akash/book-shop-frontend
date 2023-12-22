import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DeliveryDetailsForm from "./DeliveryDetailsForm";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter to use in tests

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: jest.fn(({ to, children }) => <a href={to}>{children}</a>),
}));

describe("DeliveryDetailsForm Component", () => {
  it("renders DeliveryDetailsForm component with initial state", () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <DeliveryDetailsForm />
      </MemoryRouter>
    );

    expect(getByPlaceholderText("Address")).toBeInTheDocument();
    expect(getByPlaceholderText("Pincode")).toBeInTheDocument();
    expect(getByPlaceholderText("Alternate Mobile Number")).toBeInTheDocument();
    expect(getByText("India")).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    const { getByText, getByPlaceholderText, getByTestId, queryByText } =
      render(
        <MemoryRouter>
          <DeliveryDetailsForm />
        </MemoryRouter>
      );

    fireEvent.change(getByPlaceholderText("Address"), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(getByPlaceholderText("Pincode"), {
      target: { value: "123456" },
    });
    fireEvent.change(getByPlaceholderText("Alternate Mobile Number"), {
      target: { value: "9876543210" },
    });

    fireEvent.click(getByText("Continue with COD")); // Change the button text

    // Wait for the navigation to complete
    await waitFor(() => {
      expect(queryByText("please enter a valid phone number")).toBeNull();
      expect(queryByText("please enter a valid pincode")).toBeNull();
    });
  });

  it("displays an error message for an invalid phone number", async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <MemoryRouter>
        <DeliveryDetailsForm />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText("Alternate Mobile Number"), {
      target: { value: "123" },
    });

    fireEvent.click(getByText("Continue with COD")); // Change the button text

    // Wait for the navigation to complete
    await waitFor(() => {
      expect(
        getByText("please enter a valid phone number")
      ).toBeInTheDocument();
    });
  });

  it("displays an error message for an invalid pincode", async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <MemoryRouter>
        <DeliveryDetailsForm />
      </MemoryRouter>
    );
    fireEvent.change(getByPlaceholderText("Pincode"), {
      target: { value: "abc123" },
    });

    fireEvent.click(getByText("Continue with COD")); // Change the button text

    // Wait for the navigation to complete
    await waitFor(() => {
      expect(getByText("please enter a valid pincode")).toBeInTheDocument();
    });
  });
});
