import React, { useEffect,useState } from "react";
import "./BookList.css";
import Book from "./Book";
// import { Context } from "../context/Context";

const BookList = () => {

  const [bookList,setBookList] = useState([]);
  // const { fetchBooks, books } = useContext(Context);
  const [sortOption, setSortOption] = useState("rating-asc");

  // console.log('@@@fetchBooks is',fetchBooks,books);

  useEffect(() => {
    fetch("http://10.132.124.241:8080/books")
      .then((res) => res.json())
      .then(res => setBookList(res.books))
      .catch((err) => console.log("@@@err is", err));
  }, []);
  const [searchKeyword, setSearchKeyword] = useState("");
  

  const searchHandler = (event) => {
    setSearchKeyword(event.target.value)

    let searchedBooks;
    let eventTarget = event.target.value;

    searchedBooks = bookList.filter(item => item.name.toLowerCase().startsWith(eventTarget.toLowerCase()));

    setBookList(searchedBooks);

  }

  const sortingHandler = (event) => {
    setSortOption(event.target.value);
    let sortedBooks;

    if (event.target.value === 'rating-asc') {
      sortedBooks = [...bookList].sort((a, b) => a.rating - b.rating);
    } else if (event.target.value === 'rating-desc') {
      sortedBooks = [...bookList].sort((a, b) => b.rating - a.rating);
    } else if (event.target.value === 'price-asc') {
      sortedBooks = [...bookList].sort((a, b) => a.price - b.price);
    } else if (event.target.value === 'price-desc') {
      sortedBooks = [...bookList].sort((a, b) => b.price - a.price);
    }
    setBookList(sortedBooks);
  }



  return (
    <div className="book-list-main-class">
      <div className="search-and-sort">
          <div className="drop-down-menu">
            <label htmlFor="sortDropdown">Sort By:</label>
            <select id="sortDropdown" value={sortOption} onChange={sortingHandler}>
              <option value="price-asc">Price Ascending</option>
              <option value="price-desc">Price Descending</option>
              <option value="rating-asc">Rating Ascending</option>
              <option value="rating-desc">Rating Descending</option>
            </select>
          </div>
          <div className="search-container">
            <input className="search-input"  value={searchKeyword} onChange={searchHandler} type="text" />
            <button className="serach-btn"> Search</button>
          </div>
      </div>
      <div className="book-list">
        {bookList.length === 0 ? (
          <p>No books available</p>
        ) : (
          bookList.map((item, index) => (
            <div className="book">
              <Book className="books" bookList key={index} {...item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookList;
