// Modal.js
import React, { useState } from "react";
import { PieChart } from "../pie-chart/PieChart";
import { BarChart } from "../bar-chart/BarChart";
import "./Modal.css";

export const Modal = ({ show, onClose, title, dataKey, chartData }) => {
    const [isBarChart, setIsBarChart] = useState(false);

    const toggleChart = () => {
        setIsBarChart(prev => !prev);
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h5 className="col-11 modal-title">{title}</h5>
                    <button type="button" className="close col-1" onClick={onClose}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body col-12 d-flex flex-row justify-content-center">
                    {isBarChart ?
                        <BarChart dataKey={dataKey} chartData={chartData} /> :
                        <PieChart dataKey={dataKey} chartData={chartData} />}
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button className="btn-expand" onClick={toggleChart}>
                        {isBarChart ? "Gráfica Pie" : "Gráfica Barras"}
                    </button>
                </div>
            </div>
        </div>
    );
};