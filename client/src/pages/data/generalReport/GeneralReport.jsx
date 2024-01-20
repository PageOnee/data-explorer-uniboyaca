import { useEffect, useState } from "react";
import { SideMenu } from "../../../components/sidemenu/SideMenu";
import { Header } from "../../../components/header/Header";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import "./GeneralReport.css";
import { getInfoGeneral } from "../../../services/data.api";
import {personalInformationItems} from '../../../data/chartsNames'
import {ChartBox} from '../../../components/chartBox/ChartBox'

export const GeneralReport = () => {
  const [data, setdata] = useState(null);
  const [periodSelected, setPeriodSelected] = useState("General");
  const [categorySelected, setcategorySelected] = useState("Informacion Personal");

  // * Cargar datos de la Api
  useEffect(() => {
    getInfoGeneral(categorySelected)
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener Informacion Personal:", error);
      });
  }, [categorySelected]);

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
    <div className="general-report">
      <SideMenu />
      <div className="general-report__content">
        <Header title={`Reporte General`} />
        <Toolbar />
        <div className="content__charts-box">{chartBoxes}</div>
      </div>
    </div>
  );
};
