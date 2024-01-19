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
  const [periodSelected, setPeriodSelected] = useState("");
  const [lapseSelected, setLapseSelected] = useState("");
  const [categorySelected, setcategorySelected] = useState("");

  return (
    <div className="toolbar">
    
      {/* Menu desplegable - Nivel de estudios */}
      <div className="toolbar__dropdown">
        <p> Nivel Academico : </p>
        <Dropdown
          selected={levelSelected}
          setSelected={setLevelSelected}
          onSelect={(selectedOption) => onSelect(selectedOption, "level")}
          items={levelItems}
        />
      </div>

      {/* Menu desplegable - Intervalo del Analisis */}
      <div className="toolbar__dropdown">
        <p> Periodo del Analisis : </p>
        <Dropdown
          selected={periodSelected}
          setSelected={setPeriodSelected}
          onSelect={(selectedOption) => onSelect(selectedOption, "period")}
          items={periodItems}
        />
      </div>

      {/* Menu desplegable - Lapso de Tiempo */}
      <div className="toolbar__dropdown">
        <p> Ciclo de Estudio : </p>
        <Dropdown
          selected={lapseSelected}
          setSelected={setLapseSelected}
          onSelect={(selectedOption) => onSelect(selectedOption, "lapse")}
          items={lapseItems}
        />
      </div>

      {/* Menu desplegable - Categoria  */}
      <div className="toolbar__dropdown">
        <p> Filtrar Por : </p>
        <Dropdown
          selected={categorySelected}
          setSelected={setcategorySelected}
          onSelect={(selectedOption) => onSelect(selectedOption, "category")}
          items={categoryItems}
        />
      </div>

      {/* Menu desplegable - Ordenar informacion */}
      <div className="toolbar__dropdown">
        <p> Ordenar Por : </p>
        <Dropdown
          selected={orderSelected}
          setSelected={setOrderSelected}
          onSelect={(selectedOption) => onSelect(selectedOption, "order")}
          items={orderItems}
        />
      </div>
    </div>
  );
};
