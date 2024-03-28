/// Liberias de react
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";

/// Paginas
import { Login } from "./pages/auth/login/Login";
import { UserRegister } from "./pages/auth/register/UserRegister";
import { Home } from "./modules/data/pages/home/Home";
import { PeriodReport } from "./modules/data/pages/reports-period/PeriodReport";


function App() {
  return (
    <BrowserRouter>

      <WavyContainer />

      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="inicio-sesion" element={<Login />} />
        <Route path="registro-usuario" element={<UserRegister />} />
        <Route path="inicio" element={<Home />} />
        <Route path="reporte-periodo/*" element={<PeriodReport />} />
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
