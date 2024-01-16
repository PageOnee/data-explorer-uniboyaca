import { BarCharts } from "../barChart/BarCharts";
import "./ChartBox.css";

export const ChartBox = (props) => {
  return (
    <div className="chart-box">
      <BarCharts
        title={props.title}
        color={props.color}
        dataKey={props.dataKey}
        chartData={props.chartData}
      />
    </div>
  );
};
