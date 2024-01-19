import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import "./Dropdown.css";

export const Dropdown = ({ selected, setSelected, onSelect, items }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown__btn" onClick={(e) => setIsActive(!isActive)}>
        Seleccione
        <IoIosArrowDropdown />
      </div>
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
