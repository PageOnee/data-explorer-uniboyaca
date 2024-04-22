/// Librerias de react
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

/// Componentes
import { Header } from "../../../../components/header/Header";
import { Toolbar } from "../../../../components/toolbar/Toolbar";
import { FilterBar } from "../../../../components/filter-bar/FilterBar";

import { ChartBox } from "../../../../components/chart-box/ChartBox";

/// Servicios 
import { getInfoPost, getItems } from "../../../../services/data.api";

// Items
import {
    levelItems,
    periodItems,
    semesterLapseItems,
    annualLapseItems,
    categoryItems,
    dataItems
} from "../../../../util/itemToolbarPost";

// Formatos
import { TextFormatter } from './../../../../util/formatText';

export const ReportPostgraduate = () => {

    // Navegacion
    const navigate = useNavigate();

    // Contexto - Item Activo
    const [isLapseActive, setIsLapseActive] = useState(true);

    // Datos 
    const [data, setData] = useState(null);

    // Nivel Academico - Predeterminado :  Posgrado
    const [levelSelected, setLevelSelected] = useState("Posgrado");

    // Periodo del analisis - Predeterminado : Semestral
    const [periodSelected, setPeriodSelected] = useState("Semestral");

    // Ciclo del analisis - Predeterminado : Ultimo semestre
    const [lapseSelected, setLapseSelected] = useState("2021-1");

    // Filtro de categoria
    const [categorySelected, setCategorySelected] = useState("");

    // Filtro datos - Columna df
    const [itemsSelected, setItemsSelected] = useState("");

    // Items del filtro columna df
    const [dataSelected, setDataSelected] = useState("");

    // Filtro de datos - Items
    const [dataItemsSelected, setDataItemsSelected] = useState([]);


    // Metodo : Validacion datos seleccionados barra de herramientas
    const handleDropdownSelection = (selectedOption, dropdownType) => {

        // Seleccion Nivel Academico
        if (dropdownType === "level") {
            setLevelSelected(selectedOption);
            navigate("/reporte-periodo/reporte-semestre");

            // Seleccion Periodo
        } else if (dropdownType === "period") {
            setPeriodSelected(selectedOption);

            if (selectedOption === "Semestral") {
                setLapseSelected('2021-1');
                setIsLapseActive(true);
            }
            else if (selectedOption === "Anual") {
                setLapseSelected('2021');
                setIsLapseActive(true);

            } else if (selectedOption === "General") {
                setIsLapseActive(false);
            }

            // Seleccion del ciclo
        } else if (dropdownType === "lapse") {
            setLapseSelected(selectedOption);

            // Seleccion de la categoria
        } else if (dropdownType === "category") {
            setCategorySelected(selectedOption);

            // Seleccion de filtro columna
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

            // Seleccion del filtro dato
        } else if (dropdownType === "dataItem") {
            setDataSelected(selectedOption);

        };
    };


    // Ejecutar el servicio
    useEffect(() => {
        getInfoPost(levelSelected, periodSelected, lapseSelected, categorySelected, TextFormatter.deleteSpaces(itemsSelected), dataSelected)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener Informacion Personal:", error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [levelSelected, periodSelected, lapseSelected, categorySelected, dataSelected]);


    // Graficas
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

            {/* Cabecera  */}
            <div className="col-12">
                <Header titleModule={'Reporte por Periodo Posgrado'} titleSection={`${periodSelected} ${lapseSelected}`} />
            </div>

            {/* Contenido Principal */}
            <div className="col-12">
                <div className="d-flex flex-column">


                    {/* Barra de herramientas */}
                    <Toolbar onSelect={handleDropdownSelection} dropdownItems={{
                        levelItems: levelItems,
                        periodItems: periodItems,
                        lapseItems: periodSelected === "Anual" ? annualLapseItems : semesterLapseItems,
                        categoryItems: categoryItems,
                    }}
                        initialLevelSelected={levelSelected}
                        initialPeriodSelected={periodSelected}
                        initialLapseSelected={lapseSelected}
                        isLapseActive={isLapseActive} />


                    {/* Barra de Filtros */}
                    <FilterBar onSelect={handleDropdownSelection} dropdownItems={{
                        dataColumnItems: dataItems,
                        dataItems: dataItemsSelected.map(item => ({ name: item })),
                    }} />

                    {/* Graficas */}
                    <div className="d-flex flex-row flex-wrap justify-content-between">{chartBoxes}</div>

                </div>
            </div>
        </div>
    );
};


