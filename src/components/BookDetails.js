import React from 'react'
import './BookDetails.css'
import img1 from '../Data/9789353162344.png'
// import {  Link } from "react-router-dom";


const book = {
    id:4,
    name:"GOLANG",
    desc:"Best book of JAVA till now, Best book of JAVA till now, Best book of JAVA till now, Best book of JAVA till now",
    author:"Herbert",
    price:"$1",
    image:img1,
    availability: 10,
}

const BookDetails = () => {
  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-image' >
          <img src={book.image} alt='' />
        </div>

        <div className='right-side-container'>
          <div className='book-name'>
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