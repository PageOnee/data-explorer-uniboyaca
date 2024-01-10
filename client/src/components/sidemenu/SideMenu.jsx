import {
  MdMenu,
  MdOutlineHome,
  MdOutlineHelpOutline,
  MdOutlineSettings,
} from "react-icons/md";
import { TbReportAnalytics, TbReport, TbFileReport   } from "react-icons/tb";

import "./SideMenu.css";
import { useState } from "react";

const menuItems = [
  {
    name: "Inicio",
    icon: <MdOutlineHome />,
  },
  {
    name:"Reporte General",
    icon:<TbReportAnalytics />,
  },
  {
    name:"Reporte Anual",
    icon:<TbReport />,
  },
  {
    name:"Reporte Semestral",
    icon:<TbFileReport />,
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

// ** Header del Menu
const NavHeader = () => (
  <header className="sidemenu__header">
    <button type="button" className="header_button">
      <MdMenu size={25} />
    </button>
    <span className="header__title">Explorador de Datos</span>
  </header>
);

// ** Botones del Navegador
const NavButton = ({ onClick, name, icon, isActive, hasSubNav }) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className={`sidemenu__buttons ${
      isActive ? "sidemenu__buttons-active" : ""
    }`}
  >
    {icon && <span className="button__icon">{icon}</span>}
    <span>{name}</span>
  </button>
);

export const SideMenu = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item) => {
    console.log("Item Activo ", activeItem);
    setActiveItem(item !== activeItem ? item : "");
  };

  return (
    <aside className="sidemenu">
      <NavHeader />
      {menuItems.map((item) => (
        <NavButton
          key={item.name}
          onClick={handleClick}
          name={item.name}
          icon={item.icon}
          isActive={activeItem === item.name}
          hasSubNav={!!item.items}
        />
      ))}
    </aside>
  );
};
