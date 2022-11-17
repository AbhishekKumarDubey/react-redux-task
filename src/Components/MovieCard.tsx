import React, { useState, useContext } from 'react';

import MoviesContext from '../Shared/Context/moviesContext';
import EditMovie from '../Pages/EditMovie';

import Button from '../Shared/Components/FormElements/Button';
import Modal from '../Shared/Components/UIElements/Modal';

export interface MovieItem {
  id: number;
  title: string;
  genres: string[];
  releaseDate: string;
  movieUrl: string;
  rating: string;
  runtime: string;
  overview: string;
}

export default function MovieCard({
  id,
  title,
  genres,
  releaseDate,
  movieUrl,
  runtime,
  overview,
  rating
}: MovieItem) {
  const { setMovie, deleteMovie } = useContext(MoviesContext);

  const [showCTAs, setShowCTAs] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [showEditFormModal, setShowEditFormModal] = useState(false);

  const showHideUpdateCTAHandler: React.MouseEventHandler<
    HTMLDivElement | HTMLButtonElement
  > = _ => {
    console.log('CLICKED');
    setShowCTAs(!showCTAs);
  };

  const openCloseDeleteModalHandler = () => {
    console.log('openCloseDeleteModalHandler', showDeleteModal);
    setShowDeleteModal(!showDeleteModal);
  };

  const openCloseEditModalHandler = () => {
    console.log('openCloseEditModalHandler', showEditFormModal);
    setShowEditFormModal(!showEditFormModal);
  };

  const confirmDeleteHandler = () => {
    console.log('DELETING Movie....');
    deleteMovie(id);
    setShowDeleteModal(!showDeleteModal);
  };

  const setMovieHandler = () => setMovie(id);

  return (
    <>
      <Modal
        show={showEditFormModal}
        onCancel={openCloseEditModalHandler}
        header='Edit Movie'
        headerClass='add-movie__modal-heading'
      >
        <EditMovie
          title={title}
          releaseDate={releaseDate}
          runtime={runtime}
          overview={overview}
          movieUrl={movieUrl}
          rating={rating}
          genre={genres.join(', ')}
          onCancel={openCloseEditModalHandler}
        />
      </Modal>

      <Modal
        show={showDeleteModal}
        onCancel={openCloseDeleteModalHandler}
        header='Delete Movie'
        headerClass='add-movie__modal-heading'
      >
        <p>Are you sure you want to delete this movie?</p>
        <div className='form-control__cta form-control__cta--align-right'>
          <Button displayType='primary' onClickHandler={confirmDeleteHandler}>
            Confirm
          </Button>
        </div>
      </Modal>

      <div className='movie-card'>
        <div onClick={setMovieHandler} role='presentation'>
          <img src={movieUrl} className='movie-card__image' alt={title} />
        </div>

        <div
          className='movie-card__ellipsis'
          onClick={showHideUpdateCTAHandler}
          role='presentation'
        ></div>

        {showCTAs && (
          <div className='movie-card__cta'>
            <button
              className='btn--close-modal'
              onClick={showHideUpdateCTAHandler}
            >
              &times;
            </button>
            <Button
              displayType='inline'
              onClickHandler={openCloseEditModalHandler}
            >
              Edit
            </Button>
            <Button
              displayType='inline'
              onClickHandler={openCloseDeleteModalHandler}
            >
              Delete
            </Button>
          </div>
        )}
        <div className='movie-card__details'>
          <span className='movie-card__title'>{title}</span>
          <div className='movie-card__release-date'>
            <span>{releaseDate.split('-')[0]}</span>
          </div>
          <span className='movie-card__genres'>{genres.join(', ')}</span>
        </div>
      </div>
    </>
  );
}
