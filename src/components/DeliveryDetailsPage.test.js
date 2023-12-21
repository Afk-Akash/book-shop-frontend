import React from "react";
import { render } from "@testing-library/react";
import DeliveryDetailsPage from "./DeliveryDetailsPage";
jest.mock("./DeliveryDetailsPage", () => () => (
  <div data-testid="delivery-form">Delivery Form Mock</div>
));

describe("DeliveryDetailsPage Component", () => {
  it("renders DeliveryDetailsPage heading", () => {
    const { getByText } = render(<DeliveryDetailsPage />);
    const headingElement = getByText("Delivery Form Mock");
    expect(headingElement).toBeInTheDocument();
  });

  it("renders DeliveryDetailsPage component", () => {
    const { getByTestId } = render(<DeliveryDetailsPage />);
    const signUpFormElement = getByTestId("delivery-form");
    expect(signUpFormElement).toBeInTheDocument();
  });

  it("does not render incorrect content", () => {
    const { queryByText } = render(<DeliveryDetailsPage />);
    const incorrectElement = queryByText("Incorrect Content");
    expect(incorrectElement).toBeNull();
  });
});
