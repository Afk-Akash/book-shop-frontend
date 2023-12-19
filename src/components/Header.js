import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      Header
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
      {/* Other header content */}
    </div>
  );
};

export default Header;
