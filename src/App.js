import "./App.css";
import all_books from "./Data/all_books";
import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Header from "../src/components/Header";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          {/* <Redirect from="/" to="/home" /> */}
          <Route
            path="/home"
            element={
              <>
                <Header />
                <BookList all_books={all_books} />
              </>
            }
          />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
