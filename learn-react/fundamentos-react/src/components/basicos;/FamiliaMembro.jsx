import React from "react";

const FamiliaMembro = (props) => {
  return (
    <div>
      <strong>{props.nome}</strong> <strong>{props.sobrenome}</strong>
    </div>
  );
};

export default FamiliaMembro;
