import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  movies: localStorage.getItem("movies")
    ? JSON.parse(localStorage.getItem("movies"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(state.movies));
  }, [state]);

  // actions
  const addMovieToWatchlist = (movie) => {
    const movieWithStatus = {
      ...movie,
      watched: false,
      rating: null,
    };
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movieWithStatus });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const toggleMovieWatched = (id) => {
    dispatch({ type: "TOGGLE_MOVIE_WATCHED", payload: id });
  };

  const setMovieRating = (id, rating) => {
    dispatch({ type: "SET_MOVIE_RATING", payload: { id, rating } });
  };

  return (
    <GlobalContext.Provider
      value={{
        movies: state.movies,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        toggleMovieWatched,
        setMovieRating,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
