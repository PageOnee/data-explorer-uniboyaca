import axios from "axios";

const dataApi = axios.create({
  baseURL: "http://localhost:8000/data-explorer/api/data/",
});

// ** Traer todos los usuarios
export const getAllData = () => dataApi.get("/");

export const getInformacionPersonal = () =>
  dataApi.get("/pregrado/semester/2022-2/informacion-personal");
