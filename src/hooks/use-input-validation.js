import { useState } from 'react';

const useInputValidation = (validationFn) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputFieldTouched, setIsInputFieldTouched] = useState(false);

  const isInputFieldValid = validationFn(enteredValue);
  const hasError = !isInputFieldValid && isInputFieldTouched;

  const inputChangeHandler = (ev) => {
    setEnteredValue(ev.target.value);
  };

  const inputBlurHandler = () => {
    setIsInputFieldTouched(true);
  };

  const resetFields = () => {
    setEnteredValue('');
    setIsInputFieldTouched(false);
  };

  return {
    value: enteredValue,
    validField: isInputFieldValid,
    hasError,
    inputBlurHandler,
    inputChangeHandler,
    resetFields,
  };
};

export default useInputValidation;
