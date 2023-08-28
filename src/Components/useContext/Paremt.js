import React, { createContext } from "react";
import Child1 from "./Child1";

const data = createContext();
const data2 = createContext();

function Paremt() {
  const name = "Shabana Anjum";
  const email = "shabana@gmail.com";
  return (
    <data.Provider value={name}>
      <data2.Provider value={email}>
        <Child1 />
      </data2.Provider>
    </data.Provider>
  );
}

export default Paremt;

export { data, data2 };
