import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setUsername(localStorage.getItem("username"));
    setPassword(localStorage.getItem("password"));
  }, []);
  const update = (e) => {
    e.preventDefault();
    Axios.put(`https://64aa687d0c6d844abede6bd8.mockapi.io/CRUD-NAVYA/${id}`, {
      username: username,
      password: password,
    })
      .then((res) => {
        alert("updates successfully");
        navigate("/read");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <form onSubmit={update}>
        <label htmlFor="">ID</label>
        <input
          type="text"
          className="form-control"
          value={id}
          readOnly={true}
          disabled
        />
        <label htmlFor="">Username</label>

        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Password</label>

        <input
          type="text"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-success">Back</button>
        </Link>
      </form>
    </>
  );
}

export default Update;
