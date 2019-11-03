import React from 'react';
import ReactDOM from 'react-dom';

//Importante que seja dado o comando "yarn" no mesmo diretório de package.json, senão node_modules/ não existirá 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './ComponenteMain/App';
import "./ComponenteMain/EstiloMain/App.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
