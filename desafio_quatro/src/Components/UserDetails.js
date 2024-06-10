import React, { useState } from "react";

const UserDetails = () => {
  const [userDetails] = useState([
    { id: 1, nome: "João", idade: 14, profissao: "estudante" },
    { id: 2, nome: "Joaquim", idade: 22, profissao: "desenvolvedor" },
    { id: 3, nome: "Monica", idade: 29, profissao: "esteticista" },
    { id: 4, nome: "Fernando", idade: 44, profissao: "motorista" },
    { id: 5, nome: "Patricia", idade: 16, profissao: "estudante" },
  ]);

  return (
    <div>
      <ul>
        {userDetails.map((users) => (
          <li key={users.id}>
            Nome: {users.nome}
            <br />
            Idade: {users.idade}
            <br />
            Profissão: {users.profissao}
            <br />
            Pode tirar carteira habilitação? <br />
            {users.idade >= 18 ? "Sim" : "Não"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
