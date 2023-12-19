import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Book from "./Book";

describe("Book component", () => {
  const mockBook = {
    image: "book-image.jpg",
    name: "Sample Book",
    author: "John Doe",
    price: "$19.99",
    availability: 5,
  };

  it("renders book details correctly", () => {
    const { getByAltText, getByText } = render(<Book {...mockBook} />);

    expect(getByAltText("showing book")).toBeInTheDocument();
    expect(getByText("Sample Book")).toBeInTheDocument();
    expect(getByText("By- John Doe")).toBeInTheDocument();
    expect(getByText("Price: $19.99")).toBeInTheDocument();
  });

  //Can be uncommentede after function implementation

  //   it("calls handleBuyNow when Buy Now button is clicked", () => {
  //     const handleBuyNow = jest.fn();
  //     const { getByText } = render(
  //       <Book {...mockBook} handleBuyNow={handleBuyNow} />
  //     );

  //     fireEvent.click(getByText("Buy Now"));
  //     expect(handleBuyNow).toHaveBeenCalled();
  //   });

  //   it("calls handleAddToCart when Add to Cart button is clicked", () => {
  //     const handleAddToCart = jest.fn();
  //     const { getByText } = render(
  //       <Book {...mockBook} handleAddToCart={handleAddToCart} />
  //     );

  //     fireEvent.click(getByText("Add to Cart"));
  //     expect(handleAddToCart).toHaveBeenCalled();
  //   });

  it("disables buttons when availability is 0", () => {
    const { getByText } = render(<Book {...mockBook} availability={0} />);

    expect(getByText("Buy Now")).toBeDisabled();
    expect(getByText("Add to Cart")).toBeDisabled();
  });
});
