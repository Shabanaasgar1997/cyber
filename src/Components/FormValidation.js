import React, { useState } from "react";

function FormValidation() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const Validate = (e) => {
    e.preventDefault();
    console.log("username:" + username, "password:" + password);
    if (username.length === 0 && password.length === 0) {
      setError(true);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center">
        <form className="w-50" onSubmit={Validate}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          {error && username.length <= 1 ? (
            <p className="text-danger" style={{ fontSize: "25px" }}>
              {" "}
              "Enter Details"{" "}
            </p>
          ) : (
            username
          )}
          <label htmlFor="">Password</label>

          <input
            type="text"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && password.length <= 1 ? "Enter Password" : password}
          <button
            type="submit"
            className="btn btn-primary my-lg-2 d-flex mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default FormValidation;
