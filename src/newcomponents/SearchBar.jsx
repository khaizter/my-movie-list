import "../styles/components/SearchBar.scss";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
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
    <div className="search-bar">
      <input
        type="text"
        ref={searchRef}
        onKeyDown={(e) => e.key === "Enter" && searchMovieHandler()}
        className="search-bar__input"
      />
      <button onClick={searchMovieHandler} className="search-bar__button">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
