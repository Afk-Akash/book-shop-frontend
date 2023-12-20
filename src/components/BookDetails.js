import React, { useEffect, useState } from 'react'
import './BookDetails.css'
import { useParams} from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const url = `http://10.132.124.241:8080/book/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(res => setBook(res.books))
    .catch(err => console.log('@@@err is',err));
  },[id]);

  useEffect(() => {
    console.log("@@@ price type is " , typeof book.price)
  }, [book])

  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-image' >
          <img src={book.largeImageUrl} alt='' />
        </div>

        <div className='right-side-container'>
          <div testId="bookName" className='book-name'>
            <h2>{book.bookName}</h2>
          </div>

          <div className="book-author">
            <h1>BY - {book.author}</h1>
          </div>

          <div className="book-rating">
            <h4>4.2★</h4>
          </div>
          
          <div className='book-description'>
            <h3>{book.description}</h3>
          </div>

          <div className="book-price">{book.price}</div>

          {book.numberOfAvailableBooks === 0 ? (
            <p className="no-stock">Inventory Out of Stock</p>
          ) : book.numberOfAvailableBooks < 5 ? (
            <p className="few-stocks">Only {book.numberOfAvailableBooks} books left</p>
          ) : (
            <div className="book-availability">
              Total Available Books - {book.numberOfAvailableBooks}
            </div>
          )}

          <button className="btn" disabled={book.numberOfAvailableBooks === 0}>Add To Cart</button>
          <button className="btn" disabled={book.numberOfAvailableBooks === 0}>Instant Buy</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
