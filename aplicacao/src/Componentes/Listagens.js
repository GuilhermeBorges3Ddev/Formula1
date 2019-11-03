import React from 'react';
import Logo from "../ComponenteMain/EstiloMain/smarkio.png";

//Fazendo chamada na API das duas consultas GET
const linkOne = "http://localhost:3003/maisPesquisadas/"
const linkTwo = "http://localhost:3003/recentementePesquisadas/"

const Listagens = () => {
    return (
      <div className="text-center mx-auto">
        
        <div className="title">
          <img src={Logo} alt="smarkioLogo"/>
        </div>

        <div className="subtitle" id="mostSearch">
          <div class="alert alert-dark text-white" role="alert">
            Top 5 cidades mais pesquisadas:
            <a href={linkOne} id="top5" className = "menu-link" >
              <br></br>
              <span>Clique aqui para ver o top 5</span> 
            </a>
          </div>
        </div>

        <div className="subtitle" id="lastSearch">
          <div class="alert alert-dark text-white" role="alert">
            Últimas cidades pesquisadas:
            <a href={linkTwo} id="top5" className = "menu-link" >
              <br></br>
              <span>Clique aqui para ver as rotas recentes</span> 
            </a>
          </div>
        </div>

      </div>
    );
};
  
export default Listagens;