import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:8000/data-explorer/api/v1/users/",
});

// ** Traer los usuarios
export const getAllUser = () => userApi.get("/");

// ** Guardar usuario registrado
export const createUser = (user) => userApi.post("/", user);
