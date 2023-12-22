import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = (isLoggedIn) => {

console.log('isss',isLoggedIn.isLoggedIn);
  return (
    <div className="main-container">
      <Link to='/home' style={{ textDecoration: 'none' }}>
        <h1>Welcome to Book World 📖</h1>
        <h2>Stories Await, Dive In!</h2>
      </Link>
      {isLoggedIn.isLoggedIn ? (
<div>
<div className="user-info">
  <span className="user-icon">👤</span>
</div>
</div>

):(
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
        </div>) 
      }
    </div>
  );
};


export default Header;
