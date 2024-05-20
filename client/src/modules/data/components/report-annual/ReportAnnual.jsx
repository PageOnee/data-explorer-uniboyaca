/// Librerias de react
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

/// Componentes
import { Header } from "../../../../components/header/Header";
import { Toolbar } from "../../../../components/toolbar/Toolbar";
import { ChartBox } from "../../../../components/chart-box/ChartBox";
import { FilterBar } from "../../../../components/filter-bar/FilterBar";

/// Servicios
import { getItems, getInfoAnnual } from "../../../../services/data.api";

/// Contextos 
import {
    levelItems,
    periodItems,
    annualLapseItems,
    categoryItems,
    dataItems
} from "../../../../util/itemsToolbar";

/// Utils
import { TextFormatter } from './../../../../util/formatText';

/// Estilos
import "./ReportAnnual.css"


// Componente : Reporte Anuak
export const ReportAnnual = () => {

    // Navegacion 
    const navigate = useNavigate();

    // Datos
    const [data, setData] = useState(null);

    // Nivel Estudios - Dropdown - Predeterminado : Pregrado
    const [levelSelected, setLevelSelected] = useState("Pregrado");

    // Periodo - Dropdown - Predeterminado : Anual
    const [periodSelected, setPeriodSelected] = useState("Anual");

    // Lapseo - Dropdown - Predeteerminado : Ultimo Ano
    const [lapseSelected, setLapseSelected] = useState("2023");

    // Categoria - Dropdown
    const [categorySelected, setCategorySelected] = useState("");

    // Filtro datos - Columna df
    const [itemsSelected, setItemsSelected] = useState("");

    // Itenms del filtro columna df
    const [dataItemsSelected, setDataItemsSelected] = useState([]);

    // Filtro de datos - Items
    const [dataSelected, setDataSelected] = useState("");


    // Metodo : Validar items seleccionados en el toolbar
    const handleDropdownSelection = (selectedOption, dropdownType) => {

        // Seleccion categoria
        if (dropdownType === "category") {
            setCategorySelected(selectedOption);

            // Seleccion del ciclo
        } else if (dropdownType === "lapse") {
            setLapseSelected(selectedOption);

            // Seleccion del filtro columna
        } else if (dropdownType === "dataColumn") {
            setItemsSelected(selectedOption);

            // Servicio traer los items de la columna seleccionada
            getItems(TextFormatter.deleteSpaces(selectedOption))
                .then(response => {
                    setDataItemsSelected(response.data);
                })
                .catch(error => {
                    console.error("Error al obtener los datos del ítem:", error);
                });

            // Seleccion de filtro columna
        } if (dropdownType === "dataItem") {
            setDataSelected(selectedOption);

            // Seleccion Periodo
        } else if (dropdownType === "period") {
            setPeriodSelected(selectedOption);

            if (selectedOption === "Semestral") {
                navigate("/reporte-periodo/reporte-semestre");

            } else if (selectedOption === "General") {
                navigate("/reporte-periodo/reporte-general");

            }

            // Selecccion del nivel academico
        } else if (dropdownType === "level") {
            setLevelSelected(selectedOption);

            if (selectedOption === "Posgrado") {
                navigate("/reporte-periodo/reporte-posgrado");
            }
        }
    };


    // Ejecutar el servicio
    useEffect(() => {
        getInfoAnnual(levelSelected, lapseSelected, categorySelected, TextFormatter.deleteSpaces(itemsSelected), dataSelected)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener Informacion Personal:", error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [levelSelected, lapseSelected, categorySelected, dataSelected]);


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
                    }}
                        initialLevelSelected={levelSelected}
                        initialPeriodSelected={periodSelected}
                        initialLapseSelected={lapseSelected}
                        isLapseActive={true} />


                    {/* Barra de Filtros */}
                    <FilterBar onSelect={handleDropdownSelection} dropdownItems={{
                        dataColumnItems: dataItems,
                        dataItems: dataItemsSelected.map(item => ({ name: TextFormatter.capitalizeFirstLetterOfEachWord(item) })),
                    }} />


                    {/* Grafico */}
                    <div className="d-flex flex-row flex-wrap justify-content-between">{chartBoxes}</div>

                </div>
            </div>
        </div>
    );
};

