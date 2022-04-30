import useInputValidation from '../hooks/use-input-validation';

const nameInputsValidation = (value) => value.trim() !== '';

const emailInputValidation = (value) =>
  value.trim() !== '' &&
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    validField: firstNameInputValid,
    hasError: firstNameInputInvalid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetFields: resetFirstName,
  } = useInputValidation(nameInputsValidation);

  const {
    value: enteredLastName,
    validField: lastNameInputValid,
    hasError: lastNameInputInvalid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetFields: resetLastName,
  } = useInputValidation(nameInputsValidation);

  const {
    value: enteredEmail,
    validField: emailInputValid,
    hasError: emailInputInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetFields: resetEmail,
  } = useInputValidation(emailInputValidation);

  let isFormValid = false;

  if (firstNameInputValid && lastNameInputValid && emailInputValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (ev) => {
    ev.preventDefault();

    if (!isFormValid) return;

    console.log(enteredFirstName);

    resetFirstName();

    resetLastName();

    resetEmail();
  };

  const inputClasses = (inputInvalid) => {
    return inputInvalid ? 'form-control invalid' : 'form-control';
  };

  const firstNameInputClasses = inputClasses(firstNameInputInvalid);
  const lastNameInputClasses = inputClasses(lastNameInputInvalid);
  const emailInputClasses = inputClasses(emailInputInvalid);

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            id="name"
            value={enteredFirstName}
          />
          {firstNameInputInvalid && (
            <p className="error-text">Invalid first name!</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            type="text"
            id="name"
            value={enteredLastName}
          />
          {lastNameInputInvalid && (
            <p className="error-text">Invalid last name!</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="text"
          id="name"
          value={enteredEmail}
        />
        {emailInputInvalid && <p className="error-text">Invalid email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
