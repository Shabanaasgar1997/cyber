import React, { memo } from "react";

function child1({ name }) {
  console.log("*************hey***************");
  return (
    <div>
      <h1 className="display-1">Hey this is Child component</h1>

      {name}
    </div>
  );
}

export default memo(child1);
