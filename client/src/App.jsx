import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import { Home } from "./pages/data/home/Home";
import { Login } from "./pages/auth/login/Login";
import { UserRegister } from "./pages/auth/register/UserRegister";
import { NotFoundPage } from "./pages/notFoundPage/NotFoundPage";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/inicio-sesion" />} />
        <Route path="inicio" element={<Home />} />
        <Route path="inicio-sesion" element={<Login />} />
        <Route path="registro-usuario" element={<UserRegister />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
