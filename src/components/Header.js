import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {


  return (
    <div className="main-container">
      <Link to='/home' style={{textDecoration:'none'}}>
        <h1>Book Shop</h1>
      </Link>
      
      <div className="login-signup">
        <nav>
          <ul>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
