import "./App.css";
import React from "react";
import Primeiro from "./components/basicos;/Primeiro";
import Segundo from "./components/basicos;/Segundo";
import ComParametro from "./components/basicos;/ComParametro";
import Familia from "./components/basicos;/Familia";
import FamiliaMembro from "./components/basicos;/FamiliaMembro";
import Card from "./layout/Card";

const app = () => {
  return (
    <div className="app">
      <h1>Fundamentos React</h1>
      <div className="cards">       
      <Card titulo="Famílica Membro" color="#d62d20">
       <Familia sobrenome="Ferreira">
        <FamiliaMembro nome="Fabricio"/>
        <FamiliaMembro nome="Juliana"/>
       </Familia>
        </Card>
        <Card titulo="Primeiro exemplo" color="#008744">
          <Primeiro />
        </Card>
        <Card titulo="Segundo  exemplo" color="#ffa700" >
          <Segundo />
        </Card>
        <Card titulo="Com Parâmetro" color="#0057e7">
          <ComParametro titulo="Teste Titulo" subtitulo="Test Subtitulo"  />
        </Card>
      </div>
    </div>
  );
};

export default app;
