/// Liberias de react
import React from 'react'

/// Componentes
import { SideMenu } from "../../../../components/sidemenu/SideMenu";
import { ReportHistorical } from '../../components/report-historical/ReportHistorical'


export const HistoricalReport = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>

                {/* Menu lateral */}
                <div className="col-2 p-0">
                    <SideMenu />
                </div>

                {/* Contenido */}
                <div className='col-10'>
                    <ReportHistorical />
                </div>

            </div>
        </div>
    )
}
