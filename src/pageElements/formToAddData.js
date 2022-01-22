import React, { useRef } from "react";
import InputForm from "../components/inputForm/inputForm";
import Button from "../components/button/button";
import Counter from "../components/counter/counter";

const FormToAddData = () => {
  
  const refInputName = useRef('');
  const refInputStart = useRef('');
  const refInputFinish = useRef('');
  
  return (
    <>
      <InputForm
        id="road-name"
        laben="oznaczenie drogi"
        placeholder="nazwa drogi"
        refInput={refInputName}
      />
      <div className="flex flex-row justify-center gap-3">
        <div className="basis-1/4">
          <InputForm
            id="road-start"
            laben="początek"
            placeholder="np. 1+300 lub 1,300"
            refInput={refInputStart}
          />
        </div>
        <div className="basis-1/4">
          <InputForm
            id="road-finish"
            laben="koniec"
            placeholder="np. 3+000 lub 3,000"
            refInput={refInputFinish}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-3">
        <div className="basis-1/4">
          <Button click={() => Counter(refInputName.current.value, refInputStart.current.value, refInputFinish.current.value)}/>
        </div>
      </div>
    </>
  );
};

export default FormToAddData;
