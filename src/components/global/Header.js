import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">HOME</Link>
      {" | "}
      <Link to="/redux">REDUX</Link>
      {" | "}
      <Link to="/todo">TO DO</Link>
      {" | "}
      <Link to="/api">API</Link>
    </header>
  );
};

export default Header;
