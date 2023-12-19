import React from "react";
import "./Book.css";

const Book = ({
  image,
  name,
  author,
  price,
  availability,
  // onBuyNow,
  // onAddToCart,
}) => {
  const handleBuyNow = () => {
    if (availability > 0) {
      // onBuyNow({ name, author, price });
    }
  };

  const handleAddToCart = () => {
    if (availability > 0) {
      // onAddToCart({ name, author, price });
    }
  };

  return (
    <div className="main-class">
      <img className="image-div" src={image} alt="showing book" />

      <h3 className="name-h3">{name}</h3>
      <p className="author-p">By- {author}</p>
      <p className="price-p">Price: {price}</p>
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
    </div>
  );
};

export default Book;
