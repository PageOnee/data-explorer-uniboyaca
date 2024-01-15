import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import "./Dropdown.css";

// ... (código existente)

export const Dropdown = ({ selected, setSelected, onSelect }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Informacion Personal", "Informacion Familiar"];

  return (
    <div className="dropdown">
      <div className="dropdown__btn" onClick={(e) => setIsActive(!isActive)}>
        Selecione
        <IoIosArrowDropdown />
      </div>
      {isActive && (
        <div className="dropdown__content">
          {options.map((option) => (
            <div
              key={option}
              onClick={(e) => {
                if (option === "Informacion Personal") {
                  console.log("Informacion Personal");
                } else if (option === "Informacion Familiar") {
                  console.log(
                    "Hiciste clic en Informacion Familiar. Conectando a la API..."
                  );
                }
                setSelected(option);
                setIsActive(false);
                // Llama a la función en el componente padre
                onSelect(option);
              }}
              className="content__item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
