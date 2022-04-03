import React from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.style.css";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <div className="logo">crown</div>
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

export default Header;
