import React, { useState, useMemo } from "react";

function Memo() {
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(100);

  const Update = useMemo(() => {
    console.log("*******hey**************");
  }, [plus]);
  //   function Update() {
  //     console.log("*******hey**************");
  //   }
  return (
    <div>
      {Update}
      <p>{plus}</p>
      <button className="btn btn-success" onClick={() => setPlus(plus + 1)}>
        +
      </button>
      <p>{minus}</p>
      <button className="btn btn-success" onClick={() => setMinus(minus - 1)}>
        -
      </button>
      {/* <div>
        <button className="btn btn-info" onClick={Update()}>
          UPDATE
        </button>
      </div> */}
    </div>
  );
}

export default Memo;
