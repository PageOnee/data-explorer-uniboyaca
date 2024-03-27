/// Librerias de react
import React from "react";
import ReactDOM from "react-dom/client";

/// Componente principal
import App from "./App.jsx";

/// Estilos
import "./styles/index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
