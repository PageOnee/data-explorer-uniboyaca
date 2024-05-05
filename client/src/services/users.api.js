/// Librerias de react
import axios from "axios";

// Url 
const URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : 'http://127.0.0.1:8000';


// Url base Api - Usuarios
const userApi = axios.create({
  baseURL: `${URL}/data-explorer/api/v1/users/`
});


// Servicio : Cargar lista de usuarios
export const getAllUser = () => userApi.get("/");

// Servicio : Registrar usuario
export const createUser = (user) => userApi.post("/", user);
