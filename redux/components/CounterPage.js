"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  selectCounter,
} from "@/redux-toolkit/features/counterSlice";

const CounterPage = () => {
  const [value, setValue] = useState(2);
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter Is : {counter}</h3>
      <button onClick={() => dispatch(increment())}>Increment </button>
      <button onClick={() => dispatch(decrement())}>Increment </button>
      <input
        type="number"
        value={value}
        oncChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(+value))}>
        Increment By Amount
      </button>
    </div>
  );
};

export default CounterPage;
