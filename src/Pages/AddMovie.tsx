import { useForm } from '../Shared/hooks/form-hook';
import Input from '../Shared/Components/FormElements/Input';
import Button from '../Shared/Components/FormElements/Button';

export default function AddMovie() {
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

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
    };
    console.log(target.title.value);
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
        name='release-date'
        label='Release Date'
        id='releaseDate'
        placeholder='Select Date'
        className='add-movie__input add-movie__input--date'
        onInput={inputHandler}
      />

      <Input
        element='input'
        type='text'
        name='movie-url'
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

      <div className='form-control'>
        <label className='form-control__input-label' htmlFor='genre'>
          Genre
        </label>
        <select
          id='genre'
          name='genre'
          className='add-movie__input add-movie__input--select'
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
