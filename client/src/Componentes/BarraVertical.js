import React from 'react';
import { Link } from 'react-router-dom'
import "../ComponenteMain/EstiloMain/App.css"

const BarraVertical = () => {
    return (
        <div id="wrapper-side-area" class="toggled">
            <div id="sidebar-wrapper" className="mr-0 pr-0">
                <ul class="sidebar-nav">
                    <li class="sidebar-brand text-white my-5 border-bottom border-secondary">
                        Relatórios
                    </li>
                    <li className="mt-2">
                        <Link to="/pilotoPorPais">Piloto por país</Link>
                    </li>
                    <li className="mt-2">
                        <Link to="/provasPorCircuito">Provas por circuitos</Link>
                    </li>
                    <li className="mt-2">
                        <Link to="/mediasLargadas">Médias das largadas</Link>
                    </li>
                    <li className="mt-2">
                        <Link to="/assiduidadePilotos">Assiduidade pilotos</Link>
                    </li>
                    <li className="mt-2">
                        <Link to="/corridasPorRegiao">Corridas por região</Link>
                    </li>
                    <li className="mt-2">
                        <Link to="/totalDeCorridas">Total de corridas</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
  
export default BarraVertical;



