import "./App.css";
<<<<<<< Updated upstream

=======
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
>>>>>>> Stashed changes
import React, { useState } from "react";
import all_books from "./Data/all_books";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "../src/components/Header";
import BookList from "./components/BookList";
import SignUpPage from "./Component/SignUpPage";
import LoginPage from "./Component/LoginPage";
import BookDetails from "./components/BookDetails";
import DeliveryDetailsPage from "./components/DeliveryDetailsPage";
import OrderSummaryPage from "./components/OrderSummary";
import Tokens from "./components/Tokens";

function App() {
 
  const [show, setShow] = useState(false);
  return (
    <div className="App">
   

      <Routes>
        <Route
          path="/home"
          element={
            <>
            
              <BookList show={show} setShow={setShow}/>
            </>
          }
        />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/booklist" element={<BookList all_books={all_books} show={show} setShow={setShow} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book/details/:bookId" element={<BookDetails />} />
        <Route path="/delivery" element={<DeliveryDetailsPage />} />
        <Route path="/order-summary" element={<OrderSummaryPage />} />
      </Routes>
    </div>
  );
}

export default App;
