import React from "react";
import { InputFieldsType } from "../types";
import { calculateInvestmentResults, formatter } from "../utils";

type Props = {
  input: InputFieldsType;
};

const Results: React.FC<Props> = ({ input }) => {
  console.log({ input });

  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    input;

  const result = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  console.log({ result });

  console.log({ initialInvestment });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result?.map((row) => {
          const totalInterest =
            row.valueEndOfYear -
            row.annualInvestment * row.year -
            initialInvestment;

          const totalAmountInvested = row.valueEndOfYear - totalInterest;

          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
