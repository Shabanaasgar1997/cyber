import React, { useContext } from "react";

import { data, data2 } from "./Paremt";

function Child2() {
  const name = useContext(data);
  const mail = useContext(data2);
  return (
    <div>
      Hey this is Child2 data{name}
      {mail}
    </div>
  );
}

export default Child2;
