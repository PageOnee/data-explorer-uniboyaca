import { Bar, BarChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import "./BarCharts.css";

// * Convertir formato del texto
const convertString = (title) => {
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

// * Toast de informacion :
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataKey = payload[0].dataKey;
    const value = payload[0].value;
    const name = convertString(payload[0].payload.name);
    return (
      <div className="barChart__tooltips">
        <p>{`${name} : ${value}`}</p>
      </div>
    );
  }
  return null;
};

// Todo : Componente grafico de barras
export const BarCharts = (props) => {
  return (
    <div className="chartContent">
      <h1>{props.title}</h1>

      <div className="chartContent__barChart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={500} height={300} data={props.chartData}>
            <YAxis />
            <Tooltip
              content={<CustomTooltip />}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "#cfd2cf" }}
            />
            <Bar dataKey={props.dataKey} barSize={40} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
