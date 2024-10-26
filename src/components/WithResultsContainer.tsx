import React, { useState } from "react";
import UserInput from "./UserInput.tsx";
import Results from "./Results.tsx";
import { InputFields, InputFieldsType, type InputFieldsValues } from "../types";

const WithResultsContainer: React.FC = () => {
  const [inputFields, setInputFields] = useState<InputFieldsType>({
    [InputFields.InitialInvestment]: 1000,
    [InputFields.AnnualInvestment]: 500,
    [InputFields.ExpectedReturn]: 0.08,
    [InputFields.Duration]: 10,
  });

  console.dir(inputFields);

  const handleOnChange = (
    inputIdentifier: InputFieldsValues,
    newValue: string,
  ) => {
    setInputFields((prevFields) => ({
      ...prevFields,
      [inputIdentifier]: +newValue,
    }));
  };

  const inputIsValid = inputFields[InputFields.Duration] > 0;

  return (
    <>
      <UserInput inputFields={inputFields} onChange={handleOnChange} />
      {inputIsValid ? (
        <Results input={inputFields} />
      ) : (
        <p className="center">Please a duration greater than 0</p>
      )}
    </>
  );
};

export default WithResultsContainer;
