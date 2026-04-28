import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
  const { movies } = useContext(GlobalContext);
  const [filter, setFilter] = useState("all");

  const filteredMovies = movies.filter((movie) => {
    if (filter === "all") return true;
    if (filter === "unwatched") return !movie.watched;
    if (filter === "watched") return movie.watched;
    return true;
  });

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <div className="header-controls">
            <div className="filter-buttons">
              <button
                className={`filter-btn ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`filter-btn ${filter === "unwatched" ? "active" : ""}`}
                onClick={() => setFilter("unwatched")}
              >
                Unwatched
              </button>
              <button
                className={`filter-btn ${filter === "watched" ? "active" : ""}`}
                onClick={() => setFilter("watched")}
              >
                Watched
              </button>
            </div>

            <span className="count-pill">
              {filteredMovies.length} {filteredMovies.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>
        </div>

        {filteredMovies.length > 0 ? (
          <div className="movie-grid">
            {filteredMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
