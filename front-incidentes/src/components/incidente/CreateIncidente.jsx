import React, { useState } from "react";
import { createIncidente } from "../../services/incidenteService";

function CreateIncidente() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [idTipo, setIdTipo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createIncidente({
        titulo,
        descricao,
        localizacao,
        id_tipo: parseInt(idTipo),
      });
      alert("Incidente criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar incidente:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="text"
        placeholder="Localização"
        value={localizacao}
        onChange={(e) => setLocalizacao(e.target.value)}
      />
      <input
        type="number"
        placeholder="ID do Tipo"
        value={idTipo}
        onChange={(e) => setIdTipo(e.target.value)}
      />
      <button type="submit">Registar Incidente</button>
      <hr />
    </form>
  );
}

export default CreateIncidente;
