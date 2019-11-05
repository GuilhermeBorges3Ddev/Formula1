import React, { Component } from 'react';
import Chart from 'react-google-charts';
import '../EstiloMain/App.css';
import '../EstiloMain/bg.png';

import BarraHorizontal from '../../Componentes/BarraHorizontal';
import BarraVertical from '../../Componentes/BarraVertical';

class TotalDeCorridas extends Component{

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
                <h1 className="text-white">Total de Corridas</h1>
                <div className="d-flex w-100 h-100 mr-5" style={{backgroundColor: "transparent;"}}>
                <Chart
                  width={'600px'}
                  height={'400px'}
                  chartType="ScatterChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['', 'Total de Corridas'],
                    [0, 63],
                    [0, 57]
                  ]}
                  options={{
                    title: 'Número de corridas entre 2014/2015(57 corridas) versus 2016/2017(63 corridas)',
                    hAxis: { title: '', minValue: 0, maxValue: 0 },
                    vAxis: { title: 'Total de Corridas', minValue: 0, maxValue: 15 },
                    backgroundColor: 'none',
                    legend: 'none',
                    animation: {
                      startup: true,
                      easing: 'linear',
                      duration: 1500,
                    },
                    enableInteractivity: false,
                  }}
                  chartEvents={[
                    {
                      eventName: 'animationfinish',
                      callback: () => {
                        console.log('Animation Finished')
                      },
                    },
                  ]}
                  rootProps={{ 'data-testid': '1' }}
                />
                </div>
              </div>

            </div>
          </div>
        </div>

    );
  }

}

export default TotalDeCorridas;