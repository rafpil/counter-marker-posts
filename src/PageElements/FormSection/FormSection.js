import React, { useState, useContext, useEffect } from "react";
import InputForm from "../../Components/InputForm/InputForm";
import Button from "../../Components/Button/Button";
import Counter from "../../Components/Counter/Counter";
import DataContext from "../../Context/DataCtx";
import GenerateAndOpenPdf from "../../Components/PdfCreator/GenerateAndOpenPdf";
import {
  isInputBlur,
  isCorrectFormatInputLength,
} from "../../Components/FormValidator/FormValidator";
import isStartInputValSmalerThanFinishInputVal from "../../Components/FormValidator/isStartInputValSmallerThanFinishInputVal";

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
    if (
      startInput.trim() !== "" &&
      isCorrectFormatInputLength(startInput) &&
      isStartInputValSmalerThanFinishInputVal(startInput, finishInput)
    ) {
      setStartInputValid(true);
    } else {
      setStartInputValid(false);
    }
  }, [startInput, finishInput]);

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
    <div className="flex flex-col items-center justify-center">
      <div className="p-1 flex justify-center">
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
      </div>
      <div className="flex flex-col p-1 sm:flex-row md:w-[43rem] justify-center xl:gap-3">
        <div className="w-full sm:w-2/4 sm:px-1 flex justify-center">
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
        <div className="w-full sm:w-2/4 sm:px-1 flex justify-center">
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
      <div className="flex flex-col sm:flex-row justify-center w-[18rem] sm:w-full md:w-[43rem]">
        <div className="w-full py-3 sm:ml-[25%] sm:w-2/4 flex justify-center max-w-[18rem] sm:p-3">
          <Button
            disabled={formValid}
            click={() => {
              setPosition(position - 1);
              dataCtx.add(
                Counter(nameInput, position, startInput, finishInput)
              );
              clearForm();
            }}
          >
            Przelicz i dodaj
          </Button>
        </div>
        <div className="w-full py-3 sm:w-1/4 flex justify-center sm:max-w-[11rem] sm:p-3">
          <Button
            disabled={dataCtx.data.length}
            click={() => GenerateAndOpenPdf(dataCtx)}
          >
            Export do PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormToAddData;
