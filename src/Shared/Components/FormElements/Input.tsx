import { useEffect, useReducer } from 'react';

interface InputProps {
  element: string;
  type?: string;
  label?: string;
  id: string;
  name: string;
  placeholder?: string;
  initialValue?: string;
  initialValid?: boolean;
  className: string;
  formControlClassName?: string;
  errorText?: string;
  rows?: number;
  onInput: (id: string, value: string, isValid: boolean) => void;
}

interface StateProps {
  value: string;
  isTouched: boolean;
  isValid: boolean;
}

interface ActionProps {
  type: string;
  val: string;
}

const inputReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: true // To-do once validator is implemented as part of form task
      };
    case 'TOUCHED':
      return {
        ...state,
        isTouched: true
      };
    default:
      return state;
  }
};

export default function Input(props: InputProps) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || true
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const onChangeHandler = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value
    });
  };

  const onTouchHandler = () => dispatch({ type: 'TOUCH', val: '' });

  const element =
    props.element === 'input' ? (
      <input
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        type={props.type}
        value={inputState.value}
        className={props.className}
        onChange={onChangeHandler}
        onBlur={onTouchHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 5}
        onChange={onChangeHandler}
        onBlur={onTouchHandler}
        value={inputState.value}
        placeholder={props.placeholder}
        className={props.className}
      />
    );

  return (
    <div className={`form-control ${props.formControlClassName}`}>
      {props.label && (
        <label className='form-control__input-label' htmlFor={props.id}>
          {props.label}
        </label>
      )}
      {element}
      {props.errorText && <p className='error-text'>{props.errorText}</p>}
    </div>
  );
}
