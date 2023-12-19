import './App.css';
import all_books from './Data/all_books';
import DisplayBook from './components/DisplayBook';
import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Header from '../src/components/Header';

function App() {
  return (
    <div className="App">
      <DisplayBook all_books = {all_books} />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
