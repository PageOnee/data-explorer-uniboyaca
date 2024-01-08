import axios from "axios";

// Todo : Conexion API - Users
const userApi = axios.create({
  baseURL: "http://localhost:8000/data-explorer/api/v1/users/",
});

// ** Traer todos los usuarios
export const getAllUser = () => userApi.get("/");

// ** Crear un usuario registrado
export const createUser = (user) => userApi.post("/", user);
