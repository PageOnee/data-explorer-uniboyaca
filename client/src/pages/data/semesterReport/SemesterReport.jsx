import { useState, useEffect } from "react";
import { SideMenu } from "../../../components/sidemenu/SideMenu";
import { Header } from "../../../components/header/Header";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import { ChartBox } from "../../../components/chartBox/ChartBox";
import {
  personalInformationItems,
  previusEducationItems,
  perceptionItems,
} from "../../../data/chartsNames";
import { getInfo } from "../../../services/data.api";
import "./SemesterReport.css";

// Todo : Pagina reporte semestral
export const SemesterReport = () => {
  // * Variables controladoras
  const [data, setdata] = useState(null);
  const [periodSelected, setPeriodSelected] = useState("Semestral");
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
    } else if (dropdownType === "period") {
      setPeriodSelected(selectedOption);
      console.log("Periodo Seleccionado : ", selectedOption);
    }
  };

  // * Cargar datos de la Api
  useEffect(() => {
    getInfo(periodSelected, lapseSelected, categorySelected)
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener Informacion Personal:", error);
      });
  }, [periodSelected, lapseSelected, categorySelected]);

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

      const title =
        categorySelected === "Informacion Personal"
          ? personalInformationItems[index]?.name || `Title ${index + 1}`
          : categorySelected === "Educacion Previa"
          ? previusEducationItems[index]?.name || `Title ${index + 1}`
          : categorySelected === "Percepcion y Satisfaccion"
          ? perceptionItems[index]?.name || `Title ${index + 1}`
          : `Title ${index + 1}`;

      chartBoxes.push(
        <ChartBox
          key={index}
          title={title}
          color={`#${Math.floor(Math.random() * 0xcccccc).toString(16)}`}
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
