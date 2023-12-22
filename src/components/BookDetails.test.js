import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookDetails from "./BookDetails";
import { MemoryRouter, Routes, Route } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ bookId: "123" }),
}));

describe("BookDetails Component", () => {
  test("renders book details", async () => {
    const mockBook = {
      bookName: "Sample Book",
      author: "John Doe",
      rating: 4.2,
      description: "This is a sample book description.",
      price: 19.99,
      numberOfAvailableBooks: 10,
      largeImageUrl: "sample-image.jpg",
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockBook),
    });

    render(
      <MemoryRouter initialEntries={["/book/details/123"]}>
        <Routes>
          <Route path="/book/details/:bookId" element={<BookDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(`BY - ${mockBook.author}`)).toBeInTheDocument();
      expect(screen.getByText("4.2★")).toBeInTheDocument();
      // expect(screen.getByText(mockBook.description)).toBeInTheDocument();
      // expect(screen.getByText("₹ ",mockBook.price)).toBeInTheDocument();
      expect(
        screen.getByText(
          `Total Available Books - ${mockBook.numberOfAvailableBooks}`
        )
      ).toBeInTheDocument();
      
    });
  });

  // Add more test cases for different scenarios if needed
});
