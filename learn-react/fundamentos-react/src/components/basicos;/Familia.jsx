import React, { cloneElement } from "react";
import FamiliaMembro from "./FamiliaMembro";

const Familia = (props) => {
  return (
    <div>
      {props.children.map((child,i) => {
        return cloneElement(child, {...props,Key:i});
      })}
    </div>
  );
};

export default Familia;
