import { Header } from "../../../components/header/Header";
import { SideMenu } from "../../../components/sidemenu/SideMenu";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import { ChartBox } from "../../../components/chartbox/ChartBox";
import { barChartBoxVisit } from "../../../services/data";
import "./Home.css";

export const Home = () => {
  const cantidadCharts = 14; // Puedes cambiar este valor según tu necesidad

  // Crear un array con la cantidad deseada de ChartBox
  const chartBoxes = [];
  for (let i = 0; i < cantidadCharts; i++) {
    chartBoxes.push(<ChartBox key={i} {...barChartBoxVisit} />);
  }

  return (
    <div className="home">
      <SideMenu />
      <div className="home__columns">
        <Header />
        <Toolbar />
        <div className="columns__container-charts">{chartBoxes}</div>
      </div>
    </div>
  );
};
