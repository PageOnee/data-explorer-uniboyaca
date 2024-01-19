import { FaSortDown } from "react-icons/fa";
import "./Header.css";

// Todo : Componente cabecera 
export const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="header__title-header">
        <h2>{title}</h2>
      </div>

      <div className="header__user-container">
        <p>Maicol Rojas</p>
        <img src="/assets/images/predefined-user.jpg" alt="Foto de Perfil del Usuario" />
        <FaSortDown />
      </div>
    </div>
  );
};
