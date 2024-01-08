import { WavyLink } from "react-wavy-transitions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "../../../services/users.api";
import "./LoginForm.css";

export const LoginForm = () => {

  // ** Trae las funcionalidades del UseForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ** Navegacion
  const navigate = useNavigate();

  // ** Metodo Carga los Usuarios
  const loadUsers = async () => {
    const res = await getAllUser();
    console.log(res.data);
    return res.data; // Lista de usuarios para validaciones
  };

  // ** Metodo de inicio de sesión
  const onSubmit = async (data) => {
    // Carga la lista de usuarios
    const users = await loadUsers();

    // Verificar si el usuario existe
    const userExists = users.some(
      (user) =>
        (user.user_name === data.emailUsername ||
          user.email === data.emailUsername) &&
        user.password === data.password
    );

    if (userExists) {
      console.log("Usuario válido. Iniciando sesión...");
      navigate("/inicio");
    } else {
      console.log("Usuario inválido. Verifique sus datos");
    }
  };

  return (
    <section className="login">
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form__title-login"> Inicio de Sesion </h1>

        <div className="form__input-box-login">
          <input
            type="text"
            id="emailUsername"
            placeholder="Email o Nombre de Usuario"
            {...register("emailUsername", { required: true })}
          />
          {errors.emailUsername && console.log("Login Campo Requerido")}
        </div>

        <div className="form__input-box-login">
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && console.log("Login Campo Requerido")}
        </div>

        <div className="form__remember">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            Recuerdame
          </label>
          <a href="https://www.google.com/?hl=es">¿Olvidaste tu contraseña ?</a>
        </div>

        <button type="submit" className="form__btn-login">
          Iniciar Sesion
        </button>

        <div className="form__register-link">
          <p className="register-link__p">
            ¿ No tienes una cuenta ?
            <WavyLink to="/registro-usuario" color="#FF004D">
              <span>Crear Cuenta</span>
            </WavyLink>
          </p>
        </div>
      </form>
    </section>
  );
};
