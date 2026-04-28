import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie }) => {
  return (
    <div className={`movie-card ${movie.watched ? "watched" : ""}`}>
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      {movie.watched && (
        <div className="watched-badge">
          <i className="fa fa-check"></i> Watched
        </div>
      )}

      {movie.rating && (
        <div className="rating-badge">
          <i className="fa fa-star"></i> {movie.rating}
        </div>
      )}

      <MovieControls movie={movie} />
    </div>
  );
};
