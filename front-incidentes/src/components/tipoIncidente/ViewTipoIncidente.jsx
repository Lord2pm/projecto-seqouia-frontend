import React from "react";

function ViewTipoIncidente({ tipo }) {
  return (
    <div>
      <h3>{tipo.nome}</h3>
      <p>{tipo.descricao}</p>
    </div>
  );
}

export default ViewTipoIncidente;
