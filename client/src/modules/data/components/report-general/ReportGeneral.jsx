/// Liberias de react
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

/// Componentes
import { Header } from "../../../../components/header/Header";
import { Toolbar } from "../../../../components/toolbar/Toolbar";
import { ChartBox } from "../../../../components/chart-box/ChartBox";

/// Servicios
import { getInfo } from "../../../../services/data.api";

/// Contextos 
import {
    levelItems,
    periodItems,
    annualLapseItems,
    categoryItems,
} from "../../../../util/itemsToolbar";


// Componente : Reporte General
export const ReportGeneral = () => {

    // Navegacion 
    const navigate = useNavigate();

    // Datos
    const [data, setData] = useState(null);

    // Nivel Estudios - Dropdown - Predeterminado : Pregrado
    const [levelSelected, setLevelSelected] = useState("Pregrado");

    // Periodo - Dropdown - Predeterminado : Anual
    const [periodSelected, setPeriodSelected] = useState("General");

    const [lapseSelected, setLapseSelected] = useState("2023");

    // Categoria - Dropdown
    const [categorySelected, setcategorySelected] = useState("");


    // Metodo : Validar items seleccionados en el toolbar
    const handleDropdownSelection = (selectedOption, dropdownType) => {

        if (dropdownType === "category") {
            setcategorySelected(selectedOption);

        } else if (dropdownType === "period") {
            setPeriodSelected(selectedOption);

            if (selectedOption === "Semestral") {
                navigate("/reporte-periodo/reporte-semestre");

            } else if (selectedOption === "Anual") {
                navigate("/reporte-periodo/reporte-anual");
            }

        } else if (dropdownType === "level") {
            setLevelSelected(selectedOption);
        }
    };


    // Ejcutar el servicio
    useEffect(() => {
        getInfo(levelSelected, lapseSelected, categorySelected)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener Informacion Personal:", error);
            });
    }, [levelSelected, lapseSelected, categorySelected]);


    // Crea los charts boxes
    const chartBoxes = [];

    if (data) {
        Object.keys(data).forEach((category, index) => {

            const chartData = [];

            Object.keys(data[category]).forEach((key) => {
                chartData.push({
                    name: key,
                    value: data[category][key],
                });
            });

            chartBoxes.push(
                <ChartBox
                    key={index}
                    dataKey="value"
                    title={category}
                    chartData={chartData}
                />
            );
        });
    }

    return (
        <div className="row">

            {/* Cabecera */}
            <div className="col-12">
                <Header titleModule={`Reporte por Periodo`} titleSection={'Reporte General'} />
            </div>

            {/* Contenido principal */}
            <div className="col-12">
                <div className="d-flex flex-column">

                    {/* Barra de herramientas */}
                    <Toolbar onSelect={handleDropdownSelection} dropdownItems={{
                        levelItems: levelItems,
                        periodItems: periodItems,
                        lapseItems: annualLapseItems,
                        categoryItems: categoryItems,
                    }}
                        isLapseActive={false}
                    />

                    <div className="d-flex flex-row flex-wrap justify-content-between">{chartBoxes}</div>
                </div>

            </div>
        </div>
    );
};