import React, { useState } from "react";
import "./Book.css";
import { Link } from "react-router-dom";

const Book = ({
  bookId: id,
  largeImageUrl: image,
  bookName:name,
  author,
  price,
  numberOfAvailableBooks: availability,
  // onBuyNow,
  // onAddToCart,
}) => {
  const [isBookAdded, setIsBookAdded] = useState(false);

  const handleBuyNow = () => {
    if (availability > 0) {
      // onBuyNow({ name, author, price });
    }
  };

  const handleAddToCart = () => {
    if (availability > 0) {
      // onAddToCart({ name, author, price });
      setIsBookAdded(true);
    }
  };
  if(typeof price == 'number'){
    price = price.toFixed(2);
  }

  return (
    <div className="book-main-class">
      <img className="image-div" src={image} alt="showing book" />

      <h3 className="name-h3">{name}</h3>
      <p className="author-p">By- {author}</p>
      <p className="price-p">Price: {price}</p>
      {isBookAdded && (
        <p className="added-message">Book is added to the cart</p>
      )}
      <button
        className="buynow-button"
        onClick={handleBuyNow}
        disabled={availability === 0}
      >
        Buy Now
      </button>
      <button
        className="addtocart-button"
        onClick={handleAddToCart}
        disabled={availability === 0}
      >
        Add to Cart
      </button>


      <Link className="btnn" to={"/book/details/" + id} >
          <button className="bookdetails-button">
              Book Details
          </button>
      </Link>
    </div>
  );
};

export default Book;
