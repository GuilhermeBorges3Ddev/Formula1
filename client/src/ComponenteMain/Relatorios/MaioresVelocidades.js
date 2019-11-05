import React, { Component } from 'react';
import '../EstiloMain/App.css';
import '../EstiloMain/bg.png';

import BarraHorizontal from '../../Componentes/BarraHorizontal';
import BarraVertical from '../../Componentes/BarraVertical';

class MaioresVelocidades extends Component{
  
  render(){
    
    return (

      <div className="row">

        <div className="col-2 p-0">
          <BarraVertical />
        </div>

        <div className="col-10 p-0">
          <div className="bar-horizontal">
            <BarraHorizontal/>
          </div>
          <div className="wrapper">

              <div className="row w-75 ml-5 justify-content-between align-items-start">
                <h1 className="text-white">Maiores Velocidades</h1>
              </div>

            </div>
          </div>
        </div>

    );
  }

}

export default MaioresVelocidades;