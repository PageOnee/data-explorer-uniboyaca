import React, { useState } from "react";
import { PieChart } from "../pie-chart/PieChart";
import { TextFormatter } from "../../util/formatText";
import "./ChartBox.css";
import { Modal } from "../modal/Modal"; // Importa el modal

export const ChartBox = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const capitalizeTitle = TextFormatter.capitalizeFirstLetterOfEachWordSpace(props.title);

  const handleExpandClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="d-flex flex-column flex-wrap my-3 mx-3 p-2 chart-box">
      <div className="row">
        <div className="col-12 d-flex flex-row justify-content-center text-center">
          <h3>{capitalizeTitle}</h3>
        </div>

        <div className="col-12">
          <PieChart
            dataKey={props.dataKey}
            title={props.title}
            chartData={props.chartData}
          />
          <button className="btn-expand" onClick={handleExpandClick}>Expandir</button>
        </div>
      </div>

      <Modal
        show={isModalOpen}
        onClose={handleCloseModal}
        title={capitalizeTitle}
        dataKey={props.dataKey}
        chartData={props.chartData}
      />
    </div>
  );
};