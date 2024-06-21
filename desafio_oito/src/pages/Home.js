import "./Home.css";
import { useContext, useState } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../Components/ChangeCounter";

const Home = () => {
  const { counter } = useContext(CounterContext);


  return (
    <div className="home_pg">
      <h3>Home</h3>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
