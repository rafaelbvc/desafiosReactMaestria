import "./Description.css";
import { useContext, useState } from "react";
import { CounterContext } from "../context/CounterContext";

const Description = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div className="description_pg">
      <h3>Description</h3>
      <p>Valor do contador: {counter}</p>
      <button onClick={() => {setCounter(counter + 8)}}>ADD 8</button>
    </div>
  );
};

export default Description;
