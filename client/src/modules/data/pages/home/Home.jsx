import React, { useEffect, useState } from 'react';

/// Componentes
import { Header } from "../../../../components/header/Header";
import { SideMenu } from "../../../../components/sidemenu/SideMenu";
import { StatisticalCards } from "../../../../components/statistical-cards/StatisticalCards";

/// Iconos 
import { FaUsers, FaPiggyBank } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { AiOutlineComment } from "react-icons/ai";

import { getDataDashboard } from './../../../../services/data.api'

/// Estilos
import "./Home.css";


// Pagina : Inicio
export const Home = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    getDataDashboard()
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Items Tarjetas de Informacion
  const itemsCards = [
    {
      title: 'Número de Estudiantes',
      icon: <FaUsers />,
      value: data ? ` ${data['Numero de registros']}` : 'Cargando...'
    },
    {
      title: 'Programa Académico',
      icon: <FaBookAtlas />,
      value: data ? `${data['Programa Academico']}` : 'Cargando...'
    },
    {
      title: 'Estrato Socioeconómico',
      icon: <FaPiggyBank />,
      value: data ? `${data['Estrato Socioeconomico']}` : 'Cargando...'
    },
    {
      title: 'Percepción General',
      icon: <AiOutlineComment />,
      value: data ? `${data['Satisfaccion General']}` : 'Cargando...'
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
            <Header titleModule="Inicio" titleSection="Dashboard" />
            {/* Cards de informacion */}
            <div className="col-12 d-flex flex-row justify-content-center">
              <StatisticalCards data={itemsCards} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
