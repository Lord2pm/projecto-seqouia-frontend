import React, { useEffect, useState } from "react";
import { fetchTiposIncidentes } from "../../services/incidenteService";
import ViewTipoIncidente from "./ViewTipoIncidente";

function TipoIncidenteList() {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    fetchTiposIncidentes()
      .then((response) => setTipos(response.data))
      .catch((error) =>
        console.error("Erro ao buscar tipos de incidentes:", error)
      );
  }, []);

  return (
    <div>
      <h2>Tipos de Incidentes</h2>
      <ul>
        {tipos.map((tipo) => (
          <li key={tipo.id}>
            <ViewTipoIncidente tipo={tipo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TipoIncidenteList;
