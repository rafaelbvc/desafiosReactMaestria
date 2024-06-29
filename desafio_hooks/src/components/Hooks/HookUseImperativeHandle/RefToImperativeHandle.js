import { forwardRef, useRef, useImperativeHandle } from "react";

const RefToImperativeHandle = forwardRef((props, ref) => {
  const localInputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localInputRef.current.value.length > 3) {
          localInputRef.current.value = "";
        }
      },
    };
  });

  return (
    <div>
      <h3>refToImperativeHandle</h3>
      <p>Insira no máximo 3 caracteres</p>
      <input type="text" ref={localInputRef} />
    </div>
  );
});

export default RefToImperativeHandle;
