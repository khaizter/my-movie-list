import classes from "./MovieTrailer.module.css";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ReactPlayer from "react-player/youtube";
import { fetchMovieDetails } from "../data";

const MovieTrailer = ({ showTrailer, setShowTrailer, trailerUrl, movieId }) => {
  const [detail, setDetails] = useState();
  let url;

  if (trailerUrl) {
    url = `https://www.youtube.com/watch?v=${trailerUrl}`;
  }
  if (detail) {
    url = `https://www.youtube.com/watch?v=${detail.videos.results[0].key}`;
  }

  useEffect(() => {
    const fetchApi = async () => {
      if (!movieId) return;
      const detailsData = await fetchMovieDetails(movieId);
      setDetails(detailsData);
    };
    fetchApi();
  }, [movieId]);

  return (
    <Modal showModal={showTrailer} onClose={() => setShowTrailer(false)}>
      <div className={classes["trailer-container"]}>
        <p className={classes.title}>Trailer</p>

        <ReactPlayer
          className={classes.player}
          url={url}
          playing
          controls={true}
        />

        <button className={classes.back} onClick={() => setShowTrailer(false)}>
          Back
        </button>
      </div>
    </Modal>
  );
};

export default MovieTrailer;
