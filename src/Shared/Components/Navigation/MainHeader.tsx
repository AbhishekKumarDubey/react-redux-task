import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux-hook';
import { RootState } from '../../../store';
import { searchMovies } from '../../../Actions/moviesActions';
import { useForm } from '../../hooks/form-hook';
import AddMovie from '../../../Pages/AddMovie';

import Input from '../FormElements/Input';
import Button from '../FormElements/Button';
import Modal from '../UIElements/Modal';

export default function MainHeader() {
  const selectedMovie = useAppSelector(
    (state: RootState) => state.selectedMovie
  );
  const { inputHandler } = useForm(
    {
      searchInput: {
        value: '',
        isValid: true
      }
    },
    true
  );

  const dispatch = useAppDispatch();

  const [showAddFormModal, setShowAddFormModal] = useState(false);
  const [showAddConfirmationModal, setShowAddConfirmationModal] =
    useState(false);

  const closeAddFormHandler = () => setShowAddFormModal(false);

  const onAddMovieSubmitClickHandler = () => {
    setShowAddFormModal(false);
    setShowAddConfirmationModal(!showAddConfirmationModal);
  };

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      searchInput: { value: string };
    };
    dispatch(searchMovies(target.searchInput.value));
    target.searchInput.value = '';
  };

  const onAddMovieClickHandler = (_: React.MouseEvent<HTMLButtonElement>) => {
    setShowAddFormModal(true);
  };

  const openCloseAddConfirmationModalHandler = (
    _: React.MouseEvent<HTMLButtonElement>
  ) => {
    setShowAddConfirmationModal(!showAddConfirmationModal);
  };

  if (selectedMovie) return null;

  return (
    <>
      <Modal
        show={showAddFormModal}
        onCancel={closeAddFormHandler}
        header='Add Movie'
        headerClass='add-movie__modal-heading'
        modalClass='modal--large'
      >
        <AddMovie onSubmitClick={onAddMovieSubmitClickHandler} />
      </Modal>

      <Modal
        show={showAddConfirmationModal}
        onCancel={openCloseAddConfirmationModalHandler}
        header='CONGRATULATIONS!'
        headerClass='add-confirmation__modal-heading'
        modalClass='modal--small'
      >
        <p className='add-confirmation__text add-confirmation__text--center'>
          The movie has been added to database successfully
        </p>
      </Modal>

      <header className='header'>
        <div className='header__logo-box'>
          <h2 className='header__logo'>
            <span className='header__logo--main'>netflix</span>
            <span className='header__logo--sub'>roulette</span>
          </h2>

          <Button
            displayType='secondary'
            onClickHandler={onAddMovieClickHandler}
          >
            &#43; Add Movie
          </Button>
        </div>

        <div className='header__search'>
          <h1 className='heading-primary'>
            <span className='heading-primary--main'>Find Your Movie</span>
          </h1>
          <form className='search' onSubmit={onSubmitHandler}>
            <Input
              element='input'
              type='text'
              name='searchInput'
              id='searchInput'
              placeholder='What do you want to watch?'
              className='search__input'
              onInput={inputHandler}
            />
            <Button displayType='primary' type='submit'>
              Search
            </Button>
          </form>
        </div>
      </header>
    </>
  );
}
