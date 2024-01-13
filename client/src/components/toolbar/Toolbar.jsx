import { useState } from "react";
import { Dropdown } from "../dropdown/Dropdown";
import "./Toolbar.css";

export const Toolbar = ({ onSelect }) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="toolbar">
      <div className="toolbar__order-drop">
        <p> Ordenar Por : </p>
      </div>

      <div className="toolbar__semester-drop">
        <p> Semestre : </p>
      </div>

      <div className="toolbar__information-drop">
        <p> Filtrar Informacion Por : </p>
        <Dropdown
          selected={selected}
          setSelected={setSelected}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
};
