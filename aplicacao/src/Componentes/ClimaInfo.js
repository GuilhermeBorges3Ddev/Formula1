import React from 'react';

/*
  Abaixo cada uma das 'props' são testadas, previnindo a não exibição em caso de erro
*/

const ClimaInfo = props => (  
  <div className="weather_info">
    {props.temperatura && 
      <p className="weather__key">Cidade pesquisada: 
        <span className="weather__value"> {props.cidade}</span> 
      </p>
    }

    {props.pais && 
      <p className="weather__key">Sigla do país da cidade buscada: 
        <span className="weather__value"> {props.pais}</span> 
      </p>
    }
        
    {props.temperatura && 
      <p className="weather__key">Temperatura: 
        <span className="weather__value"> {props.temperatura}º</span> 
      </p>
    }
        
    {props.umidade && 
      <p className="weather__key">Umidade: 
        <span className="weather__value"> {props.umidade}%</span> 
      </p>
    }
        
    {props.descricao && 
      <p className="weather__key">Condições: 
        <span className="weather__value"> {props.descricao}</span> 
      </p>
    }

    {props.latitude &&
      <p className="weather__key">Latitude e Longitude: 
        <span className="weather__value"> {props.latitude}lat / {props.longitude}lng </span> 
      </p>
    }

    {props.error &&
      <p className="weather__error mt-4">{props.error}</p>
    }
  </div>
);

export default ClimaInfo;