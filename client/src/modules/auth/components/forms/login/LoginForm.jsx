/// Librerias de react
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

/// Librerias externas
import { WavyLink } from "react-wavy-transitions";
import { toast } from "react-hot-toast";

/// Servicios
import { getAllUser } from "../../../../../services/users.api";

/// Estilos
import "./LoginForm.css";


// Todo -> Componente : Formulario inicio de sesion
export const LoginForm = () => {

  // Recordar contrasena
  const [rememberMe, setRememberMe] = useState(false);

  // Funcionalidades del UseForm
  const { register, handleSubmit } = useForm();

  // Navegacion
  const navigate = useNavigate();

  // ** Metodo : Recordar contrasena
  const handleRememberMeChange = (event) => {
    const isChecked = event.target.checked;
    setRememberMe(isChecked);
  };


  // ** Metodo : Cargar los usuarios registrados
  const loadUsers = async () => {
    const res = await getAllUser();
    return res.data;
  };


  // ** Metodo :  Iniciar sesion
  const onSubmit = async (data) => {

    // Validar campos vacios
    if (!data.emailUsername && !data.password) {
      toast.error("Por favor, complete todos los campos");
      return;
    } else if (!data.emailUsername) {
      toast.error("Por favor, Ingresa tu correo o nombre de usuario");
      return;
    } else if (!data.password) {
      toast.error("Por favor, Ingresa tu contraseña");
      return;
    }

    // Carga la lista de usuarios
    const users = await loadUsers();

    // Verificar si el usuario existe
    const userValid = users.find(
      (user) =>
        (user.user_name === data.emailUsername || user.email === data.emailUsername) && user.password === data.password);

    // Carga informacion 
    if (userValid) {

      const userInfo = {
        id: userValid.id,
        username: userValid.user_name,
        email: userValid.email,
        password: userValid.password,
      }

      if (rememberMe) {
        localStorage.setItem('usuario', JSON.stringify(userInfo));
      } else {
        sessionStorage.setItem('usuario', JSON.stringify(userInfo));
      }

      navigate("/inicio");

    } else {
      toast.error("Credenciales incorrectas. Verifica tu correo electronico o contraseña");
    }

  };

  return (

    <section className="login">

      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>

        <h1 className="form__title-login"> Inicio de Sesion </h1>

        {/* Input : Email - Nombre de usuario */}
        <div className="form__input-box-login">
          <input
            type="text"
            id="emailUsername"
            placeholder="Email o Nombre de Usuario"
            {...register("emailUsername")}
          />
        </div>

        {/* Input : Contrasena */}
        <div className="form__input-box-login">
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            {...register("password")}
          />
        </div>

        {/* Recordar Usuario */}
        <div className="form__remember">
          <label htmlFor="remember">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Recuérdame
          </label>
          <a href="https://www.google.com/?hl=es">¿Olvidaste tu contraseña ?</a>
        </div>

        {/* Btn : Iniciar sesion */}
        <button type="submit" className="form__btn-login">
          Iniciar Sesion
        </button>

        {/* Navegacion adicional */}
        <div className="form__register-link">
          <p className="register-link__p">
            ¿ No tienes una cuenta ?
            <WavyLink to="/registro-usuario" color="#FF0303">
              <span>Crear Cuenta</span>
            </WavyLink>
          </p>
        </div>

      </form>

    </section>

  );

};
