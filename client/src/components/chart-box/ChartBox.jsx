/// Componentes
import { PieChart } from "../pie-chart/PieChart"

/// Utils 
import { TextFormatter } from "../../util/formatText"

/// Estilos
import "./ChartBox.css";


// Componente : Cajas de las graficas
export const ChartBox = (props) => {

  // Dar formato al titulo de la grafica
  const capitalizeTitle = TextFormatter.capitalizeFirstLetterOfEachWordSpace(props.title);

  return (
    <div className="d-flex flex-column flex-wrap my-3 mx-3 p-2 chart-box">

      <div className="row">

        <div className="col-12 d-flex flex-row justify-content-center text-center">
          {/* Titulo de la grafica */}
          <h3>{capitalizeTitle}</h3>
        </div>

        <div className="col-12">

          {/* Grafica Pie */}
          <PieChart
            // title={props.title}
            dataKey={props.dataKey}
            title={props.title}
            chartData={props.chartData}
          />

        </div>

      </div>

    </div >
  );
};
