import React, { useState } from "react";
import "./styles.css";
import Counter from "./Counter";
import StopWatch from "./StopWatch";
import ClockContext from "./ClockContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [counter, setCounter] = useState(0);

  return (
    <ClockContext.Provider
      value={{
        timer,
        setTimer,
        counter,
        setCounter
      }}
    >
      <BrowserRouter>
        <div className="App">
          <h1> Homepage </h1>
          <div> Counter: {counter}</div>
          <Routes>
            <Route path="counter" element={<Counter />}></Route>
            <Route path="stopwatch" element={<StopWatch />}></Route>
          </Routes>
          {/* <Counter /> */}
        </div>
      </BrowserRouter>
    </ClockContext.Provider>
  );
}
