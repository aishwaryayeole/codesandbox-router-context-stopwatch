import React, { useContext } from "react";
import ClockContext from "./ClockContext";

const Counter = () => {
  const { counter, setCounter } = useContext(ClockContext);

  const increaseConuter = () => {
    let currentValue = counter;
    setCounter(currentValue + 1);
  };

  const decreaseConuter = () => {
    let currentValue = counter;
    setCounter(currentValue - 1);
  };
  return (
    <>
      <button onClick={decreaseConuter}>-</button>
      <span>{counter}</span>
      <button onClick={increaseConuter}>+</button>
    </>
  );
};

export default Counter;
