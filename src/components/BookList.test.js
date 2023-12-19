import React from "react";
import { render } from "@testing-library/react";
import BookList from "./BookList";

describe("BookList component", () => {
  const mockBooks = [
    {
      id: 1,
      name: "Book 1",
      author: "Author 1",
      price: "$20",
      availability: 5,
    },
    {
      id: 2,
      name: "Book 2",
      author: "Author 2",
      price: "$25",
      availability: 3,
    },
  ];

  it("renders book list correctly", () => {
    const { getByText, getByLabelText } = render(
      <BookList all_books={mockBooks} />
    );

    expect(getByLabelText("Sort By:")).toBeInTheDocument();
    expect(getByText("Price Ascending")).toBeInTheDocument();
    expect(getByText("Price Descending")).toBeInTheDocument();
    expect(getByText("Rating Ascending")).toBeInTheDocument();
    expect(getByText("Rating Descending")).toBeInTheDocument();

    expect(getByText("Book 1")).toBeInTheDocument();
    expect(getByText("Book 2")).toBeInTheDocument();
  });

  it("displays 'No books available' message when there are no books", () => {
    const { getByText } = render(<BookList all_books={[]} />);
    expect(getByText("No books available")).toBeInTheDocument();
  });
});
