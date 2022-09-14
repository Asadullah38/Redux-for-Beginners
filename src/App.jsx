import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
const App = () => {
  const amount=useSelector(state=>state.amount);
  return (
    <div>
      <h1>Redux First Tutorial Project</h1>
      <button id="button">+</button>
      <button id="button">-</button>
      <h1>Your Balance is {amount}</h1>
      
    </div>
  );
};

export default App;
