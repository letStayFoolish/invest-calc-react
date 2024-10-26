export const InputFields = {
  InitialInvestment: "initialInvestment",
  AnnualInvestment: "annualInvestment",
  ExpectedReturn: "expectedReturn",
  Duration: "duration",
} as const;

export type InputFieldsType = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

export type ObjectValues<T> = T[keyof T];

export type InputFieldsValues = ObjectValues<typeof InputFields>;
