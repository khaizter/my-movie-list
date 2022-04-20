import classes from "./Header.module.css";
import React, { useRef } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";

const Header = () => {
  const searchRef = useRef();
  const history = useHistory();

  const searchMovieHandler = () => {
    const keywords = searchRef.current.value;
    if (keywords.trim() !== "") {
      history.push(`/movies?search_query=${keywords}&page=1`);
    } else {
      history.push("/movies?page=1");
    }
  };

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        {/* <img src="/images/logo.png" alt="" /> */}
        <RiMovie2Line className={classes["movie-icon"]} />
        <h1>My-Movie-List</h1>
      </Link>
      <ul className={classes.navigation}>
        <li className={classes["search-movie"]}>
          <input type="text" name="" id="" ref={searchRef} />
          <button onClick={searchMovieHandler}>
            <FaSearch />
          </button>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={classes["nav-link"]}
            activeClassName={classes.selected}
          >
            Genres
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={classes["nav-link"]}
            activeClassName={classes.selected}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
