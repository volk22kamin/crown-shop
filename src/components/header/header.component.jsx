import React from "react";
import { Link } from "react-router-dom";

import "./header.style.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <div className="logo">crown for now</div>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          shop
        </Link>
        <Link className="option" to="/shop">
          contact us
        </Link>
      </div>
    </div>
  );
};

export default Header;
