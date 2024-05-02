/// Liberias de react
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";

/// Paginas
import { Login } from "./modules/auth/pages/login/Login";
import { UserRegister } from "./modules/auth/pages/register/UserRegister";
import { Home } from "./modules/data/pages/home/Home";
import { PeriodReport } from "./modules/data/pages/reports-period/PeriodReport";
import { HistoricalReport } from "./modules/data/pages/reports-historical/HistoricalReport";


function App() {
  return (
    <BrowserRouter>

      {/* Transciciones */}
      <WavyContainer />

      <Routes>
        {/* Path ruta por defecto */}
        <Route path="/" element={<Navigate to="/inicio-sesion" />} />

        {/* Path rutas */}
        <Route path="inicio-sesion" element={<Login />} />
        <Route path="registro-usuario" element={<UserRegister />} />
        <Route path="inicio" element={<Home />} />
        <Route path="reporte-periodo/*" element={<PeriodReport />} />
        <Route path="reporte-historico/*" element={<HistoricalReport />} />


        {/* Path para ruta no encontrada */}
        <Route path="*" element={<Navigate to="/inicio-sesion" />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
