import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie }) => {
  const { removeMovieFromWatchlist, toggleMovieWatched, setMovieRating } =
    useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      <div className="control-row">
        <button
          className={`ctrl-btn ${movie.watched ? "active" : ""}`}
          onClick={() => toggleMovieWatched(movie.id)}
          title={movie.watched ? "Mark as unwatched" : "Mark as watched"}
        >
          <i className={`fa-fw ${movie.watched ? "fa fa-check" : "far fa-eye"}`}></i>
        </button>

        <button
          className="ctrl-btn"
          onClick={() => removeMovieFromWatchlist(movie.id)}
          title="Remove from list"
        >
          <i className="fa-fw fa fa-times"></i>
        </button>
      </div>

      {movie.watched && (
        <div className="rating-controls">
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`rating-star ${movie.rating >= star ? "filled" : ""}`}
                onClick={() => setMovieRating(movie.id, star)}
                title={`Rate ${star} stars`}
              >
                <i className="fa fa-star"></i>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
