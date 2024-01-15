import { useState, useEffect } from "react";
import { SideMenu } from "../../../components/sidemenu/SideMenu";
import { Header } from "../../../components/header/Header";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import { ChartBox } from "../../../components/chartbox/ChartBox";
import { getAllData } from "../../../services/data.api";
import "./SemesterReport.css";

export const SemesterReport = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);

  const handleDropdownSelection = (selectedOption) => {
    console.log("Seleccionaste:", selectedOption);
    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    async function loadData() {
      const res = await getAllData();
      setData(res.data)
      console.log(res.data);

    }
    loadData();
  }, []);

  return (
    <div className="semester-report">
      <SideMenu />
      <div className="semester-report__content">
        <Header title={"Reporte Semestral"} />
        <Toolbar onSelect={handleDropdownSelection} />
        {selectedOption === "Informacion Personal" && <ChartBox />}
      </div>
    </div>
  );
};
