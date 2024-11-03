import React from "react";
import DeleteIncidente from "./DeleteIncidente";
import UpdateIncidente from "./UpdateIncidente";

function ViewIncidente({ incidente }) {
  return (
    <div>
      <h3>{incidente.titulo}</h3>
      <p>{incidente.descricao}</p>
      <UpdateIncidente incidente={incidente} />
      <DeleteIncidente incidenteId={incidente.id} />
    </div>
  );
}

export default ViewIncidente;
