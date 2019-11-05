import React, { Component } from 'react';
import Chart from 'react-google-charts';
import '../EstiloMain/App.css';
import '../EstiloMain/bg.png';

import BarraHorizontal from '../../Componentes/BarraHorizontal';
import BarraVertical from '../../Componentes/BarraVertical';

class ProvasPorCircuitos extends Component{

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
                <h1 className="text-white">Provas por circuitos</h1>
                <div className="d-flex w-100 h-100 mr-5" style={{backgroundColor: "transparent;"}}>
                <Chart
                  width={'600px'}
                  height={'400px'}
                  chartType="ScatterChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['', 'Número de Provas'],
                    [0, 10],
                    [0, 12],
                    [0, 18],
                    [0, 24],
                  ]}
                  options={{
                    title: 'IDs: 10(Brands Hatch), 16(Detroit Street Circuit), 47(Interlagos) e 48(Beijin Cicuit)',
                    hAxis: { title: '', minValue: 0, maxValue: 15 },
                    vAxis: { title: 'Número de provas', minValue: 0, maxValue: 15 },
                    legend: 'none',
                    backgroundColor: 'none'
                  }}
                  rootProps={{ 'data-testid': '1' }}
                  getChartEditor={({ chartEditor, chartWrapper, google }) => {
                    console.log('Get Chart Editor')
                  }}
                  chartPackages={['corechart', 'controls', 'charteditor']}
                />
                </div>
              </div>

            </div>
          </div>
        </div>

    );
  }

}

export default ProvasPorCircuitos;