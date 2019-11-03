const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3003; //porta padrão Node API
const mysql = require('mysql');
var cors = require('cors');

// Configurando o body parser para pegar POSTS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'API Node.JS funcionando!' }));
app.use('/', router);

// Na execução, por favor, coloque o seu USER, PASSWORD e a sua DATABASE
const connection = mysql.createConnection({
 host : 'localhost',
 port : 3306,
 user : 'root',
 password : 'password',
 database : 'smarkioWeather'
});

///////////////////////////////////////////// INSERÇÃO ////////////////////////////////////////////////////////////////////////
function addRows(conn){
    const sql = "INSERT INTO cidadeClima(cidade, pais, temperatura, umidade, latitude, longitude) VALUES ?";
    const values = [
        ['Miami Vice', 'US', 28.7, 45, 25.77, 80.20],
        ['Sao Paulo Dist', 'BR', 29.43, 54, 23.55, 46.63],
        ['Savassi Area', 'BR', 27.09, 57, 19.92, 43.95],
        ['Ski Montain City', 'AR', 26.33, 45, 34.61, 58.44],
        ['Montevideu do Norte', 'URU', 24, 24, 6.06, 42.74]
    ];
    conn.query(sql, [values], function (error, results, fields){
    if(error) return console.log(error);
    console.log('Adicionando dados das cidades e seus climas!');
    conn.end();
    });
}

///////////////////////////////////////////// LISTA TODAS AS CIDADES E SEUS CLIMAS ////////////////////////////////////////////
router.get('/cidades/', (req, res) => {
    let filter = '';
    execSQLQuery('SELECT * FROM cidadeClima' + filter, res);
});

///////////////////////////////////////////// LISTA AS 5 CIDADES MAIS PESQUISADAS /////////////////////////////////////////////
router.get('/maisPesquisadas/', (req, res) => {
    let filter = '';
    execSQLQuery('SELECT cidade, COUNT(*) AS Num_de_consultas FROM cidadeClima GROUP BY cidade ORDER BY Num_de_consultas DESC LIMIT 5' + filter, res);
});

///////////////////////////////////////////// LISTA AS ÚLTIMAS 5 CIDADES PESQUISADAS //////////////////////////////////////////
router.get('/recentementePesquisadas/', (req, res) => {
    let filter = '';
    execSQLQuery('SELECT cidade AS Ultimas_cidades_pesquisadas FROM cidadeClima ORDER BY id_cidade DESC LIMIT 5' + filter, res);
});

////////////////////////////////////////// INICIA O SERVER //////////////////////////////////////////////////////
app.listen(port);
console.log('API pronta para resposta!');
function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'smarkioWeather'

    });
    connection.query(sqlQry, function (error, results, fields) {
        if (error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log('Query executada!');
    });
}

////////////////////////////////////////// Força a criação da tabela "cidadeClima" caso não tenha sido criada em queriesSQL.sql
function createTable(conn){
    const sql = "CREATE TABLE IF NOT EXISTS cidadeClima (\n"+
    "id_cidade int AUTO_INCREMENT PRIMARY KEY,\n"+
    "cidade varchar(200) NOT NULL,\n"+
    "pais char(150) NOT NULL,\n"+
    "temperatura float,\n"+
    "umidade float,\n"+
    "latitude float,\n"+
    "longitude float,\n"+
    ");";
   
    conn.query(sql, function (error, results, fields){
    if(error) return console.log(error);
    console.log('Tabela dos dados climáticos das cidades criada!');
    });
}

////////////////////////////////////////// EXPORTANDO ROTAS PARA O APP.JS DO REACT///////////////////////////////////////////////
module.exports = router;
