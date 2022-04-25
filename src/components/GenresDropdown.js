import classes from "./GenresDropdown.module.css";
import React, { useState, useEffect } from "react";
import { fetchGenres } from "../data";
import { useHistory, Link } from "react-router-dom";

const GenresDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const genresData = await fetchGenres();
      setGenres(genresData.genres);
    };
    fetchApi();
  }, []);

  const dropDownOpenHandler = () => {
    setIsOpen(true);
  };

  const dropDownCloseHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes["container"]} onMouseLeave={dropDownCloseHandler}>
      <button
        className={`${classes["button"]} ${isOpen && classes["active"]}`}
        onMouseEnter={dropDownOpenHandler}
      >
        Genres
      </button>
      {isOpen && (
        <div
          className={classes["dropdown"]}
          onMouseLeave={dropDownCloseHandler}
        >
          <ul className={classes["menu"]}>
            {genres.map((genre) => {
              return (
                <li key={genre.id} className={classes["menu-item"]}>
                  <Link
                    to={`/movies?genre=${genre.id}`}
                    className={classes.link}
                  >
                    {genre.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GenresDropdown;
