import React, { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Navya");
  const updateValue = () => {
    setCount(count + 1);
  };
  const updateName = () => {
    setData("Navya Kothur");
  };
  useEffect(() => {
    console.log("hey the component got mounted");
  }, []);
  return (
    <>
      hey this is useEffect Concept
      <div>{count}</div>
      <button className="btn btn-success" onClick={updateValue}>
        Update
      </button>
      <div className="mt-lg-5">
        {data}

        <button className="btn btn-primary" onClick={updateName}>
          Update Name
        </button>
      </div>
    </>
  );
}

export default Effect;
