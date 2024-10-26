import React from "react";
import {
  InputFields,
  type InputFieldsType,
  type InputFieldsValues,
} from "../types";

type Props = {
  onChange: (inputIdentifier: InputFieldsValues, newValue: string) => void;
  inputFields: InputFieldsType;
};

const UserInput: React.FC<Props> = ({ onChange, inputFields }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={inputFields.initialInvestment}
            name={InputFields["InitialInvestment"]}
            onChange={(event) =>
              onChange(
                event.target.name as InputFieldsValues,
                event.target.value,
              )
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={inputFields.annualInvestment}
            name={InputFields["AnnualInvestment"]}
            onChange={(event) =>
              onChange(
                event.target.name as InputFieldsValues,
                event.target.value,
              )
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={inputFields.expectedReturn}
            name={InputFields["ExpectedReturn"]}
            onChange={(event) =>
              onChange(
                event.target.name as InputFieldsValues,
                event.target.value,
              )
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={inputFields.duration}
            name={InputFields["Duration"]}
            onChange={(event) =>
              onChange(
                event.target.name as InputFieldsValues,
                event.target.value,
              )
            }
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
