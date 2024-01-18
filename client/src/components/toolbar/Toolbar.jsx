import { useState } from "react";
import { Dropdown } from "../dropdown/Dropdown";
import {
  orderItems,
  levelItems,
  periodItems,
  lapseItems,
  categoryItems,
} from "../../data/dropdownItems";
import "./Toolbar.css";

// Todo : Componente barra de herramientas
export const Toolbar = ({ onSelect }) => {
  // * Variables controladoras
  const [orderSelected, setOrderSelected] = useState("");
  const [levelSelected, setLevelSelected] = useState("");
  const [periodSelected, setperiodSelected] = useState("");
  const [lapseSelected, setLapseSelected] = useState("");
  const [categorySelected, setcategorySelected] = useState("");

  return (
    <div className="toolbar">
      {/* Menu desplegable - Ordenar informacion */}
      <div className="toolbar__dropdown">
        <p> Ordenar Por : </p>

        <Dropdown
          selected={orderSelected}
          setSelected={setOrderSelected}
          onSelect={onSelect}
          items={orderItems}
        />
      </div>

      {/* Menu desplegable - Nivel de estudios */}
      <div className="toolbar__dropdown">
        <p> Nivel : </p>

        <Dropdown
          selected={levelSelected}
          setSelected={setLevelSelected}
          onSelect={(selectedOption) => onSelect(selectedOption, "level")}
          items={levelItems}
        />
      </div>

      {/* Menu desplegable - Intervalo del Analisis */}
      <div className="toolbar__dropdown">
        <p> Periodo : </p>

        <Dropdown
          selected={periodSelected}
          setSelected={setperiodSelected}
          onSelect={(selectedOption) => onSelect(selectedOption, "period")}
          items={periodItems}
        />
      </div>

      {/* Menu desplegable - Lapso de Tiempo */}
      <div className="toolbar__dropdown">
        <p> Lapso : </p>

        <Dropdown
          selected={lapseSelected}
          setSelected={setLapseSelected}
          onSelect={(selectedOption) => onSelect(selectedOption, "lapse")}
          items={lapseItems}
        />
      </div>

      {/* Menu desplegable - Categoria  */}
      <div className="toolbar__dropdown">
        <p> Filtrar Informacion Por : </p>

        <Dropdown
          selected={categorySelected}
          setSelected={setcategorySelected}
          onSelect={(selectedOption) => onSelect(selectedOption, "category")}
          items={categoryItems}
        />
      </div>
    </div>
  );
};
