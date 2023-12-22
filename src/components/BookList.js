import React, { useEffect, useState } from "react";
import "./BookList.css";
import Book from "./Book";

import Notification from "../Component/Modal";
import Header from "./Header";
import Tokens from "./Tokens";
// import { Context } from "../context/Context";

const BookList = (accessToken, setIsLoggedIn) => {

  const [bookList, setBookList] = useState([]);
  // const { fetchBooks, books } = useContext(Context);
  const [sortOption, setSortOption] = useState("rating-asc");

  const [tempBookList, setTempBookList] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  // console.log('@@@fetchBooks is',fetchBooks,books);

  useEffect(() => {
    if (accessToken) {
      const fetchData = async () => {


        try {
          const response = await fetch('http://localhost:8080/users', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (response) {
            setIsLoggedIn(true)
          } else {
            setShowNotification(true);

          }

        } catch (error) {
          console.log('error')
        }
      };

      fetchData();
    }
  }, [accessToken]);


  useEffect(() => {
    fetch("http://10.132.124.241:8080/books")
      .then((res) => res.json())
      .then((res) => {
        setBookList(res.books);
        setTempBookList(res.books);
      })
      .catch((err) => console.log("@@@err is", err));
  }, []);
  const [searchKeyword, setSearchKeyword] = useState("");


  const searchHandler = (event) => {
    setSearchKeyword(event.target.value)

    let searchedBooks, sortedBooks;
    let eventTarget = event.target.value;

    searchedBooks = bookList.filter((item) => {
      return item.bookName.toLowerCase().startsWith(eventTarget.toLowerCase()) || item.author.toLowerCase().startsWith(eventTarget.toLowerCase());
    });
    console.log("@@@ serched book is ", searchedBooks)

    if (sortOption === 'rating-asc') {
      sortedBooks = [...searchedBooks].sort((a, b) => a.rating - b.rating);
    } else if (sortOption === 'rating-desc') {
      sortedBooks = [...searchedBooks].sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'price-asc') {
      sortedBooks = [...searchedBooks].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      sortedBooks = [...searchedBooks].sort((a, b) => b.price - a.price);
    }

    setTempBookList(sortedBooks);

  }

  const sortingHandler = (event) => {
    setSortOption(event.target.value);
    let sortedBooks;

    if (event.target.value === 'rating-asc') {
      sortedBooks = [...tempBookList].sort((a, b) => a.rating - b.rating);
    } else if (event.target.value === 'rating-desc') {
      sortedBooks = [...tempBookList].sort((a, b) => b.rating - a.rating);
    } else if (event.target.value === 'price-asc') {
      sortedBooks = [...tempBookList].sort((a, b) => a.price - b.price);
    } else if (event.target.value === 'price-desc') {
      sortedBooks = [...tempBookList].sort((a, b) => b.price - a.price);
    }
    setTempBookList(sortedBooks);
  }



  return (
    <div>
      <Tokens />
      {showNotification &&
        <Notification message="Username does not exist" />
      }
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
            <input className="search-input" value={searchKeyword} onChange={searchHandler} type="text" />
            <button className="serach-btn"> Search</button>
          </div>
        </div>
        <div className="book-list">
          {tempBookList.length === 0 ? (
            <p>No books available</p>
          ) : (
            tempBookList.map((item, index) => (
              <div className="book">
                <Book className="books" key={index} {...item} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BookList;
