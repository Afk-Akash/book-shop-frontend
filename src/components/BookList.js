import React from "react";
import "./BookList.css";
import Book from "./Book";

const BookList = ({ all_books }) => {
  const sortOption = "";

  return (
    <div className="main-class">
      <div className="drop-down-menu">
        <label htmlFor="sortDropdown">Sort By:</label>
        <select id="sortDropdown" value={{ sortOption }} onChange={{}}>
          <option value="price-asc">Price Ascending</option>
          <option value="price-desc">Price Descending</option>
          <option value="rating-asc">Rating Ascending</option>
          <option value="rating-desc">Rating Descending</option>
        </select>
      </div>
      <div className="book-list">
        {all_books.length === 0 ? (
          <p>No books available</p>
        ) : (
          all_books.map((item, index) => (
            <div className="book">
              <Book className="books" key={item.id} {...item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookList;
