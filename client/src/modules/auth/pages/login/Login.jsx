/// Librerias de react
import { LoginForm } from "../../components/forms/login/LoginForm";

/// Librerias externas
import { Toaster } from "react-hot-toast";

// Estilos
import "./Login.css";


// Todo -> Pagina : Iniciar sesion
export const Login = () => {

  return (

    <main className="login-page">

      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Formulario inicio sesion */}
      <LoginForm></LoginForm>

    </main>

  );

};
