CREATE DATABASE smarkioWeather;

USE smarkioWeather;

CREATE TABLE IF NOT EXISTS cidadeClima (
	id_cidade INT AUTO_INCREMENT PRIMARY KEY,
	cidade VARCHAR(200) NOT NULL,
	pais VARCHAR(150) NOT NULL,
    temperatura FLOAT,
    umidade FLOAT,
    latitude FLOAT,
    longitude FLOAT
)ENGINE=INNODB;

/* INSERÇÃO DE 5 CIDADES ALEATÓRIAS PARA TESTE DE EXIBIÇÃO NA NODE API   */
INSERT INTO cidadeClima(cidade, pais, temperatura, umidade, latitude, longitude) VALUES ('Miami Vice', 'US', 28.7, 45, 25.77, 80.20); 
INSERT INTO cidadeClima(cidade, pais, temperatura, umidade, latitude, longitude) VALUES ('Sao Paulo Dist', 'BR', 29.43, 54, 23.55, 46.63); 
INSERT INTO cidadeClima(cidade, pais, temperatura, umidade, latitude, longitude) VALUES ('Savassi Area', 'BR', 27.09, 57, 19.92, 43.95); 
INSERT INTO cidadeClima(cidade, pais, temperatura, umidade, latitude, longitude) VALUES ('Ski Montain City', 'AR', 26.33, 45, 34.61, 58.44); 
INSERT INTO cidadeClima(cidade, pais, temperatura, umidade, latitude, longitude) VALUES ('Montevideu do Norte', 'URU', 24, 24, 6.06, 42.74); 

SELECT * FROM cidadeClima;

/* LISTAGEM DAS 5 CIDADES MAIS PESQUISADAS  */
SELECT cidade, COUNT(*) AS Num_de_consultas 
FROM cidadeClima 
GROUP BY cidade 
ORDER BY Num_de_consultas DESC
LIMIT 5;

/* LISTAGEM DAS 5 ÚLTIMAS CIDADES PESQUISADAS  */
SELECT cidade AS Ultimas_cidades_pesquisadas
FROM cidadeClima  
ORDER BY id_cidade DESC
LIMIT 5;