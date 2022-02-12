import React, { useState, useContext, useEffect } from "react";
import InputForm from "../../components/InputForm/InputForm";
import Button from "../../components/Button/Button";
import Counter from "../../components/counter/counter";
import DataContext from "../../context/dataCtx";
import {
  isInputBlur,
  isCorrectFormatInputLength,
} from "../../components/formValidator/formValidator";

const FormToAddData = () => {
  const dataCtx = useContext(DataContext);

  const [nameInput, setNameInput] = useState("");
  const [startInput, setStartInput] = useState("");
  const [finishInput, setFinishInput] = useState("");

  const [formValid, setFormValid] = useState(false);
  const [nameInputValid, setNameInputValid] = useState(false);
  const [startInputValid, setStartInputValid] = useState(false);
  const [finishInputValid, setFinishInputValid] = useState(false);
  const [nameInputTouched, setNameInputTouched] = useState(false);
  const [startInputTouched, setStartInputTouched] = useState(false);
  const [finishInputTouched, setFinishInputTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setNameInput(event.target.value);
  };

  const startInputChangeHandler = (event) => {
    setStartInput(event.target.value);
  };

  const finishInputChangeHandler = (event) => {
    setFinishInput(event.target.value);
  };

  useEffect(() => {
    if (nameInput.trim() !== "") {
      setNameInputValid(true);
    } else {
      setNameInputValid(false);
    }
  }, [nameInput]);

  useEffect(() => {
    if (startInput.trim() !== "" && isCorrectFormatInputLength(startInput)) {
      setStartInputValid(true);
    } else {
      setStartInputValid(false);
    }
  }, [startInput]);

  useEffect(() => {
    if (finishInput.trim() !== "" && isCorrectFormatInputLength(finishInput)) {
      setFinishInputValid(true);
    } else {
      setFinishInputValid(false);
    }
  }, [finishInput]);

  useEffect(() => {
    if (nameInputValid && startInputValid && finishInputValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [formValid, nameInputValid, startInputValid, finishInputValid]);
  
  const [position, setPosition] = useState(0);

  const clearForm = () => {
    setNameInput("");
    setStartInput("");
    setFinishInput("");
    setNameInputTouched(false);
    setStartInputTouched(false);
    setFinishInputTouched(false);
  };

  return (
    <>
      <InputForm
        id="road-name"
        laben="oznaczenie drogi"
        placeholder="np. DK 16"
        touched={nameInputTouched}
        inputIsValid={nameInputValid}
        valueInput={nameInput}
        inputBlurHandler={() => isInputBlur(setNameInputTouched)}
        inputChangeHandler={nameInputChangeHandler}
      />
      <div className="flex flex-row justify-center gap-3">
        <div className="basis-1/4">
          <InputForm
            id="road-start"
            laben="początek"
            placeholder="np. 1+300 lub 1,300"
            touched={startInputTouched}
            valueInput={startInput}
            inputIsValid={startInputValid}
            inputBlurHandler={() => isInputBlur(setStartInputTouched)}
            inputChangeHandler={startInputChangeHandler}
          />
        </div>
        <div className="basis-1/4">
          <InputForm
            id="road-finish"
            laben="koniec"
            placeholder="np. 3+000 lub 3,000"
            touched={finishInputTouched}
            valueInput={finishInput}
            inputIsValid={finishInputValid}
            inputBlurHandler={() => isInputBlur(setFinishInputTouched)}
            inputChangeHandler={finishInputChangeHandler}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-3">
        <div className="basis-1/4">
          <Button
            disabled={formValid}
            click={() => {
              setPosition(position - 1);
              dataCtx.add(Counter(nameInput, position, startInput, finishInput));
              clearForm();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default FormToAddData;
