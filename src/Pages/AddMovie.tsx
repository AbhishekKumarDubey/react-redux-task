import { useAppDispatch } from '../Shared/hooks/redux-hook';
import { addMovie } from '../Actions/moviesActions';

import { useForm } from '../Shared/hooks/form-hook';
import Input from '../Shared/Components/FormElements/Input';
import Button from '../Shared/Components/FormElements/Button';
import React, { useRef, useState } from 'react';

interface AddMovieProps {
  onSubmitClick: () => void;
}

export default function AddMovie({ onSubmitClick }: AddMovieProps) {
  const { formState, inputHandler } = useForm(
    {
      title: {
        value: '',
        isValid: true
      },
      releaseDate: {
        value: '',
        isValid: true
      },
      movieUrl: {
        value: '',
        isValid: true
      },
      rating: {
        value: '',
        isValid: true
      },
      genres: {
        value: '',
        isValid: true
      },
      runtime: {
        value: '',
        isValid: true
      },
      overview: {
        value: '',
        isValid: true
      }
    },
    true
  );

  const [toggleArrow, setToggleArrow] = useState(true);

  const [genres, setGenres] = useState<string[]>([]);

  const inputGenresEl = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const onClickToggleHandler = () => setToggleArrow(!toggleArrow);

  const onChangeCheckboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenres(prevState => {
      const newState = prevState.includes(e.target.name)
        ? prevState.filter(genre => genre !== e.target.name)
        : prevState.concat([e.target.name]);

      if (inputGenresEl.current) {
        inputGenresEl.current.value = newState.join(', ');
      }

      return newState;
    });
  };

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      release_date: { value: string };
      poster_path: { value: string };
      rating: { value: string };
      runtime: { value: string };
      overview: { value: string };
    };

    dispatch(
      addMovie({
        title: target.title.value,
        release_date: target.release_date.value,
        poster_path: target.poster_path.value,
        rating: target.rating.value,
        genres: genres,
        runtime: target.runtime.value,
        overview: target.overview.value
      })
    );

    onSubmitClick();
  };

  return (
    <form className='add-movie' onSubmit={onSubmitHandler}>
      <Input
        element='input'
        type='text'
        name='title'
        id='title'
        label='Title'
        placeholder='Enter movie title'
        className='add-movie__input'
        onInput={inputHandler}
      />

      <Input
        element='input'
        type='date'
        name='release_date'
        label='Release Date'
        id='releaseDate'
        placeholder='Select Date'
        className='add-movie__input add-movie__input--date'
        onInput={inputHandler}
      />

      <Input
        element='input'
        type='text'
        name='poster_path'
        id='movieUrl'
        label='Movie Url'
        placeholder='https://'
        className='add-movie__input'
        onInput={inputHandler}
      />

      <Input
        element='input'
        type='text'
        name='rating'
        id='rating'
        label='Rating'
        placeholder='7.8'
        className='add-movie__input'
        onInput={inputHandler}
      />

      <div className='form-control__select'>
        {!toggleArrow && (
          <span
            className='form-control__arrow-filled-up'
            onClick={onClickToggleHandler}
            role='presentation'
          ></span>
        )}
        {toggleArrow && (
          <span
            className='form-control__arrow-filled-down'
            onClick={onClickToggleHandler}
            role='presentation'
          ></span>
        )}

        {/* <Input
          element='input'
          type='text'
          name='genre'
          id='genre'
          label='Genre'
          placeholder='Select Genre'
          initialValue={genres.join(', ')}
          className='add-movie__input add-movie__input--select'
          onInput={inputHandler}
          readonly={true}
          formControlClassName='form-control--select'
        /> */}

        {/* <input
          type='text'
          name='genre'
          id='genre'
          placeholder='Select Genre'
          //initialValue={genres.join(', ')}
          
          className='add-movie__input add-movie__input--select'
        /> */}

        <div className='form-control'>
          <label className='form-control__input-label' htmlFor='movieUrl'>
            Genres
          </label>
          <input
            placeholder='Select Genre'
            id='genres'
            name='genres'
            type='text'
            className='add-movie__input add-movie__input--select'
            ref={inputGenresEl}
            required
            onClick={onClickToggleHandler}
          />
        </div>

        {!toggleArrow && (
          <div className='add-movie__input--select-backdrop'>
            <div className='add-movie__checkbox-group'>
              <input
                type='checkbox'
                name='Crime'
                id='crime'
                className='add-movie__checkbox-input'
                onChange={onChangeCheckboxHandler}
                checked={genres.includes('Crime')}
              />
              <label htmlFor='crime' className='add-movie__checkbox-label'>
                Crime
              </label>
            </div>
            <div className='add-movie__checkbox-group'>
              <input
                type='checkbox'
                name='Documentary'
                id='documentary'
                className='add-movie__checkbox-input'
                onChange={onChangeCheckboxHandler}
                checked={genres.includes('Documentary')}
              />
              <label
                htmlFor='documentary'
                className='add-movie__checkbox-label'
              >
                Documentary
              </label>
            </div>
            <div className='add-movie__checkbox-group'>
              <input
                type='checkbox'
                name='Horror'
                id='horror'
                className='add-movie__checkbox-input'
                onChange={onChangeCheckboxHandler}
                checked={genres.includes('Horror')}
              />
              <label htmlFor='horror' className='add-movie__checkbox-label'>
                Horror
              </label>
            </div>
            <div className='add-movie__checkbox-group'>
              <input
                type='checkbox'
                name='Comedy'
                id='comedy'
                className='add-movie__checkbox-input'
                onChange={onChangeCheckboxHandler}
                checked={genres.includes('Comedy')}
              />
              <label htmlFor='comedy' className='add-movie__checkbox-label'>
                Comedy
              </label>
            </div>
          </div>
        )}
      </div>

      <Input
        element='input'
        type='text'
        name='runtime'
        id='runtime'
        label='Runtime'
        placeholder='minutes'
        className='add-movie__input'
        onInput={inputHandler}
      />

      <Input
        id='overview'
        name='overview'
        element='textarea'
        label='Overview'
        placeholder='Movie description'
        className='add-movie__input'
        formControlClassName='form-control--span-2'
        onInput={inputHandler}
      />

      <div className='form-control__cta'>
        <Button displayType='tertiary' size='1'>
          Reset
        </Button>
        <Button
          displayType='primary'
          type='submit'
          disabled={!formState.isValid}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
