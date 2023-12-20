import "./App.css";
import all_books from "./Data/all_books";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "../src/components/Header";
import BookList from "./components/BookList";
import SignUpPage from "./Component/SignUpPage";
import LoginPage from "./Component/LoginPage";
import BookDetails from './components/BookDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Header />
              <BookList/>
            </>
          }
        />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/booklist" element={<BookList all_books={all_books} />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book/details/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
