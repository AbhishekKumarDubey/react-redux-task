import { useReducer, useCallback } from 'react';

interface InitialInputsProps {
  [formInput: string]: {
    value: string;
    isValid: boolean;
  };
}

interface ActionProps {
  type: string;
  [data: string]: any;
}

interface StateProps {
  inputs: InitialInputsProps;
  isValid: boolean;
}

const formReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      const isFormValid = true;
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid
          }
        },
        isValid: isFormValid
      };
    default:
      return state;
  }
};

export function useForm(
  initialInputs: InitialInputsProps,
  initialFormValidity: boolean
) {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity
  });

  const inputHandler = useCallback(
    (id: string, value: string, isValid: boolean) => {
      dispatch({
        type: 'INPUT_CHANGE',
        inputId: id,
        isValid,
        value
      });
    },
    []
  );

  return { formState, inputHandler };
}
