import { useState, useEffect } from "react";
import { SideMenu } from "../../../components/sidemenu/SideMenu";
import { Header } from "../../../components/header/Header";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import { ChartBox } from "../../../components/chartBox/ChartBox";
import { levelItems } from "../../../data/titleInformationPersonal";
import { getInfo } from "../../../services/data.api";
import "./SemesterReport.css";

export const SemesterReport = () => {
  const [informacionPersonal, setInformacionPersonal] = useState(null);
  const [informationSelected, setInformationSelected] = useState("Informacion Personal");
  const [lapseSelected, setLapseSelected] = useState("2022-2");

 // * Item Seleccionado Dropdown :
 const handleDropdownSelection = (selectedOption, dropdownType) => {
  if (dropdownType === "information") {
    setInformationSelected(selectedOption);
    console.log('Información Seleccionada: ', selectedOption);
  } else if (dropdownType === "lapse") {
    setLapseSelected(selectedOption);
    console.log('Lapso Seleccionado: ', selectedOption);
  }
};

  // * Cargar datos del Api :
  useEffect(() => {
    getInfo(lapseSelected, informationSelected) 
      .then((response) => {
        setInformacionPersonal(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener Informacion Personal:", error);
      });
  }, [lapseSelected, informationSelected]);

  const chartBoxes = [];
  if (informacionPersonal) {
    Object.keys(informacionPersonal).forEach((category, index) => {
      const chartData = [];
      Object.keys(informacionPersonal[category]).forEach((key) => {
        chartData.push({
          name: key,
          value: informacionPersonal[category][key],
        });
      });

      const title = levelItems[index] ? levelItems[index].name : `Title ${index + 1}`;

      chartBoxes.push(
        <ChartBox
          key={index}
          title={title}
          color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          dataKey="value"
          chartData={chartData}
        />
      );
    });
  }

  return (
    <div className="semester-report">
      <SideMenu />
      <div className="semester-report__content">
        <Header title={"Reporte Semestral"} />
        <Toolbar onSelect={handleDropdownSelection} />
        <div className="content__charts-box">{chartBoxes}</div>
      </div>
    </div>
  );
};
