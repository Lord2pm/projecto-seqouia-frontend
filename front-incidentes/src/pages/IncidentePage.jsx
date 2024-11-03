import React from "react";
import IncidenteList from "../components/incidente/IncidenteList";
import CreateIncidente from "../components/incidente/CreateIncidente";

function IncidentePage() {
    return (
        <div>
            <h1>Sistema de Gestão de Incidentes</h1>
            <CreateIncidente />
            <IncidenteList />
        </div>
    );
}

export default IncidentePage;
