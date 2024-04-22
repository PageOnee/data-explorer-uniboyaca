/// Librerias de angular
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/// Iconos
import { MdMenu, MdOutlineHome } from "react-icons/md";
import { TbReportAnalytics, TbFileReport, TbReport, TbReportSearch } from "react-icons/tb";

// Estilos
import "./SideMenu.css";


// Items del menu
const menuItems = [
  {
    name: "Inicio",
    icon: <MdOutlineHome />,
    path: "inicio"
  },
  // {
  //   name: "Reporte por Periodo",
  //   icon: <TbReportSearch />,
  //   path: "reporte-periodo/reporte-semestre"
  // },
  {
    name: "Reporte Semestral",
    icon: <TbFileReport />,
    path: "reporte-periodo/reporte-semestre"
  },
  {
    name: "Reporte Anual",
    icon: <TbReport />,
    path: "reporte-periodo/reporte-anual"
  },
  {
    name: "Reporte General",
    icon: <TbReportAnalytics />,
    path: "reporte-periodo/reporte-general"
  },
  {
    name: "Reporte Historico",
    icon: <TbReportAnalytics />,
    path: "reporte-historico"
  }
];


// Cabecera del menu de navegacion
const MenuHeader = () => (
  <header className="d-flex flex-row align-items-center p-1 sidemenu__header">

    {/* Titulo */}
    <h1 className="header__title-menu p-3">
      <MdMenu size={28} />
      <span className="mx-3"> Explorador de Datos </span>
    </h1>

  </header>
);


// Items del menu de navegacion
const NavButton = ({ onClick, name, icon, isActive }) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className="side-menu__btn"
  >

    {icon && <span className="btn__icon-items">{icon}</span>}
    <span>{name}</span>

  </button>
);


// Componente : Menu de navegacion lateral
export const SideMenu = () => {

  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();


  const handleClick = (item) => {
    setActiveItem(item !== activeItem ? item : "");
    navigate(`/${item.path}`);
  };


  return (
    <div className="col-12">
      <div className="d-flex flex-column sidemenu">

        <MenuHeader />

        {menuItems.map((item) => (

          <NavButton
            key={item.name}
            onClick={() => handleClick(item)}
            name={item.name}
            icon={item.icon}
          />

        ))}

      </div>
    </div>
  );
};
