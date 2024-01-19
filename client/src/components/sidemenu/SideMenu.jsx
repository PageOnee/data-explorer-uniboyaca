import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdMenu, MdOutlineHome, MdOutlineHelpOutline } from "react-icons/md";
import { TbReportAnalytics, TbReport, TbFileReport } from "react-icons/tb";
import "./SideMenu.css";

// ! Items
const menuItems = [
  {
    name: "Inicio",
    icon: <MdOutlineHome />,
    path: "inicio",
  },
  {
    name: "Reporte General",
    icon: <TbReportAnalytics />,
    path: "reporte-general",
  },
  {
    name: "Reporte Anual",
    icon: <TbReport />,
    path: "reporte-anual",
  },
  {
    name: "Reporte Semestral",
    icon: <TbFileReport />,
    path: "reporte-semestral",
  },
  {
    name: "Ayuda",
    icon: <MdOutlineHelpOutline />,
    path: "ayuda",
  },
];

// * Header del menu
const MenuHeader = () => (
  <header className="side-menu__header">
    <button type="button" className="header__btn-menu">
      <MdMenu size={28} />
    </button>
    <h1 className="header__title-menu">Explorador de Datos</h1>
  </header>
);

// * Botones del menu
const NavButton = ({ onClick, name, icon, isActive }) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className={`side-menu__btn ${isActive ? "side-menu__btn-active" : ""}`}
  >
    {icon && <span className="btn__icon-items">{icon}</span>}
    <span>{name}</span>
  </button>
);

// Todo : Componente menu lateral
export const SideMenu = () => {
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();

  const handleClick = (item) => {
    setActiveItem(item !== activeItem ? item : "");
    navigate(`/${item.path}`);
  };

  return (
    <aside className="side-menu">
      <MenuHeader />
      {menuItems.map((item) => (
        <NavButton
          key={item.name}
          onClick={() => handleClick(item)}
          name={item.name}
          icon={item.icon}
          isActive={activeItem === item.name}
        />
      ))}
    </aside>
  );
};
