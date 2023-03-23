import React, { useState } from "react";

const Counter = ({ timer, setTimer }) => {
  const [timerInterval, setTimerInterval] = useState(null);

  const startTimer = () => {
    let value = timer;
    let interval = setInterval(() => setTimer(value++), 100);
    setTimerInterval(interval);
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
    setTimer(0);
  };
  return (
    <>
      <button onClick={startTimer}>Start</button>
      <span>{timer}</span>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
};

export default Counter;
