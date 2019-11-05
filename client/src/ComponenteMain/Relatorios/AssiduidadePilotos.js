import React, { Component } from 'react';
import Chart from 'react-google-charts';
import "./AssiduidadePilotos.css";
import '../EstiloMain/App.css';
import '../EstiloMain/bg.png';

import BarraHorizontal from '../../Componentes/BarraHorizontal';
import BarraVertical from '../../Componentes/BarraVertical';

class AssiduidadePilotos extends Component{

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };
  
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
                
                <h1 className="text-white">Assiduidade pilotos</h1>

                <div className="d-flex w-100 h-100 mr-5" style={{backgroundColor: "transparent;"}}>
                <Chart
                   fill="transparent"
                   width={'700px'}
                   height={'500px'}
                   padding={"20px"}
                   chartType="PieChart"
                   loader={<div>Loading Chart</div>}
                   data={[
                    ['Pilotos', 'Corridas'],
                    ['Raikkonen', 141],
                    ['Kovalainen"', 105],
                    ['Hamilton', 105],
                    ['Kubica', 102],
                    ['Liuzzi', 87],
                    ['Total de corridas na história', 2460],
                   ]}
                   options={{
                    is3D: true,
                    title: "Os 5 pilotos que mais disputaram provas",
                    backgroundColor: 'none',
                    slices: {
                      0: { offset: 0.45 },
                      1: { offset: 0.4 },
                      2: { offset: 0.3 },
                      3: { offset: 0.2 },
                      4: { offset: 0.1 },
                    },
                   }}
                   rootProps={{ 'data-testid': '2' }}
                  />
                </div>

              </div>

            </div>
          </div>
        </div>

    );
  }

}

export default AssiduidadePilotos;