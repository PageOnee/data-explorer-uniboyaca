/// Liberias de react
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";

/// Paginas
import { Login } from "./pages/auth/login/Login";
import { UserRegister } from "./pages/auth/register/UserRegister";
import { Home } from "./pages/data/home/Home";
import { SemesterReport } from "./pages/data/semesterReport/SemesterReport";
import { AnnualReport } from "./pages/data/annualReport/AnnualReport";
import { GeneralReport } from "./pages/data/generalReport/GeneralReport";
import { Support } from "./pages/support/Support";

/// Estilos
import "./styles/App.css";


function App() {
  return (
    <BrowserRouter>

      <WavyContainer />

      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="inicio" element={<Home />} />
        <Route path="inicio-sesion" element={<Login />} />
        <Route path="registro-usuario" element={<UserRegister />} />
        <Route path="reporte-semestral" element={<SemesterReport />} />
        <Route path="reporte-anual" element={<AnnualReport />} />
        <Route path="reporte-general" element={<GeneralReport />} />
        <Route path="ayuda" element={<Support />} />
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
