import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './ComponenteMain/App';
import "./ComponenteMain/EstiloMain/App.css";

//Relatórios viram rotas à serem importadas
import AssiduidadePilotos from './ComponenteMain/Relatorios/AssiduidadePilotos';
import CorridasPorRegiao from './ComponenteMain/Relatorios/CorridasPorRegiao';
import EventosPeloMundo from './ComponenteMain/Relatorios/EventosPeloMundo';
import MaioresVelocidades from './ComponenteMain/Relatorios/MaioresVelocidades';
import MediasLargadas from './ComponenteMain/Relatorios/MediasLargadas';
import PilotoPorPais from './ComponenteMain/Relatorios/PilotoPorPais';
import ProvasPorCircuitos from './ComponenteMain/Relatorios/ProvasPorCircuitos';

ReactDOM.render(
    <BrowserRouter>
        <App />
        <AssiduidadePilotos />
        <CorridasPorRegiao />
        <EventosPeloMundo />
        <MaioresVelocidades />
        <MediasLargadas />
        <PilotoPorPais />
        <ProvasPorCircuitos />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
