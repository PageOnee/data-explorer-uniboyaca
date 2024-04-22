/// Librerias de react
import { useState, useEffect } from "react";

/// Componentes
import { Header } from "../../../../components/header/Header";
import { LineChart } from "../../../../components/line-chart/LineChart"

/// Servicios
import { getHistorical } from "../../../../services/data.api";


export const ReportHistorical = () => {

    // Datos
    const [data, setData] = useState(null);

    useEffect(() => {

        getHistorical()
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener el Historico :", error);
            });
    }, []);

    return (
        <div className="row">

            {/* Cabecera */}
            <div className="col-12">
                <Header titleModule={`Reporte Historico`} titleSection={'2020-2 - 2023-1'} />
            </div>

            {/* Contenido */}
            <div className="col-12">
                <div className="d-flex flex-row flex-wrap justify-content-between">
                    {data && <LineChart data={data} />}
                </div>
            </div>

        </div>
    )
}
