import api from "./api";

export const fetchIncidentes = () => api.get("/");
export const fetchIncidenteById = (id) => api.get(`/${id}/`);
export const createIncidente = (data) => api.post("/", data);
export const updateIncidente = (id, data) => api.put(`/${id}/`, data);
export const deleteIncidente = (id) => api.delete(`/${id}/`);

export const fetchTiposIncidentes = () => api.get("/tipos/");
export const fetchTipoIncidenteById = (id) => api.get(`/tipos/${id}/`);
