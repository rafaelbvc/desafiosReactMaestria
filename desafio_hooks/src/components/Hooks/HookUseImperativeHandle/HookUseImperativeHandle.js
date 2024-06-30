import { useRef } from "react";
import RefToImperativeHandle from "./RefToImperativeHandle";

const HookUseImperativeHandle = () => {
  const componentInputRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <RefToImperativeHandle ref={componentInputRef} />
      <button onClick={() => componentInputRef.current.validate()}>
        Validate
      </button>
      <hr />
    </div>
  );
};

export default HookUseImperativeHandle;
