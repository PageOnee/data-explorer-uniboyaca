/// Librerias de react
import { useState } from "react";

/// Componentes
import { Dropdown } from "../dropdown/Dropdown";

/// Estilos
import "./Toolbar.css";


// Componente :  Barra de herramientas
export const Toolbar = ({ onSelect, dropdownItems, isLapseActive }) => {

  // Nivel educacion 
  const [levelSelected, setLevelSelected] = useState("");

  // Periodo
  const [periodSelected, setPeriodSelected] = useState("");

  // Lapso
  const [lapseSelected, setLapseSelected] = useState("");

  // Categoria
  const [categorySelected, setcategorySelected] = useState("");

  return (

    <div className="d-flex flex-row align-items-center justify-content-between py-3 toolbar">

      {/* Menu desplegable - Nivel de estudios */}
      <p className="my-auto" > Nivel Academico: </p >
      <Dropdown
        selected={levelSelected}
        setSelected={setLevelSelected}
        onSelect={(selectedOption) => onSelect(selectedOption, "level")}
        items={dropdownItems.levelItems}
      />


      {/* Menu desplegable - Intervalo del Analisis */}
      <p className="my-auto" > Periodo del Analisis : </p>
      <Dropdown
        selected={periodSelected}
        setSelected={setPeriodSelected}
        onSelect={(selectedOption) => onSelect(selectedOption, "period")}
        items={dropdownItems.periodItems}
      />


      {/* Menu desplegable - Lapso de Tiempo */}
      <p className="my-auto" > Ciclo de Estudio : </p>
      <Dropdown
        selected={lapseSelected}
        setSelected={setLapseSelected}
        onSelect={(selectedOption) => onSelect(selectedOption, "lapse")}
        items={dropdownItems.lapseItems}
      />


      {/* Menu desplegable - Categoria  */}
      <p className="my-auto" > Filtrar Por : </p>
      <Dropdown
        selected={categorySelected}
        setSelected={setcategorySelected}
        onSelect={(selectedOption) => onSelect(selectedOption, "category")}
        items={dropdownItems.categoryItems}
      />

    </div >
  );
};
