import React from "react";

import "./InputForm.css";

const InputForm = ({
  id,
  laben,
  placeholder,
  refInput,
  inputBlurHandler,
  inputIsValid,
  valueInput,
  touched,
  inputChangeHandler,
}) => {
  return (
    <div className="input-form--container">
      <div className="input-form--row">
        <label htmlFor={id} className="input-form--label">
          {laben.toUpperCase()}
        </label>
        <input
          type="text"
          className={`input-form--input-text ${
            !inputIsValid && touched ? "inValidInput" : ""
          }`}
          id={id}
          placeholder={placeholder}
          ref={refInput}
          value={valueInput}
          onBlur={inputBlurHandler}
          onChange={(event) => inputChangeHandler(event)}
        />
      </div>
    </div>
  );
};

export default InputForm;
