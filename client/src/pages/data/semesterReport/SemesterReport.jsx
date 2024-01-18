import { useState, useEffect } from "react";
import { SideMenu } from "../../../components/sidemenu/SideMenu";
import { Header } from "../../../components/header/Header";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import { ChartBox } from "../../../components/chartBox/ChartBox";
import { levelItems } from "../../../data/chartsNames";
import { getInfo } from "../../../services/data.api";
import "./SemesterReport.css";

// Todo : Pagina reporte semestral
export const SemesterReport = () => {
  // * Variables controladoras
  const [data, setdata] = useState(null);
  const [lapseSelected, setLapseSelected] = useState("2022-2");
  const [categorySelected, setcategorySelected] = useState("Informacion Personal");

  // * Dropdown - Item seleccionado
  const handleDropdownSelection = (selectedOption, dropdownType) => {
    if (dropdownType === "category") {
      setcategorySelected(selectedOption);
      console.log("Categoria Seleccionada : ", selectedOption);
    } else if (dropdownType === "lapse") {
      setLapseSelected(selectedOption);
      console.log("Lapso Seleccionado : ", selectedOption);
    }
  };

  // * Cargar datos de la Api
  useEffect(() => {
    getInfo(lapseSelected, categorySelected)
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener Informacion Personal:", error);
      });
  }, [lapseSelected, categorySelected]);

  // * Crea los Charts Boxes
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

      // * Titulo de las graficas
      const title = levelItems[index] ? levelItems[index].name : `Title ${index + 1}`;

      chartBoxes.push(
        <ChartBox
          key={index}
          title={title}
          color={`#${Math.floor(Math.random() * 0xCCCCCC).toString(16)}`}
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
        <Header title={`Reporte Semestral ${lapseSelected}`} />
        <Toolbar onSelect={handleDropdownSelection} />
        <div className="content__charts-box">{chartBoxes}</div>
      </div>
    </div>
  );
};
