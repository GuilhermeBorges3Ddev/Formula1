import React, { Component } from 'react';
import axios from "axios";
import './EstiloMain/App.css';
import './EstiloMain/bg.png';

//Importação dos componentes carregados dentro de App()
import BarraHorizontal from '../Componentes/BarraHorizontal';
import BarraVertical from '../Componentes/BarraVertical';

class App extends Component{

  //Pegando as alterações nos dados de busca por busca, armazenamento em estados(states), inicialmente "undefined"
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  }

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

///////////////////////////////////////////  Inserções /////////////////////////////////////////////////////////
  putDataRacer = () => {
    axios.post("http://localhost:3001/api/putData", fetch('http://ergast.com/api/f1/drivers.json?callback=myParser'));
  };

  putDataCircuit = () => {
    axios.post("http://localhost:3001/api/putData", fetch('http://ergast.com/api/f1/circuits.json?callback=myParser'));
  };

  putDataStandings = () => {
    axios.post("http://localhost:3001/api/putData", fetch('http://ergast.com/api/f1/current/driverStandings.json'));
  };

  putRaceSchedules = () => {
    axios.post("http://localhost:3001/api/putData", fetch('http://ergast.com/api/f1/current'));
  };

  putRaceResults = () => {
    axios.post("http://localhost:3001/api/putData", fetch('https://ergast.com/api/f1/current/last/results.json'));
  };
  
  //
  render(){
    // const { data } = this.state;
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
                  <div style={{ padding: "10px" }}>
                    <h5 className="text-white">Clique para adicionar pilotos</h5>
                    <button className="text-uppercase" onClick={() => this.putDataRacer()}>
                      Adiciona Pilotos
                    </button>
                  </div>

                  <div style={{ padding: "10px" }}>
                    <h5 className="text-white">Clique para adicionar circuitos</h5>
                    <button className="text-uppercase" onClick={() => this.putDataCircuit()}>
                      Adiciona Circuitos
                    </button>
                  </div>
              </div>

              <div className="row w-75 ml-5 justify-content-between align-items-start">
                  <div style={{ padding: "10px" }}>
                    <h5 className="text-white">Clique para adicionar as pontuações</h5>
                    <button className="text-uppercase" onClick={() => this.putDataStandings()}>
                      Adiciona Pontuações
                    </button>
                  </div>

                  <div style={{ padding: "10px" }}>
                    <h5 className="text-white">Clique para adicionar datas</h5>
                    <button className="text-uppercase" onClick={() => this.putRaceSchedules()}>
                      Adiciona Datas
                    </button>
                  </div>
              </div>
              
              <div className="row w-75 ml-2 justify-content-between align-items-start">
                <div style={{ padding: "10px" }}>
                    <h5 className="text-white">Clique para adicionar resultados</h5>
                    <button className="text-uppercase" onClick={() => this.putRaceResults()}>
                      Adiciona Resultados
                    </button>
                </div>
              </div>

            </div>
          </div>
        </div>

    );
  }

}

export default App;


/* ----------------------------------------------- COMPONENTES QUE AINDA PODEM SER APROVEITADOS

<Formulario getData={this.getData}/>

<ClimaInfo
  temperatura={this.state.temperatura}
  cidade={this.state.cidade}
  pais={this.state.pais}
  umidade={this.state.umidade}
  latitude={this.state.latitude}
  longitude={this.state.longitude}
  error={this.state.error}
/>

<Listagens/>

    temperatura: undefined,
    cidade: undefined,
    pais: undefined,
    umidade: undefined,
    latitude: undefined,
    longitude: undefined,
    error: undefined

----------------------------------------> Parte da main abaixo de state:

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

  const API_KEY = "81101292e91a941f627ea27ec02cf4bd";


                  <ul>
                    {data.length <= 0 ? "NO DB ENTRIES YET" : data.map(dat => (
                      <li style={{ padding: "10px" }} key={dat}>
                        <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                        <span style={{ color: "gray" }}> data: </span>
                        {dat.message}
                      </li>
                    ))}
                  </ul> 

*/