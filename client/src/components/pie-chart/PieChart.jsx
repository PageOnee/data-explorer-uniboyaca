/// Librerias de react
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

/// Util
import { TextFormatter } from '../../util/formatText'

/// Esitlos 
import './PieChart.css'


// Registar completos de ChartJs
ChartJS.register(ArcElement, Tooltip, Legend);

// Componente : Grafica pie
export const PieChart = (props) => {

    const { dataKey, chartData } = props;


    // Personalizar estilos del tooltip
    const tooltipCallback = (tooltipItem) => {
        return `${tooltipItem.label} : ${tooltipItem.formattedValue}`;
    };


    // Datos del grafico
    const data = {

        labels: chartData.map(item => TextFormatter.capitalizeFirstLetterOfEachWord(item.name)),
        datasets: [
            {
                data: chartData.map(item => item[dataKey]),
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(0, 0, 0, 0)',

                ],
                borderWidth: 1,
            },
        ],
    };


    // Configuracion - Personalizacion
    const options = {
        plugins: {
            tooltip: {
                padding: 30,
                titleAlign: 'center',
                titleMarginBottom: 10,
                titleFont: {
                    weight: 'bold',
                    size: 18
                },
                bodyFont: {
                    size: 16

                },
                callbacks: {
                    label: tooltipCallback,
                }
            }
        }
    };


    return (
        <div className="pie-chart-container">
            <Pie data={data} options={options} />
        </div>
    );
};