import { useState } from "react";
import {
  MdMenu,
  MdOutlineHome,
  MdOutlineHelpOutline,
  MdOutlineSettings,
} from "react-icons/md";
import { TbReportAnalytics, TbReport, TbFileReport } from "react-icons/tb";
import "./SideMenu.css";

// * Items :
const menuItems = [
  {
    name: "Inicio",
    icon: <MdOutlineHome />,
  },
  {
    name: "Reporte General",
    icon: <TbReportAnalytics />,
  },
  {
    name: "Reporte Anual",
    icon: <TbReport />,
  },
  {
    name: "Reporte Semestral",
    icon: <TbFileReport />,
  },
  {
    name: "Ayuda",
    icon: <MdOutlineHelpOutline />,
  },
  {
    name: "Ajustes",
    icon: <MdOutlineSettings />,
  },
];

// * Header del menu :
const MenuHeader = () => (
  <header className="side-menu__header">
    <button type="button" className="header__btn-menu">
      <MdMenu size={28} />
    </button>
    <h1 className="header__title-menu">Explorador de Datos</h1>
  </header>
);

// * Botones del menu :
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

// * Componente menu lateral :
export const SideMenu = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item) => {
    setActiveItem(item !== activeItem ? item : "");
  };

  return (
    <aside className="side-menu">
      <MenuHeader />
      {menuItems.map((item) => (
        <NavButton
          key={item.name}
          onClick={handleClick}
          name={item.name}
          icon={item.icon}
          isActive={activeItem === item.name}
        />
      ))}
    </aside>
  );
};
