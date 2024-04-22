/// Componentes
import { Header } from "../../../../components/header/Header";
import { SideMenu } from "../../../../components/sidemenu/SideMenu";
import { StatisticalCards } from "../../../../components/statistical-cards/StatisticalCards";

/// Iconos 
import { FaUsers, FaPiggyBank } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { AiOutlineComment } from "react-icons/ai";

/// Estilos
import "./Home.css";


// Pagina : Inicio
export const Home = () => {

  // Items Tarjetas de Informacion
  const itemsCards = [
    {
      title: 'Número de Estudiantes',
      icon: <FaUsers />,
      value: 'Numero de Estudiantes Ingresados : '
    },
    {
      title: 'Programa Académico',
      icon: <FaBookAtlas />,
      value: 'Programa Academico con mas Ingresos : '
    },
    {
      title: 'Estrato Socioeconómico',
      icon: <FaPiggyBank />,
      value: 'Estrato Socioeconomico mas recurrente : '
    },
    {
      title: 'Percepción General',
      icon: <AiOutlineComment />,
      value: 'Percepcion General : '
    }
  ];

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Menu lateral */}
        <div className="col-2 p-0">
          <SideMenu />
        </div>

        {/* Contenido */}
        <div className="col-10">
          <div className="row">

            {/* Cabecera */}
            <Header titleModule={`Inicio`} titleSection={'Dashboard'} />

            {/* Cards de informacion  */}
            <div className="col-12 d-flex flex-row justify-content-center">
              <StatisticalCards data={itemsCards} />
            </div>

          </div>
        </div>

      </div>
    </div >
  );
};
