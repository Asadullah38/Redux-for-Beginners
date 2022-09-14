import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

const AmountChanger = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <button
        id="button"
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
      <button
        id="button"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
    </div>
  );
};

export default AmountChanger;
