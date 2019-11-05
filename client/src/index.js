import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './ComponenteMain/App';
import "./ComponenteMain/EstiloMain/App.css";

//Relatórios viram rotas à serem importadas
import AssiduidadePilotos from './ComponenteMain/Relatorios/AssiduidadePilotos';
import CorridasPorRegiao from './ComponenteMain/Relatorios/CorridasPorRegiao';
import TotalDeCorridas from './ComponenteMain/Relatorios/TotalDeCorridas';
import MaioresVelocidades from './ComponenteMain/Relatorios/MaioresVelocidades';
import MediasLargadas from './ComponenteMain/Relatorios/MediasLargadas';
import PilotoPorPais from './ComponenteMain/Relatorios/PilotoPorPais';
import ProvasPorCircuitos from './ComponenteMain/Relatorios/ProvasPorCircuitos';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/assiduidadePilotos" exact={true} component={AssiduidadePilotos} />
            <Route path="/corridasPorRegiao" exact={true} component={CorridasPorRegiao} />
            <Route path="/totalDeCorridas" exact={true} component={TotalDeCorridas} />
            <Route path="/maioresVelocidades" exact={true} component={MaioresVelocidades} />
            <Route path="/mediasLargadas" exact={true} component={MediasLargadas} />
            <Route path="/pilotoPorPais" exact={true} component={PilotoPorPais} />
            <Route path="/provasPorCircuito" exact={true} component={ProvasPorCircuitos} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
