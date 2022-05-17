import "../styles/components/GenresDropdown.scss";
import React, { useState, useEffect } from "react";
import { fetchGenres } from "../data";
import { Link } from "react-router-dom";

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
    <div className="genres-dropdown">
      <button
        className={`genres-dropdown__toggle ${
          isOpen && "genres-dropdown__toggle--active"
        }`}
        onMouseEnter={dropDownOpenHandler}
      >
        Genres
      </button>
      {isOpen && (
        <div
          className="genres-dropdown__menu"
          onMouseLeave={dropDownCloseHandler}
        >
          <ul className="genres-dropdown__menu-list">
            {genres.map((genre) => {
              return (
                <li key={genre.id}>
                  <Link
                    to={`/movies?genre=${genre.id}`}
                    className="genres-dropdown__menu-item"
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
