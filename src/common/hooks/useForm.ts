import React, { useState } from 'react';
import { IInput } from '../types/common';

const useForm = (inputModel: IInput[], submitCallback: () => void): any => {
  const [inputs, handleInputs] = useState(inputModel);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    inputs.forEach((input: IInput) => {
      if (input.name === event.target.name) {
        input.value = event.target.value;
        validateInput(input);
      }
    });
    handleInputs([...inputs]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) : void => {
    event && event.preventDefault();
    inputs.forEach((input: IInput) => validateInput(input));
    inputs.some((input: IInput) => input.error) ? handleInputs([...inputs]) : submitCallback();
  };

  const validateInput = (input: IInput): void => {
    if (!input.validator.isValidFun(input.value)) {
        input.error = true;
    };
  }

  return [inputs, handleChange, handleSubmit]
};

export default useForm;
