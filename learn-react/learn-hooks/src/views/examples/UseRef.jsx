import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setVelue1] = useState("");
  const [value2, setVelue2] = useState("");
  const count = useRef(0);

  useEffect(
    function () {
      count.current += 1;
    },
    [value1, value2]
  );

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01" />

      <div className="center">
        <div>
          <span className="text">valor:</span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input
          type="text"
          className="input"
          value={value1}
          onChange={(e) => setVelue1(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercídio #02" />
      <div className="center">
        <input
          type="text"
          className="input"
          value={value2}
          onChange={(e) => setVelue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
