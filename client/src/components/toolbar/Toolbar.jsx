import { useState } from "react";
import { Dropdown } from "../dropdown/Dropdown";
import "./Toolbar.css";

// * Componente barra de herramientas :
export const Toolbar = ({ onSelect }) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="toolbar">
      <div className="toolbar__dropdown">
        <p> Ordenar Por : </p>
        <Dropdown selected={selected} setSelected={setSelected} onSelect={onSelect} />
      </div>

      <div className="toolbar__dropdown">
        <p> Semestre : </p>
        <Dropdown selected={selected} setSelected={setSelected} onSelect={onSelect} />
      </div>

      <div className="toolbar__dropdown">
        <p> Filtrar Informacion Por : </p>
        <Dropdown selected={selected} setSelected={setSelected} onSelect={onSelect} />
      </div>
    </div>
  );
};
