/// Librerias de react
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS, CategoryScale, LinearScale,
    PointElement, LineElement, Title, Tooltip, Legend,
} from 'chart.js';

/// Utils
import { TextFormatter } from "../../util/formatText"

/// Estilos
import './LineChart.css';

// Registro de componente de ChartJs
ChartJS.register(
    CategoryScale, LinearScale, PointElement,
    LineElement, Title, Tooltip, Legend
);


// Componente : Graficas de Lineas 
export const LineChart = ({ data }) => {

    // Array contenedor de los datos (Keys)
    const categories = Object.keys(data);

    // Configuracion de los datos - graficas
    const datasets = categories.map(category => {
        // Array contenedor de los semestres
        const subitems = data[category];

        // Array contenedor de los semestres
        const labels = Object.keys(subitems);

        // Array contenedor de los datos de los semestres
        const values = Object.values(subitems);

        // Array contenedor de los items
        const nestedLabels = values.reduce((acc, obj) => {
            const objKeys = Object.keys(obj);
            acc.push(...objKeys);
            return acc;
        }, []);

        // Array contenedor nombres de los items
        const itemsValues = [...new Set(nestedLabels)];

        // Array contenedor de los valores de los items
        const nestedValues = values.map(obj => {
            const nestedValues = itemsValues.map(key => obj[key] || 0);
            return nestedValues;
        });

        // Declaracion numero menor y mayor de los valores de los items
        let maxNumber = Number.NEGATIVE_INFINITY;
        let minNumber = Number.POSITIVE_INFINITY;

        nestedValues.forEach(array => {
            const maxValueInArray = Math.max(...array);
            const minValueInArray = Math.min(...array);

            // Actualizar el número mayor y menor
            if (maxValueInArray > maxNumber) {
                maxNumber = maxValueInArray;
            }
            if (minValueInArray < minNumber) {
                minNumber = minValueInArray;
            }
        });

        // Numero de Ticks eje y
        const numTicks = 10;

        // Calculo valores intermedios para el eje y
        const step = (maxNumber - minNumber) / (numTicks - 1);
        const yAxisValues = Array.from({ length: numTicks }, (_, i) => minNumber + i * step.toFixed(0));

        // Crear un array de objetos para cada valor en itemsValues
        const formattedLabels = itemsValues.map(value => ({ value }));

        // Usar los colores proporcionados manualmente
        const colors = [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ];

        const chartData = {
            labels: labels,
            datasets: itemsValues.map((item, index) => ({
                label: TextFormatter.capitalizeFirstLetterOfEachWord(item),
                data: nestedValues.map(values => values[index] || 0),
                // borderColor: colors[index], 
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ], // Usar color correspondiente
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ], // Usar color correspondiente para el fondo
                min: minNumber,
                max: maxNumber,
            }))
        };

        // Configuracion Eje Y
        const chartOptions = {
            scales: {
                y: {
                    type: 'linear',
                    ticks: {
                        callback: function (value, index, values) {
                            return yAxisValues[index];
                        }
                    }
                }
            },
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
                        label: function (context) {
                            let label = chartData.datasets[context.datasetIndex].label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed.y;
                            return label;
                        }
                    }
                }
            }
        };

        return { chartData, chartOptions, categoryTitle: TextFormatter.capitalizeFirstLetterOfEachWordSpace(category) };

    });

    return (
        <div className='d-flex flex-row flex-wrap justify-content-between line-chart'>
            {datasets.map((chartData, index) => (
                <div key={index} className='p-2 m-3 chart-container'>

                    <div className='col-12 d-flex flex-row justify-content-center text-center p-2'>
                        <h3> {chartData.categoryTitle}  </h3>
                    </div>

                    <div className='col-12 line-grapric'>
                        <Line data={chartData.chartData} options={chartData.chartOptions} />
                    </div>

                </div>
            ))}
        </div>
    );
};
