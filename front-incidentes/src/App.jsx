import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IncidentePage from "./pages/IncidentePage";
import TipoIncidentePage from "./pages/TipoIncidentePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IncidentePage />} />
        <Route path="/tipos-incidentes" element={<TipoIncidentePage />} />
      </Routes>
    </Router>
  );
}

export default App;
