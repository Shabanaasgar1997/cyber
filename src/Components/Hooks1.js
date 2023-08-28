import React, { useState } from "react";

function Hooks1() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("Enter username");

  const updateValue = () => {
    console.log("hi");
    setCount(count + 1);
  };
  const removeNumber = () => {
    if (count === 1) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <>
      <h1>{count}</h1>
      <button className="btn bg-primary" onClick={() => updateValue()}>
        +
      </button>
      <button className="btn btn-info" onClick={() => removeNumber()}>
        -
      </button>
      <h1>{username}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Hooks1;