import React, { useState, useContext } from 'react';

import MoviesContext from '../../Context/moviesContext';
import { useForm } from '../../hooks/form-hook';
import AddMovie from '../../../Pages/AddMovie';

import Input from '../FormElements/Input';
import Button from '../FormElements/Button';
import Modal from '../UIElements/Modal';

export default function MainHeader() {
  const { selectedMovie } = useContext(MoviesContext);
  const { inputHandler } = useForm(
    {
      searchInput: {
        value: '',
        isValid: true
      }
    },
    true
  );

  const [showAddFormModal, setShowAddFormModal] = useState(false);

  const closeAddFormHandler = () => setShowAddFormModal(false);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      searchInput: { value: string };
    };
    console.log(target.searchInput.value);
  };

  const onAddMovieClickHandler = (_: React.MouseEvent<HTMLButtonElement>) => {
    console.log('showAddFormModal', showAddFormModal);
    setShowAddFormModal(true);
  };

  if (selectedMovie) return null;

  return (
    <>
      <Modal
        show={showAddFormModal}
        onCancel={closeAddFormHandler}
        header='Add Movie'
        headerClass='add-movie__modal-heading'
      >
        <AddMovie />
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
