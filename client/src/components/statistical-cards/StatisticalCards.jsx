/// Librerias de react
import React from 'react'

/// Estilos
import './StatisticalCards.css'

// Componente : Tarjetas de Informacion Estadistica
export const StatisticalCards = ({ data }) => {

    return (
        <div className='col-12 d-flex flex-row flex-wrap'>

            {data.map((item, index) => (

                <div className='d-flex flex-column p-4 mx-3 my-3 card-statistical' key={index}>

                    <h4 className='d-flex flex-row justify-content-center align-items-center text-center'>

                        <span className='mx-3 card-statistical__icon'> {item.icon} </span>
                        <span> {item.title} </span>

                    </h4>

                    <p className='text-center p-3'>{item.value}</p>
                    <span className='text-center card-statistical__icon'> API </span>
                </div>

            ))}

        </div>
    );
};