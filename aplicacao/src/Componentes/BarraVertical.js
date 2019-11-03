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
                        <a href="/">Dashboard</a>
                    </li>
                    <li className="mt-2">
                        <a href="/">Shortcuts</a>
                    </li>
                    <li className="mt-2">
                        <a href="/">Overview</a>
                    </li>
                    <li className="mt-2">
                        <a href="/">Events</a>
                    </li>
                    <li className="mt-2">
                        <a href="/">About</a>
                    </li>
                    <li className="mt-2">
                        <a href="/">Services</a>
                    </li>
                    <li className="mt-2">
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
  
export default BarraVertical;



