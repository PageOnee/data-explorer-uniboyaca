import { useState, useEffect } from "react";
import { SideMenu } from "../../../components/sidemenu/SideMenu";
import { Header } from "../../../components/header/Header";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import { ChartBox } from "../../../components/chartBox/ChartBox";
import { levelItems } from "../../../data/titleInformationPersonal";
import { getInfo } from "../../../services/data.api";
import "./SemesterReport.css";

export const SemesterReport = () => {
  const [selectedOption, setSelectedOption] = useState("Informacion Personal");
  const [informacionPersonal, setInformacionPersonal] = useState(null);

  // * Item Seleccionado Dropdown :
  const handleDropdownSelection = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log('Click: ' ,selectedOption)
  };

  // * Cargar datos del Api :
  useEffect(() => {
    getInfo(selectedOption) 
      .then((response) => {
        setInformacionPersonal(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener Informacion Personal:", error);
      });
  }, [selectedOption]);

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
