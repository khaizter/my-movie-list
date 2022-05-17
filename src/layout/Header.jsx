import "../styles/layout/Header.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";
import GenresDropdown from "../newcomponents/GenresDropdown";
import SearchBar from "../newcomponents/SearchBar";

const Header = () => {
  return (
    <header className="header">
      <Link to="/my-movie-list/" className="header__brand-container">
        <RiMovie2Line className="header__brand-logo" />
        <h1 className="header__brand-name">my-movie-list</h1>
      </Link>
      <ul className="header__navigation">
        <li>
          <GenresDropdown />
        </li>
        <li>
          <NavLink
            to="/movies"
            className="header__nav-link"
            activeClassName="header__nav-link--selected"
          >
            Movies
          </NavLink>
        </li>
        <li>
          <SearchBar />
        </li>
      </ul>
    </header>
  );
};

export default Header;
