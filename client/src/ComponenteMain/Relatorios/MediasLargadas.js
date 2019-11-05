import React, { Component } from 'react';
import Chart from 'react-google-charts';
import '../EstiloMain/App.css';
import '../EstiloMain/bg.png';

import BarraHorizontal from '../../Componentes/BarraHorizontal';
import BarraVertical from '../../Componentes/BarraVertical';

class MediasLargadas extends Component{

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
                
                <h1 className="text-white">Medias Largadas</h1>

                <div className="d-flex w-100 h-100 mr-5" style={{backgroundColor: "transparent;"}}>
                <Chart
                  width={'825px'}
                  height={'500px'}
                  chartType="AreaChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['', 'Menor, médio e maior tempo de largada (AZUL)', 'Média do horário de largada(VERMELHO)'],
                    ['', 2.13, 1.57],
                    ['', 1.57, 1.57],
                    ['', 1.31, 1.57],
                  ]}
                  options={{
                    title: 'Horários de largada, dos em mls e convertidos para hrs',
                    backgroundColor: 'none',
                    hAxis: { title: '', titleTextStyle: { color: '#333' } },
                    vAxis: { minValue: 0, titleTextStyle: { color: 'green' } },
                    chartArea: { width: '50%', height: '70%' },
                  }}
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

export default MediasLargadas;