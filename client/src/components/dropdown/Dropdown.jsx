/// Librerias de react
import { useState } from "react";

/// Iconos
import { IoIosArrowDropdown } from "react-icons/io";

/// Estilos
import "./Dropdown.css";


// Componente : Elemento dropdown
export const Dropdown = ({ selected, setSelected, onSelect, items }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">

      {/* Predeterminado */}
      <div className="d-flex flex-row align-items-center justify-content-between p-2 dropdown__btn" onClick={(e) => setIsActive(!isActive)}>
        Seleccione
        <IoIosArrowDropdown />
      </div>

      {/* Contenido del dropdown */}
      {isActive && (
        <div className="dropdown__content">
          {items.map((item, index) => (

            <div
              key={index}
              onClick={(e) => {
                setSelected(item.name);
                setIsActive(false);
                onSelect(item.name);
              }}
              className="content__item"
            >
              {item.name}
            </div>

          ))}
        </div>

      )}
    </div>
  );
};
