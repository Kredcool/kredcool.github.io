import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav id="menu-outer">
      <div class="table">
        <ul id="horizontal-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Etali_Stickers">Etali Stickers</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
