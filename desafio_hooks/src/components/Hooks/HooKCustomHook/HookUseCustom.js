import { useState } from "react";
import { useCustomHook } from "./useCustomHook";

const HookUseCustom = () => {
  const [number, setNumber] = useState(0);
  const previousValue = useCustomHook(number);

  return (
    <div>
      <h2>CustomHook</h2>
      <p>Autal: {number}</p>
      <p>Anterior: {previousValue}</p>
      <button onClick={() => setNumber(number + 1)}>Alterar!</button>
      <hr />
    </div>
  );
};

export default HookUseCustom;
