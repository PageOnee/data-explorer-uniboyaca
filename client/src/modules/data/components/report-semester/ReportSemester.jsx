/// Librerias de react
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

/// Componentes
import { Header } from "../../../../components/header/Header";
import { Toolbar } from "../../../../components/toolbar/Toolbar";
import { ChartBox } from "../../../../components/chart-box/ChartBox";

/// Servicios
import { getInfoSemester } from "../../../../services/data.api";

/// Contextos 
import {
    levelItems,
    periodItems,
    semesterLapseItems,
    categoryItems,
} from "../../../../util/itemsToolbar";

/// Estilos
import "./ReportSemester.css";


// Componente : Reporte semestral
export const ReportSemester = () => {

    // Navegacion
    const navigate = useNavigate();

    // Datos
    const [data, setData] = useState(null);

    // Nivel Estudios - Dropdown - Predeterminado : Pregrado
    const [levelSelected, setLevelSelected] = useState("Pregrado");

    // Periodo - Dropdown - Predeterminado : Semestral
    const [periodSelected, setPeriodSelected] = useState("Semestral");

    // Lapseo - Dropdown - Predeteerminado : Ultimo Semestre
    const [lapseSelected, setLapseSelected] = useState("2023-1");

    // Categoria - Dropdown
    const [categorySelected, setCategorySelected] = useState("");


    // Metodo : Validar items seleccionados en el toolbar
    const handleDropdownSelection = (selectedOption, dropdownType) => {

        if (dropdownType === "category") {
            setCategorySelected(selectedOption);

        } else if (dropdownType === "lapse") {
            setLapseSelected(selectedOption);

        } else if (dropdownType === "period") {
            setPeriodSelected(selectedOption);

            if (selectedOption === "Anual") {
                navigate("/reporte-periodo/reporte-anual");

            } else if (selectedOption === "General") {
                navigate("/reporte-periodo/reporte-general");
            }

        } else if (dropdownType === "level") {
            setLevelSelected(selectedOption);
        }

    };


    // Ejcutar el servicio
    useEffect(() => {

        getInfoSemester(levelSelected, lapseSelected, categorySelected)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener Informacion Personal:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [levelSelected, lapseSelected, categorySelected]);


    // Crea los Charts Boxes
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
                <Header titleModule={'Reporte por Periodo'} titleSection={`Reporte Semestral ${lapseSelected}`} />
            </div>

            {/* Contenido principal */}
            <div className="col-12">

                {/* SpinnerLoader mientras se cargan los datos */}

                <div className="d-flex flex-column">

                    {/* Barra de herramientas */}
                    <Toolbar onSelect={handleDropdownSelection} dropdownItems={{
                        levelItems: levelItems,
                        periodItems: periodItems,
                        lapseItems: semesterLapseItems, // Usando los elementos específicos para el reporte anual
                        categoryItems: categoryItems
                    }} isLapseActive={true} />

                    {/* Grafica */}
                    <div className="d-flex flex-row flex-wrap justify-content-between">{chartBoxes}</div>

                </div>

            </div>
        </div>
    );
};