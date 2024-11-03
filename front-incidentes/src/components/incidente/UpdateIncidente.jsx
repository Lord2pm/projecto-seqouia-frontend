import React, { useState } from "react";
import { updateIncidente } from "../../services/incidenteService";

function UpdateIncidente({ incidente }) {
  const [titulo, setTitulo] = useState(incidente.titulo);
  const [descricao, setDescricao] = useState(incidente.descricao);

  const handleUpdate = async () => {
    try {
      await updateIncidente(incidente.id, { titulo, descricao });
      alert("Incidente atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar incidente:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <button onClick={handleUpdate}>Actualizar</button>
    </div>
  );
}

export default UpdateIncidente;
