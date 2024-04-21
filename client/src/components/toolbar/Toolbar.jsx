/// Librerias de react
import { useState } from "react";

/// Componentes
import { Dropdown } from "../dropdown/Dropdown";

/// Estilos
import "./Toolbar.css";


// Componente :  Barra de herramientas
export const Toolbar = ({ onSelect, dropdownItems, initialLevelSelected, initialPeriodSelected, initialLapseSelected, isLapseActive }) => {

  // Nivel educacion 
  const [levelSelected, setLevelSelected] = useState(initialLevelSelected);

  // Periodo
  const [periodSelected, setPeriodSelected] = useState(initialPeriodSelected);

  // Lapso
  const [lapseSelected, setLapseSelected] = useState(initialLapseSelected);

  // Categoria
  const [categorySelected, setcategorySelected] = useState("");

  const [dataItemsSelected, setDataItemsSelected] = useState("");

  const [dataRowsSelected, setDataRowsSelected] = useState("");


  return (

    <div className="row">

      <div className="col-12 d-flex flex-row align-items-center justify-content-between px-4 py-3 toolbar">


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
          disabled={!isLapseActive} // Agrega la propiedad disabled según el estado de isLapseActive
        />


        {/* Menu desplegable - Categoria  */}
        <p className="my-auto" > Filtrar Por Categoria : </p>
        <Dropdown
          selected={categorySelected}
          setSelected={setcategorySelected}
          onSelect={(selectedOption) => onSelect(selectedOption, "category")}
          items={dropdownItems.categoryItems}
        />

      </div >

      {/* <div className="col-12 d-flex flex-row justify-content-center p-3 toolbar">

        <p className="my-auto mx-3" > Filtrar Por Datos : </p>
        <Dropdown
          selected={dataItemsSelected}
          setSelected={setDataItemsSelected}
          onSelect={(selectedOption) => onSelect(selectedOption, "dataItems")}
          items={dropdownItems.dataItems}
        />

        <p className="my-auto mx-3" > Filtrar Por Datos : </p>
        <Dropdown className='hola'
          selected={dataRowsSelected}
          setSelected={setDataRowsSelected}
          onSelect={(selectedOption) => onSelect(selectedOption, "data")}
          items={dropdownItems.dataRows}
        />

      </div> */}

    </div>

  );
};
