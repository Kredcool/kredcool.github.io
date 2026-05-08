import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Etali_Stickers">Etali Stickers</NavLink>
      <NavLink to="/wtcd">WTCD</NavLink>
    </nav>
  );
};

export default Header;
