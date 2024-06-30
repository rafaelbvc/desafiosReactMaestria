import { useDebugValue, useEffect, useRef } from "react";

export const useHookDebugValue = (value) => {
  const ref = useRef;

  useDebugValue("CustomHook && useDebugValue");
  useDebugValue("O número anterior é: " + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
