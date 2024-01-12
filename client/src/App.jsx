import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import { UserRegister } from "./pages/auth/register/UserRegister";
import { Login } from "./pages/auth/login/Login";
import { Home } from "./pages/data/home/Home";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/inicio-sesion" />} />
        <Route path="registro-usuario" element={<UserRegister />} />
        <Route path="inicio-sesion" element={<Login />} />
        <Route path="inicio" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
