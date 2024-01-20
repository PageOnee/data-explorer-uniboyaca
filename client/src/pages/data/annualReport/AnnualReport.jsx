import { useState, useEffect } from "react";
import { SideMenu } from "../../../components/sidemenu/SideMenu";
import { Header } from "../../../components/header/Header";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import { ChartBox } from "../../../components/chartBox/ChartBox";
import { getInfoAnnual } from "../../../services/data.api";
import {personalInformationItems} from '../../../data/chartsNames'
import "./AnnualReport.css";

export const AnnualReport = () => {
  const [data, setdata] = useState(null);
  const [periodSelected, setPeriodSelected] = useState("Anual");
  const [lapseSelected, setLapseSelected] = useState("2022");
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
    getInfoAnnual(lapseSelected, categorySelected)
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
      const title = personalInformationItems[index]
        ? personalInformationItems[index].name
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
    <div className="annual-report">
      <SideMenu />
      <div className="annual-report__content">
        <Header title={`Reporte Anual`} />
        <Toolbar />
        <div className="content__charts-box">{chartBoxes}</div>
      </div>
    </div>
  );
};
