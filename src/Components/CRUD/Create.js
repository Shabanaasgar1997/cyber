import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const Datapush = (e) => {
    e.preventDefault();
    console.log(username, password);
    Axios.post("https://64aa687d0c6d844abede6bd8.mockapi.io/CRUD-NAVYA", {
      username: username,
      password: password,
    })
      .then((response) => {
        console.log(response);
        alert("Data sent successfully");
        navigate("/read");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="container">
      <form className="w-50 mx-auto" onSubmit={Datapush}>
        <label htmlFor="">UserName</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Password</label>

        <input
          type="Password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary my-2" type="submit">
          SIGNUP
        </button>
      </form>
    </div>
  );
}

export default Create;
