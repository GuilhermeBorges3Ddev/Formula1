import React from 'react';
import './EstiloMain/App.css';
import './EstiloMain/bg.png';

//Importação dos componentes carregados dentro de App()
import Listagens from '../Componentes/Listagens';
import Formulario from '../Componentes/Formulario';
import ClimaInfo from '../Componentes/ClimaInfo';
import BarraHorizontal from '../Componentes/BarraHorizontal';
import BarraVertical from '../Componentes/BarraVertical';

const API_KEY = "81101292e91a941f627ea27ec02cf4bd";

class App extends React.Component{

  //Pegando as alterações nos dados de busca por busca, armazenamento em estados(states), inicialmente "undefined"
  state = {
    temperatura: undefined,
    cidade: undefined,
    pais: undefined,
    umidade: undefined,
    latitude: undefined,
    longitude: undefined,
    error: undefined
  }

  getData = async (e) => {
    
    e.preventDefault();//Previne que a requisição disparada não resete pelo reload do React
    
    const cidade = e.target.elements.cidade.value;
    const pais = e.target.elements.pais.value;
    const api_req = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${API_KEY}&units=metric`); 
    const data = await api_req.json();
    
    console.log(data);

    //Validação de cidade e país 
    if(cidade && pais){
      this.setState({
        temperatura: data.main.temp,
        cidade: data.name,
        pais: data.sys.country,
        umidade: data.main.humidity,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        error: ""
      });
    }else{
      this.setState({
        temperatura: undefined,
        cidade: undefined,
        pais: undefined,
        umidade: undefined,
        latitude: undefined,
        longitude: undefined,
        error: "Por favor,digite uma combinação válida de cidade e país!"
      });
    }

  }

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
            <div className="row w-75 mx-auto">
                <div className="col-12">
                  <Formulario getData={this.getData}/>
                </div>
                <div className="col-4">
                  <ClimaInfo
                    temperatura={this.state.temperatura}
                    cidade={this.state.cidade}
                    pais={this.state.pais}
                    umidade={this.state.umidade}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    error={this.state.error}
                  />
                </div>
                <Listagens/>
              </div>
            </div>
          </div>

        </div>

    );
  }

}

export default App;
