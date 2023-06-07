import "./App.css";
import React from "react";
import Primeiro from "./components/basicos;/Primeiro";
import Segundo from "./components/basicos;/Segundo";
import ComParametro from "./components/basicos;/ComParametro";
import Card from "./layout/Card";

const app = () => {
  return (
    <div className="app">
      <h1>Fundamentos React</h1>
      <div className="cards">       
        <Card titulo="Primeiro exemplo">
          <Primeiro />
        </Card>
        <Card titulo="Segundo  exemplo">
          <Segundo />
        </Card>
        <Card titulo="Com Parâmetro">
          <ComParametro titulo="Teste Titulo" subtitulo="Test Substitulo" />
        </Card>
      </div>
    </div>
  );
};

export default app;
