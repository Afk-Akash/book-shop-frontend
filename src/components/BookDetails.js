import React, { useEffect, useState } from "react";
import "./BookDetails.css";
import { useParams } from "react-router-dom";
import all_books from "../Data/all_books";
// import {  Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const temp = all_books.filter((book) => book.id === parseInt(id));
    setBook(temp[0]);
  }, [id]);

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-image">
          <img src={book.image} alt="" />
        </div>

        <div className="right-side-container">
          <div className="book-name">
            <h2>{book.name}</h2>
          </div>

          <div className="book-author">
            <h1>BY - {book.author}</h1>
          </div>

          <div className="book-rating">
            <h4>4.2★</h4>
          </div>

          <div className="book-description">
            <h3>{book.desc}</h3>
          </div>

          <div className="book-price">{book.price}</div>

          {book.availability === 0 ? (
            <p className="no-stock">Inventory Out of Stock</p>
          ) : book.availability < 5 ? (
            <p className="few-stocks">Only {book.availability} books left</p>
          ) : (
            <div className="book-availability">
              Total Available Books - {book.availability}
            </div>
          )}

          <button disabled={book.availability === 0}>Add To Cart</button>
          <button disabled={book.availability === 0}>Instant Buy</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
