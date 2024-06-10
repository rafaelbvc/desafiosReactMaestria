import React, { useState } from "react";
import styled from "./Carros.module.css";

const Carros = () => {
  const [carroDetalhes] = useState([
    { id: 1, modelo: "celta", cor: "preto" },
    { id: 2, modelo: "agile", cor: "cinza" },
    { id: 3, modelo: "uno", cor: "vermelho" },
    { id: 4, modelo: "fusca", cor: "azul" },
  ]);

  return (
    <div>
      <ul>
        {carroDetalhes.map((carroDetalhes) => (
          <li key={carroDetalhes.id} className={styled.listaCarros}>
            Modelo: {carroDetalhes.modelo} <br /> Cor: {carroDetalhes.cor}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carros;
