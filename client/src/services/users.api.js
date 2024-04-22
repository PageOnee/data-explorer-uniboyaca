/// Librerias de react
import axios from "axios";


// Url base Api - Usuarios
const userApi = axios.create({
  baseURL: "http://localhost:8000/data-explorer/api/v1/users/",
});


// Servicio traer todos los usuarios
export const getAllUser = () => userApi.get("/");


// Servicio crear usuario 
export const createUser = (user) => userApi.post("/", user);
