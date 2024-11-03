import React, { useEffect, useState } from "react";
import { fetchIncidentes } from "../../services/incidenteService";
import ViewIncidente from "./ViewIncidente";

function IncidenteList() {
  const [incidentes, setIncidentes] = useState([]);

  useEffect(() => {
    fetchIncidentes()
      .then((response) => setIncidentes(response.data))
      .catch((error) => console.error("Erro ao buscar incidentes:", error));
  }, []);

  return (
    <div>
      <h2>Lista de Incidentes</h2>
      <ul>
        {incidentes.map((incidente) => (
          <li key={incidente.id}>
            <ViewIncidente incidente={incidente} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncidenteList;
