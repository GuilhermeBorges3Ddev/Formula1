import React from 'react';
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
                        <a href="/">Maiores Velocidades</a>
                    </li>
                    <li className="mt-2">
                        <a href="/">Piloto por país</a>
                    </li>
                    <li className="mt-2">
                        <a href="/">Provas por circuitos</a>
                    </li>
                    <li className="mt-2">
                        <a href="/">Médias das largadas</a>
                    </li>
                    <li className="mt-2">
                        <a href="/">Assiduidade pilotos</a>
                    </li>
                    <li className="mt-2">
                        <a href="/">Corridas por região</a>
                    </li>
                    <li className="mt-2">
                        <a href="/">Eventos pelo mundo</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
  
export default BarraVertical;



