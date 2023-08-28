import React, { useReducer } from "react";
const intialstate = 10;

const reducer = (state, action) => {
  switch (action) {
    case "Addtocart":
      return state + 1; //11
    case "Decrement":
      if (state <= 1) {
        return state;
      } else {
        return state - 1;
      }
    case "multiply":
      return state * 5;

    default:
      return state;
  }
};
function Reducer() {
  const [count, dispatch] = useReducer(reducer, intialstate);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button
          className="btn btn-success"
          onClick={() => dispatch("Addtocart")}
        >
          Add
        </button>
        <button
          className="btn btn-warning"
          onClick={() => dispatch("Decrement")}
        >
          Substract
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch("multiply")}
        >
          *
        </button>
      </div>

      <div className="container">
        <button onClick={() => dispatch("Addtocart")}>+</button>
      </div>
    </>
  );
}

export default Reducer;
