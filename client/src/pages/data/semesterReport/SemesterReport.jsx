import { useState, useEffect } from "react";
import { SideMenu } from "../../../components/sidemenu/SideMenu";
import { Header } from "../../../components/header/Header";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import { ChartBox } from "../../../components/chartbox/ChartBox";
import { barChartBoxVisit } from "../../../services/data";
import { getInformacionPersonal } from "../../../services/data.api";
import "./SemesterReport.css";

export const SemesterReport = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [informacionPersonal, setInformacionPersonal] = useState(null);
  const [numObjetos, setNumObjetos] = useState(0); // Agregar el estado para numObjetos

  const handleDropdownSelection = (selectedOption) => {
    console.log("Seleccionaste:", selectedOption);
    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    if (selectedOption === "Informacion Personal") {
      // Realizar la solicitud de la API cuando selectedOption es "Informacion Personal"
      getInformacionPersonal()
        .then((response) => {
          console.log("Informacion Personal:", response.data);
          setInformacionPersonal(response.data);

          // Obtener el número de "objetos" en la respuesta e imprimirlo en la consola
          const cantObjetos = Object.keys(response.data).length;
          setNumObjetos(cantObjetos); // Actualizar el estado de numObjetos
          console.log("Número de 'objetos':", numObjetos);
        })
        .catch((error) => {
          console.error("Error al obtener Informacion Personal:", error);
        });
    }
  }, [selectedOption]); // Se ejecutará cada vez que selectedOption cambie

  const chartBoxes = [];
  for (let i = 0; i < numObjetos; i++) {
    chartBoxes.push(<ChartBox key={i} {...barChartBoxVisit} />);
  }

  return (
    <div className="semester-report">
      <SideMenu />
      <div className="semester-report__content">
        <Header title={"Reporte Semestral"} />
        <Toolbar onSelect={handleDropdownSelection} />
        <div className="content__charts-box">
          {chartBoxes}
        </div>
      </div>
    </div>
  );
}