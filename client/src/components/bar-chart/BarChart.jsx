// BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { TextFormatter } from '../../util/formatText'; // Importa el formateador de texto

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarChart = ({ dataKey, chartData }) => {
    const labels = chartData.map(item => TextFormatter.capitalizeFirstLetterOfEachWord(item.name));

    let totalValues = chartData.reduce((total, item) => total + item[dataKey], 0);

    const tooltipCallback = (tooltipItem) => {
        const dataIndex = tooltipItem.dataIndex;
        const value = chartData[dataIndex][dataKey];
        const percentage = ((value / totalValues) * 100).toFixed(2);
        return `${tooltipItem.label}: ${value} - ${percentage}% `;
    };

    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: chartData.map(item => item[dataKey]),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        plugins: {
            tooltip: {
                padding: 10,
                titleAlign: 'center',
                titleMarginBottom: 10,
                titleFont: {
                    weight: 'bold',
                    size: 14
                },
                bodyFont: {
                    size: 12
                },
                callbacks: {
                    label: tooltipCallback,
                }
            },
            legend: {
                display: false,
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return <Bar data={data} options={options} />;
};
