import { useLayoutEffect, useState, useEffect } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Nome");

  useEffect(() => {
    console.log("Effect 2");
    setName("useEffect log 2");
  }, []);

  useLayoutEffect(() => {
    console.log("LayoutEffect 1");
    setName("layoutEffect log 1");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
    </div>
  );
};

export default HookUseLayoutEffect;
