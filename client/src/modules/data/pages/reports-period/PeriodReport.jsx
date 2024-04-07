/// Librerias de react
import { useNavigate, Routes, Route } from "react-router-dom";

/// Componentes
import { SideMenu } from "../../../../components/sidemenu/SideMenu";
import { ReportSemester } from "./../../components/report-semester/ReportSemester";
import { ReportAnnual } from "./../../components/report-annual/ReportAnnual";
import { ReportGeneral } from "./../../components/report-general/ReportGeneral";

/// Estilos
import "./PeriodReport.css";


// Pagina : Reporte por periodo
export const PeriodReport = () => {

  const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Menu lateral */}
        <div className="col-2 p-0">
          <SideMenu handleItemClick={handleItemClick} activeItem="reporte-periodo" />
        </div>

        <div className="col-10">

          {/* Contenido - Path rutas anidadas a 'reporte-periodo' */}
          <Routes>
            <Route path="/" element={<ReportSemester />} />
            <Route path="reporte-semestre" element={<ReportSemester />} />
            <Route path="reporte-anual" element={<ReportAnnual />} />
            <Route path="reporte-general" element={<ReportGeneral />} />
          </Routes>

        </div>

      </div>
    </div >
  );
};