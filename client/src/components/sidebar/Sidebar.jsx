import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import "./Sidebar.css";

// ** Elementos del menu
const menuItems = [
  {
    name: "Inicio",
    icon: IoMdHome,
  },
  {
    name: "Informe",
    icon: TbReportAnalytics,
    items: ["Semestre", "Ano", "General"],
  },
];

const Icon = ({ icon: IconComponent }) => (
  <span className="material-symbols-outlined">
    <IconComponent />
  </span>
);

const NavButton = ({ onClick, name, icon, isActive, hasSubNav }) => (
    <button
    type="button"
    onClick={() => onClick(name)}
    className={`nav-button ${isActive ? "active" : ""}`}>
    {icon && <Icon icon={icon}> </Icon>}
    <span>{name}</span>
    {hasSubNav && <Icon icon="expand_more"></Icon>}
  </button>
);

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");
  const handleClick = (item) => setActiveItem(item !== activeItem ? item : "");

  return (
    <div className="menu">
      {menuItems.map((item) => (
        <div key={item.name}>
          <NavButton
            onClick={handleClick}
            name={item.name}
            icon={item.icon}
            isActive={activeItem === item.name}
            hasSubNav={!!item.items}
          />
        </div>
      ))}
    </div>
  );
};
