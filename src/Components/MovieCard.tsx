import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // To-do use redux-hook dispatch

import EditMovie from '../Pages/EditMovie';
import Button from '../Shared/Components/FormElements/Button';
import Modal from '../Shared/Components/UIElements/Modal';
import { setMovie, deleteMovie } from '../Actions/moviesActions';

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
  const [showCTAs, setShowCTAs] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [showEditFormModal, setShowEditFormModal] = useState(false);

  const dispatch = useDispatch();

  const showHideUpdateCTAHandler: React.MouseEventHandler<
    HTMLDivElement | HTMLButtonElement
  > = _ => {
    setShowCTAs(!showCTAs);
  };

  const openCloseDeleteModalHandler = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const openCloseEditModalHandler = () => {
    setShowEditFormModal(!showEditFormModal);
  };

  const confirmDeleteHandler = () => {
    console.log('DELETING Movie....');
    dispatch(deleteMovie(id));
    setShowDeleteModal(!showDeleteModal);
  };

  const setMovieHandler = () => dispatch(setMovie(id));

  return (
    <>
      <Modal
        show={showEditFormModal}
        onCancel={openCloseEditModalHandler}
        header='Edit Movie'
        headerClass='add-movie__modal-heading'
        modalClass='modal--large'
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
        modalClass='modal--large'
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
