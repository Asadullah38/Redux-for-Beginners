import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import AmountChanger from "./AmountChanger";

const App = () => {
  const amount = useSelector((state) => state.amount);

  return (
    <div>
      <h1>Redux First Tutorial Project</h1>
      <AmountChanger/>
      <h1>Your Balance is {amount}</h1>
    </div>
  );
};

export default App;
