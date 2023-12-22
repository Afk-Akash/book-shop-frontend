import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = (isLoggedIn) => {


  return (
    <div className="main-container">
      <Link to='/home' style={{ textDecoration: 'none' }}>
        <h1>Book Shop</h1>
      </Link>
      {!isLoggedIn ? (
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
        </div>) : (

        <div className="user-info">
          <span className="user-icon">👤</span>
          <span className="username">{'hk'}</span>
        </div>

      )
      }
    </div>
  );
};

export default Header;
