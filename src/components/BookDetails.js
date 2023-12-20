import React, { useEffect, useState } from "react";
import "./BookDetails.css";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isBookAdded, setIsBookAdded] = useState(false);

  useEffect(() => {
    const url = `http://10.132.124.241:8080/book/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setBook(res.books))
      .catch((err) => console.log("@@@err is", err));
  }, [id]);

  useEffect(() => {
    console.log("@@@ price type is ", typeof book.price);
  }, [book]);

  const handleIncrement = () => {
    if (quantity < book.numberOfAvailableBooks) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Add your logic to perform the actual "Add to Cart" action, e.g., making a backend API call

    // Set the state to indicate that the book is added
    setIsBookAdded(true);
  };

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-image">
          <img src={book.largeImageUrl} alt="" />
        </div>

        <div className="right-side-container">
          <div testId="bookName" className="book-name">
            <h2>{book.bookName}</h2>
          </div>

          <div className="book-author">
            <h1>BY - {book.author}</h1>
          </div>

          <div className="book-rating">
            <h4>4.2★</h4>
          </div>

          <div className="book-description">
            <h3>{book.description}</h3>
          </div>

          <div className="book-price">{book.price}</div>

          <div className="quantity-container">
            <button className="minus" onClick={handleDecrement}>
              -
            </button>
            <div className="quantity">{quantity}</div>
            <button className="plus" onClick={handleIncrement}>
              +
            </button>
          </div>

          {isBookAdded && (
            <p className="added-message">Book is added to the cart</p>
          )}

          {book.numberOfAvailableBooks === 0 ? (
            <p className="no-stock">Inventory Out of Stock</p>
          ) : book.numberOfAvailableBooks < 5 ? (
            <p className="few-stocks">
              Only {book.numberOfAvailableBooks} books left
            </p>
          ) : (
            <div className="book-availability">
              Total Available Books - {book.numberOfAvailableBooks}
            </div>
          )}

          <button
            onClick={handleAddToCart}
            className="btn"
            disabled={book.numberOfAvailableBooks === 0}
          >
            Add To Cart
          </button>
          <button className="btn" disabled={book.numberOfAvailableBooks === 0}>
            Instant Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
