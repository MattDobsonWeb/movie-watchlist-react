import React from 'react';
import ReactModal from 'react-modal';
import customStyles from './CustomStyles';

function Modal({ movie, movieTags, modalIsOpen, closeModal }) {
    ReactModal.setAppElement('div')
    return (
    <ReactModal isOpen={modalIsOpen} onRequestClose={() => {closeModal()}} customStyles={customStyles}>
      <div className="detail__container">
        <div 
            style={{
              backgroundImage:`url('${`https://image.tmdb.org/t/p/w200${movie.poster_path}`}')`,
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover"
            }}
            className="detail__poster">
        </div>
        <div className="detail__overview">
          <h2 className="detail__title">{movie.original_title}</h2>
          <p>
            {movie.overview}
          </p>
          <div className="detail__tags">
            {
              movieTags?.map((tag,key) => {
                return(
                <span className="movie__tags" key={key}>#{tag.name}</span>
                )
              })
            }
          </div>
        <span className="movie__status">Status: {movie.status}</span>
        </div>
      </div>
    </ReactModal>
    );
}

export default Modal;