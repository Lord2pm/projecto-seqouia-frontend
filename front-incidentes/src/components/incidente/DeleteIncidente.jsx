import React from "react";
import { deleteIncidente } from "../../services/incidenteService";

function DeleteIncidente({ incidenteId }) {
  const handleDelete = async () => {
    try {
      await deleteIncidente(incidenteId);
      alert("Incidente deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar incidente:", error);
    }
  };

  return <button className="btn-delete" onClick={handleDelete}>Deletar</button>;
}

export default DeleteIncidente;
