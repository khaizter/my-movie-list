import classes from "./Header.module.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/">Logo here!</Link>
      <ul className={classes.navigation}>
        <li>
          <NavLink to="/movies">Genres</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
