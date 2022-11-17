import React, { useEffect, useState } from 'react';

import { useForm } from '../Shared/hooks/form-hook';
import Input from '../Shared/Components/FormElements/Input';
import Button from '../Shared/Components/FormElements/Button';

export interface MovieProps {
  title: string;
  releaseDate: string;
  movieUrl: string;
  rating: string;
  genre: string;
  runtime: string;
  overview: string;
  onCancel: () => void;
}

export default function EditMovie(props: MovieProps) {
  console.log('PROPS', props);
  const [loadedMovie, setLoadedMovie] = useState({
    title: props.title,
    releaseDate: props.releaseDate,
    movieUrl: props.movieUrl,
    rating: props.rating,
    genre: props.genre,
    runtime: props.runtime,
    overview: props.overview
  });

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
      genre: {
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

  const onSelectChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoadedMovie({
      ...loadedMovie,
      [name]: value
    });
  };

  const resetFormHandler = () => {
    setLoadedMovie({
      title: '',
      releaseDate: '',
      movieUrl: '',
      rating: '',
      genre: '',
      runtime: '',
      overview: ''
    });
  };

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
    };
    console.log(target.title.value);
    props.onCancel(); // Close Modal
  };

  return (
    <form className='edit-movie' onSubmit={onSubmitHandler}>
      <Input
        element='input'
        type='text'
        name='title'
        id='title'
        label='Title'
        className='add-movie__input'
        onInput={inputHandler}
        initialValue={loadedMovie.title}
        initialValid={true}
      />

      <Input
        element='input'
        type='date'
        name='releaseDate'
        label='Release Date'
        id='releaseDate'
        className='add-movie__input add-movie__input--date'
        onInput={inputHandler}
        initialValue={loadedMovie.releaseDate}
        initialValid={true}
      />

      <Input
        element='input'
        type='text'
        name='movieUrl'
        id='movieUrl'
        label='Movie Url'
        className='add-movie__input'
        onInput={inputHandler}
        initialValue={loadedMovie.movieUrl}
        initialValid={true}
      />

      <Input
        element='input'
        type='text'
        name='rating'
        id='rating'
        label='Rating'
        className='add-movie__input'
        onInput={inputHandler}
        initialValue={loadedMovie.rating}
        initialValid={true}
      />

      <div className='form-control'>
        <label className='form-control__input-label' htmlFor='genre'>
          Genre
        </label>
        <select
          id='genre'
          name='genre'
          className='add-movie__input add-movie__input--select'
          value={loadedMovie.genre}
          onChange={onSelectChangeHandler}
        >
          <option value=''>Select Genre</option>
          <option value='crime'>Crime</option>
          <option value='documentary'>Documentary</option>
          <option value='horror'>Horror</option>
          <option value='comedy'>Comedy</option>
        </select>
      </div>

      <Input
        element='input'
        type='text'
        name='runtime'
        id='runtime'
        label='Runtime'
        className='add-movie__input'
        onInput={inputHandler}
        initialValue={loadedMovie.runtime}
        initialValid={true}
      />

      <Input
        id='overview'
        name='overview'
        element='textarea'
        label='Overview'
        className='add-movie__input'
        formControlClassName='form-control--span-2'
        onInput={inputHandler}
        initialValue={loadedMovie.overview}
        initialValid={true}
      />

      <div className='form-control__cta'>
        <Button
          displayType='tertiary'
          size='1'
          onClickHandler={resetFormHandler}
        >
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
