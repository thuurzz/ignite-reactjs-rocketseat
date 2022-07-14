import React from "react";
import { useState } from "react";

const Counter = () => {
  const [cont, setCont] = useState(0);

  function handleIncrement() {
    setCont(cont + 1);
  }

  return (
    <>
      <h2>{cont}</h2>
      <button onClick={handleIncrement}>Somar</button>
    </>
  );
};

export default Counter;
