/// Librerias de react
import axios from "axios";

// Url 
const URL =
  import.meta.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : 'https://web-production-7d5f.up.railway.app';


// Url base Api - Usuarios
const userApi = axios.create({
  baseURL: `${URL}/data-explorer/api/v1/users/`
});


// Servicio : Cargar lista de usuarios
export const getAllUser = () => userApi.get("/");

// Servicio : Registrar usuario
export const createUser = (user) => userApi.post("/", user);
