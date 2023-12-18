import React from 'react'

const DisplayBook = ({all_books}) => {
  return (
    <div>
        {all_books.map((item, index) => {
            return (
                <div>
                    {item.name}
                    {item.author}
                    <img src={item.image} alt='book image'/>
                </div>
            )
        })}
    </div>
  )
}

export default DisplayBook