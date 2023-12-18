import React from 'react'
import './DisplayBook.css'
import Book from './Book'

const DisplayBook = ({all_books}) => {

    
  return (
    <div className='main-class'>
        {all_books.map((item, index) => {
            return (
                <div className='main-div'>
                    <img className = 'image-div' src={item.image} alt='book image was the'/>
                    <div className='name-div'> {item.name} </div>
                    <div className='desc-div'> {item.desc} </div>
                    <div className='author-div'>Author: {item.author} </div>
                    <div className='price-div' > {item.price} </div>
                </div>
            )
        })}
    </div>
  )
}

export default DisplayBook