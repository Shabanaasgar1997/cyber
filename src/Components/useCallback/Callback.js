import React, { useCallback, useState } from "react";
import Child1 from "./Child5";

function Callback() {
  const [add, setAdd] = useState(0);

  const navyakothur = useCallback(() => {
    console.log("hey navya");
  }, [add]);

  return (
    <div>
      <p>{add}</p>
      <Child1 name={navyakothur} />
      <button className="btn btn-warning" onClick={() => setAdd(add + 1)}>
        ADD
      </button>
    </div>
  );
}

export default Callback;
