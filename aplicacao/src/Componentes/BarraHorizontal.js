import React from 'react';
import logo from '../ComponenteMain/EstiloMain/ergastLogo.png'; 
import "../ComponenteMain/EstiloMain/App.css"

const BarraHorizontal = props => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
            <div class="container d-flex align-items-center justify-content-center py-0">
                <a class="navbar-brand" href="/">
                    <img src={logo} height="60px" alt="ergastLogo"/>
                </a>
            </div>
        </nav>
    );
}
  
export default BarraHorizontal;