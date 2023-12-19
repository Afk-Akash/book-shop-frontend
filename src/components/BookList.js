import React, { useEffect, useState } from "react";
import "./BookList.css";
import Book from "./Book";
import all_books from "../Data/all_books";

const BookList = () => {
  const [sortOption, setSortOption] = useState("rating-asc");
  const [bookList, setBookList] = useState([...all_books]);

  const sortingHandler = (event) => {
    setSortOption(event.target.value);
    let sortedBooks;

  if (event.target.value === 'rating-asc') {
    sortedBooks = [...bookList].sort((a, b) => a.rating - b.rating);
  } else if (event.target.value === 'rating-desc') {
    sortedBooks = [...bookList].sort((a, b) => b.rating - a.rating);
  } else if (event.target.value === 'price-asc') {
    sortedBooks = [...bookList].sort((a, b) => a.price - b.price);
  } else if (event.target.value === 'price-desc') {
    sortedBooks = [...bookList].sort((a, b) => b.price - a.price);
  }

  console.log("@@@sortedBooks is",sortedBooks);
  setBookList(sortedBooks);
  }
  

  useEffect(()=> {
    console.log('@@@bookList is',bookList);
  },[bookList]);

  return (
    <div className="main-class">
      hello
      <div className="drop-down-menu">
        <label htmlFor="sortDropdown">Sort By:</label>
        <select id="sortDropdown" value={sortOption} onChange={sortingHandler}>
          <option value="price-asc">Price Ascending</option>
          <option value="price-desc">Price Descending</option>
          <option value="rating-asc">Rating Ascending</option>
          <option value="rating-desc">Rating Descending</option>
        </select>
        </div>
      <div className="book-list">

      {bookList.length === 0 ? (
        <p>No books available</p>
      ) 
      : 
      (
        bookList.map((item, index) => (
          <div className="book">
            <Book 
            key={item.id}
            {...item}
          />  
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default BookList;
