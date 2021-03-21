import React, { useState } from "react";
import { MovieControls } from "./MovieControls";
import Modal from './Modal';
import "./detail.css";

export const MovieCard = ({ movie, type }) => {
  const [movieDetail,setMovieDetail] = useState([]);
  const [modalIsOpen,setIsOpen] = useState(false);
  const [movieTags, setMovieTags] = useState([]);
  
  const getTags = async (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${process.env.REACT_APP_TMDB_KEY}`)
    .then(res =>res.json())
    .then(res =>  setMovieTags(res.keywords));
  }

  const getDetail = async (movieId) => {
    let res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`);
    let detail = await res.json();
    setMovieDetail(detail);
    getTags(movieId)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false);

  return (
    <div className="movie-card">
      <Modal 
        movie={movieDetail}
        movieTags={movieTags} 
        modalIsOpen={modalIsOpen} 
        closeModal={closeModal}
      />
      <div className="overlay"></div>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControls type={type} movie={movie} detail={getDetail}/>
    </div>
  );
};
