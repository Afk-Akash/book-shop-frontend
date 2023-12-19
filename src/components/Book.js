import React from "react";

const Book = ({
  image,
  name,
  author,
  price,
  availability,
  onBuyNow,
  onAddToCart,
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
    <div>
      <img className="image-div" src={image} alt="showing book" />
      <h3>{name}</h3>
      <p>Author: {author}</p>
      <p>Price: ${price}</p>
      <button onClick={handleBuyNow} disabled={availability === 0}>
        Buy Now
      </button>
      <button onClick={handleAddToCart} disabled={availability === 0}>
        Add to Cart
      </button>
    </div>
  );
};

export default Book;
