import React, { Component } from 'react';
import "./PilotoPorPais.css";
import '../EstiloMain/App.css';
import '../EstiloMain/bg.png';

import BarraHorizontal from '../../Componentes/BarraHorizontal';
import BarraVertical from '../../Componentes/BarraVertical';
import BarChartPilotoPais from '../Graficos/BarChartPilotoPais';

class PilotoPorPais extends Component{
 
  render(){
    
    const data = [
      {
        xField: "França",
        yField: 100
      },
      {
        xField: "Brasil",
        yField: 80
      },
      {
        xField: "Estados Unidos",
        yField: 76
      },
      {
        xField: "Outros países",
        yField: 76
      }
    ];

    return (

      <div className="row">

        <div className="col-2 p-0">
          <BarraVertical />
        </div>

        <div className="col-10 p-0">
          <div className="bar-horizontal">
            <BarraHorizontal/>
          </div>
          <div className="wrapper-piloto-pais">

              <div className="row w-100 h-100 ml-5 mt-4">
                <h1 className="text-white text-nowrap">Pilotos por país</h1>
              
                  <div className="d-flex w-100 h-100 mr-5 chartPilotoPais">
                      <BarChartPilotoPais 
                        width="650"
                        height="500"
                        title="Quantidade de Pilotos por país"
                        data={data}
                        xRange={[0, 400]}
                        xDomain={data.map((s) => s.xField)}
                        yRange={[340, 0]}
                        yDomain={[0, 100]}>
                      </BarChartPilotoPais>
                  </div>

                </div>
             
            </div>


          </div>
        </div>

    );
  }

}

export default PilotoPorPais;