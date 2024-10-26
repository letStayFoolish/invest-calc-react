import React from "react";

// @ts-expect-error
import logo from "../assets/investment-calculator-logo.png";

const Header: React.FC = () => {
  return (
    <header id="header">
      <img src={logo} alt="Investment app logo" />
      <h1>React Investment Calculator</h1>{" "}
    </header>
  );
};

export default Header;
