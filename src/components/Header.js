import classes from "./Header.module.css";
import React, { useRef } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

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
      <Link to="/">Logo here!</Link>
      <ul className={classes.navigation}>
        <li className={classes["search-movie"]}>
          <input type="text" name="" id="" ref={searchRef} />
          <button onClick={searchMovieHandler}>Search</button>
        </li>
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
