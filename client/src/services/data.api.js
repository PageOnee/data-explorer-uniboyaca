import axios from "axios";

// Todo : Conexion con la api -> Dsata
const dataApi = axios.create({
  baseURL: "http://localhost:8000/data-explorer/api/data/",
});

export const getAllData = () => dataApi.get("/");

export const getInfoSemester = (lapsed, category) => {
  return dataApi.get(`/Pregrado/Semestral/${lapsed}/${category}`);
};

export const getInfoAnnual = (lapsed, category) => {
  return dataApi.get(`/pregrado/Anual/${lapsed}/${category}`);
};
