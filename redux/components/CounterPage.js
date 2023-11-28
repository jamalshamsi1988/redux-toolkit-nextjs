"use client"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  selectCounter,
} from "@/redux-toolkit/features/counterSlice";

const CounterPage = () => {
  const [number, setNamber] = useState(2);
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter Is : {counter}</h3>
      <button onClick={() => dispatch(increment())}>Increment </button>
      <button onClick={() => dispatch(decrement())}>Increment </button>
     <input type="number" value={number}  onChange={e => setNamber(e.target.value)}/>
      <button onClick={() => dispatch(incrementByAmount(+number))}>
        Increment By Amount
      </button>
    </div>
  );
};

export default CounterPage;
