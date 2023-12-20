import React, { useEffect, useState } from 'react'
import './BookDetails.css'
import img1 from '../Data/9789353162344.png'
import { useParams} from "react-router-dom";
import all_books from "../Data/all_books";

const BookDetails = () => {
  const { id } = useParams();
  const [book,setBook] = useState({});

  useEffect(()=>{
    const temp = all_books.filter(book => book.id === parseInt(id));
    setBook(temp[0]);
  },[id]);

  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-image' >
          <img src={img1} alt='' />
        </div>

        <div className='right-side-container'>
          <div testId="bookName" className='book-name'>
            <h2>{book.name}</h2>
          </div>

          <div className='book-author'>
            <h1>BY - {book.author}</h1>
          </div>

          <div className='book-rating'>
            <h4>4.2★</h4>
          </div>
          
          <div className='book-description'>
            <h3>{book.desc}</h3>
          </div>

          <div className='book-price'>
          {book.price}
        </div>

        <div className='book-availability'>
          Total Available Books - {book.availability}
        </div>

        <button>Add To Cart</button>
        <button>Instant Buy</button>
        </div>

        
      </div>

      

    </div>
  )
}

export default BookDetails