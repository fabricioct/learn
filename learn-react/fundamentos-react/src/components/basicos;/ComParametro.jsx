import React from "react";

export default function ComParametro(props) {
  console.log(props);

  return (
    <div>
      <h1>{props.titulo} </h1>
      <h3>{props.subtitulo}</h3>
    </div>
  );
}
