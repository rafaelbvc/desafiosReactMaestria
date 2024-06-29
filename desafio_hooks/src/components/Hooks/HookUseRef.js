import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  // useRef e DOM
  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("")

    inputRef.current.focus()
  };

  return (
    <div>
      <h2>useRef</h2>
      <p>
        O componente renderizou:
        {/* {numberRef.current - 1 === -1 ? 0 : numberRef.current - 1} vezes. */}
        {numberRef.current} vezes.
      </p>
      <p>Counter A: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Counter A</button>
      <p>Counter B: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Counter B</button>
      <form onSubmit={handleSubmit}>
        <h2>useRef & DOM</h2>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input type="submit" value="Eviar" />
      </form>
      {Array.isArray(inputRef.current) &&
        inputRef.current.map((input, index) => <li key={index}>{input}</li>)}
    </div>
  );
};

export default HookUseRef;
