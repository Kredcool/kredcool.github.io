import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="menu-outer">
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
    </div>
  );
};

export default Header;
