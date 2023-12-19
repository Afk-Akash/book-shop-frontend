import React from "react";
import "./BookList.css";
import Book from "./Book";

const BookList = ({ all_books }) => {
  return (
    <div className="main-class">
      {all_books.length === 0 ? (
        <p>No books available</p>
      ) : (
        all_books.map((item, index) => (
          <Book
            key={item.id}
            {...item}
            // onBuyNow={onBuyNow}
            // onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  );
};

export default BookList;
