import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // useEffect sem dependencia
  useEffect(() => {
    console.log("estou sendo executado, dependencia vazia");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };
  //apenas uma vez
  useEffect(() => {
    console.log("estou sendo executado dependencia vazia");
  }, []);

  const [numberB, setNumberB] = useState(0);

  useEffect(() => {
    if (numberB > 0) {
      console.log("estou sendo executado dependencia numberB, quando ele muda o state");
    }
  }, [numberB]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Execute</button>
      <p>Number B: {numberB}</p>
      <button onClick={() => setNumberB(numberB + 1)}>Change Number B</button>
    </div>
  );
};

export default HookUseEffect;
