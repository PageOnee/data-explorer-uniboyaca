/// Librerias de react
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

/// Componentes
import { Header } from "../../../../components/header/Header";
import { Toolbar } from "../../../../components/toolbar/Toolbar";
import { ChartBox } from "../../../../components/chart-box/ChartBox";

/// Servicios
import { getInfoAnnual } from "../../../../services/data.api";

/// Contextos 
import {
    levelItems,
    periodItems,
    annualLapseItems,
    categoryItems,
} from "../../../../util/itemsToolbar";

/// Estilos
import "./ReportAnnual.css"


// Componente : Reporte Anuak
export const ReportAnnual = () => {

    // Navegacion 
    const navigate = useNavigate();

    // Datos
    const [data, setdata] = useState(null);

    // Nivel Estudios - Dropdown - Predeterminado : Pregrado
    const [levelSelected, setLevelSelected] = useState("Pregrado");

    // Periodo - Dropdown - Predeterminado : Anual
    const [periodSelected, setPeriodSelected] = useState("Anual");

    // Lapseo - Dropdown - Predeteerminado : Ultimo Ano
    const [lapseSelected, setLapseSelected] = useState("2023");

    // Categoria - Dropdown
    const [categorySelected, setcategorySelected] = useState("");


    // Metodo : Validar items seleccionados en el toolbar
    const handleDropdownSelection = (selectedOption, dropdownType) => {

        if (dropdownType === "category") {
            setcategorySelected(selectedOption);

        } else if (dropdownType === "lapse") {
            setLapseSelected(selectedOption);

        } else if (dropdownType === "period") {
            setPeriodSelected(selectedOption);

            if (selectedOption === "Semestral") {
                navigate("/reporte-periodo/reporte-semestre");

            } else if (selectedOption === "General") {
                navigate("/reporte-periodo/reporte-general");
            }

        } else if (dropdownType === "level") {
            setLevelSelected(selectedOption);
        }

    };


    // Ejecutar el servicio
    useEffect(() => {
        getInfoAnnual(levelSelected, lapseSelected, categorySelected)
            .then((response) => {
                setdata(response.data);
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
                <Header titleModule={'Reporte por Periodo'} titleSection={`Reporte Anual ${lapseSelected}`} />
            </div>


            {/* Contenido principal */}
            <div className="col-12">
                <div className="d-flex flex-column">

                    {/* Barra de herramientas */}
                    <Toolbar onSelect={handleDropdownSelection} dropdownItems={{
                        levelItems: levelItems,
                        periodItems: periodItems,
                        lapseItems: annualLapseItems,
                        categoryItems: categoryItems
                    }} isLapseActive={true} />

                    {/* Grafico */}
                    <div className="d-flex flex-row flex-wrap justify-content-between">{chartBoxes}</div>

                </div>
            </div>
        </div>
    );
};
