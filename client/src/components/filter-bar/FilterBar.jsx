/// Librerias de react
import { useState } from "react";

/// Componentes
import { Dropdown } from "../dropdown/Dropdown";

/// Estilos
import "./FilterBar.css";

import { TextFormatter } from "../../util/formatText"

// Componente : Barra de Filtro
export const FilterBar = ({ onSelect, dropdownItems }) => {

    // Columna 
    const [dataColumnSelected, setDatColumnSelected] = useState("");

    // Datos
    const [dataItemSelected, setDataItemSelected] = useState("");


    return (
        <div className="row">
            <div className="col-12">

                <div className="d-flex flex-row justify-content-center align-items-center px-4 py-3 filter-bar">

                    {/* Menu desplegable - Filtro Columna */}
                    <p className="my-auto mx-4" > Categoria Dato : </p >
                    <Dropdown
                        selected={dataColumnSelected}
                        setSelected={setDatColumnSelected}
                        onSelect={(selectedOption) => onSelect(selectedOption, "dataColumn")}
                        items={dropdownItems.dataColumnItems}
                    />


                    {/* Menu desplegable - Filtro Item */}
                    <p className="my-auto mx-4" > Dato : </p>
                    <Dropdown
                        selected={dataItemSelected}
                        setSelected={setDataItemSelected}
                        onSelect={(selectedOption) => onSelect(selectedOption, "dataItem")}
                        items={dropdownItems.dataItems}
                    />

                </div>

            </div>
        </div>
    )
}
