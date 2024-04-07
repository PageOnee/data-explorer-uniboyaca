/// Iconos
import { FaSortDown } from "react-icons/fa";

/// Estilos
import "./Header.css";


// Componente : Cabecera principal
export const Header = ({ titleModule, titleSection }) => {

  // Convertir a mayusculas
  const titleModuleUpper = titleModule.toUpperCase();
  const titleSectionUpper = titleSection.toUpperCase();

  return (
    <div className="col-12 d-flex flex-row justify-content-between align-items-center header">

      {/* Titulo de la pagina */}
      <div className="px-4 header__title-header">
        <h2>
          <span className=""> {titleModuleUpper} </span>
          <span className="mx-2"> / </span>
          <span className="mx-2 text-red"> {titleSectionUpper} </span>
        </h2>
      </div>

      {/* Contendor - Informacion usuario */}
      <div className="d-flex flex-row align-items-center header__user-container">

        <p className="my-auto">Maicol Rojas</p>
        <img src="/assets/images/predefined-user.jpg" alt="Foto de Perfil del Usuario" />
        <FaSortDown />

      </div>

    </div>
  );
};
