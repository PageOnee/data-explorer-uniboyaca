import { MdOutlineSettings } from "react-icons/md";
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__logo'>
            <img src="../../../public/ub-logo.svg" alt="logo" />
            <span> Explorador de Datos </span>
        </div>

        <div className='navbar__user'>
            <img src="https://i.pinimg.com/736x/fc/30/66/fc3066e1f06f14f4e4e2d394c703786a.jpg" alt="logo-usuario" />
            <span>Maicol Rojas</span>
            <div className="user__settings">
                <MdOutlineSettings className="icon"/>
            </div>
        </div>
    </div>
  )
}
