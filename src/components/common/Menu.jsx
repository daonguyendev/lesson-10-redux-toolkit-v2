import React from "react";
import "../../assets/css/menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <ul className="menu">
        <li className="menu-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="menu-item">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="menu-item">
          <Link to={"/book"}>Book</Link>
        </li>
        <li className="menu-item">
          <Link to={"/cart"}>Cart</Link>
        </li>
        <li className="menu-item">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
