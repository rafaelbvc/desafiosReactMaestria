import React from "react";
import "./Challenge.css";

const Challenge = () => {
  const valor_um = 7;
  const valor_dois = 11;

  const imprimirConsole = (e) => {
    //console.log(e);
    console.log(valor_um + valor_dois);
  };

  return (
    <div>
      <div>
        <span>Primeiro Valor = {valor_um}</span>
        <br />
        <span>Segundo Valor = {valor_dois}</span>
      </div>
      <button
        className="imprimir_valores_btn"
        onClick={(e) => imprimirConsole(e)}
      >
        Imprimir os valor no console!
      </button>
    </div>
  );
};

export default Challenge;
