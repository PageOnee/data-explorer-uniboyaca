import { useState, useEffect } from "react";
import { SideMenu } from "../../../components/sidemenu/SideMenu";
import { Header } from "../../../components/header/Header";
import { Toolbar } from "../../../components/toolbar/Toolbar";
import { ChartBox } from "../../../components/chartbox/ChartBox";
import { barChartBoxVisit } from "../../../services/data";
import { getAllData } from "../../../services/data.api";
import "./SemesterReport.css";

export const SemesterReport = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownSelection = (selectedOption) => {
    console.log("Seleccionaste:", selectedOption);
    setSelectedOption(selectedOption);
  };

  // Método que carga la API cuando se selecciona "Informacion Personal"
  const loadUsers = async () => {
    try {
      const res = await getAllData();
      //console.log("Resultado de la API (Informacion Personal):", res.data);

      const data = await res.data;
      // Obtener la cantidad de claves en el objeto
      // Filtrar solo las propiedades que no son objetos
      const mainProperties = Object.keys(data).filter(
        (key) => typeof data[key] !== "object"
      );

      // Obtener la cantidad de propiedades principales
      const mainPropertiesCount = mainProperties.length;

      console.log("Cantidad de propiedades principales:", mainPropertiesCount);
      // Imprimir todo el contenido del JSON
      console.log("Contenido completo del JSON:", data);
    } catch (error) {
      console.error("Error al cargar la API:", error);
    }
  };

  // Efecto secundario para cargar la API cuando se selecciona "Informacion Personal"
  useEffect(() => {
    if (selectedOption === "Informacion Personal") {
      loadUsers();
    }
  }, [selectedOption]);

  return (
    <div className="semester-report">
      <SideMenu />
      <div className="semester-report__content">
        <Header title={"Reporte Semestral"} />
        <Toolbar onSelect={handleDropdownSelection} />

        {/* Condición para renderizar ChartBox */}
        {selectedOption === "Informacion Personal" && (
          <ChartBox {...barChartBoxVisit} />
        )}
      </div>
    </div>
  );
};
