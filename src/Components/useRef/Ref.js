import React, { useRef, useState } from "react";

function Ref() {
  const [name, setName] = useState("Navya");
  const refElement = useRef("");
  console.log(refElement);
  const reset = () => {
    setName("");
    refElement.current.focus();
    refElement.current.style.border = "2px solid red";
  };
  const Change = () => {
    refElement.current.style.backgroundColor = "red";
  };
  return (
    <>
      <div className="container mt-lg-5">
        <input
          type="text"
          className="form-control w-50"
          ref={refElement}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-warning" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-info" onClick={Change}>
          Change color
        </button>
      </div>
    </>
  );
}

export default Ref;
