import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import all_books from "./Data/all_books";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "../src/components/Header";
import BookList from "./components/BookList";
import SignUpPage from "./Component/SignUpPage";
import LoginPage from "./Component/LoginPage";
import BookDetails from "./components/BookDetails";
import DeliveryDetailsPage from "./components/DeliveryDetailsPage";
import Tokens from "./components/Tokens";



function App() {
  const [accessToken, setAccessToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Tokens setAccessToken={setAccessToken} />

      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <BookList />
            </>
          }
        />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/booklist" element={<BookList all_books={all_books} accessToken={accessToken} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book/details/:bookId" element={<BookDetails />} />
        <Route path="/delivery" element={<DeliveryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
