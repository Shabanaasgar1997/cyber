import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  let URL = "https://64aa687d0c6d844abede6bd8.mockapi.io/CRUD-NAVYA";
  useEffect(() => {
    Axios.get(URL).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  const deletetherecord = (id) => {
    if (window.confirm("R u sure u want to delete")) {
      Axios.delete(
        `https://64aa687d0c6d844abede6bd8.mockapi.io/CRUD-NAVYA/${id}`
      )
        .then((res) => {
          alert("Record deleted successfully");
          // navigate("/read");
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    }
  };

  const updaterecord = (id, username, password) => {
    // navigate("/update");
    localStorage.setItem("id", id);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };
  return (
    <>
      <div className="container">
        <table className="table table-bordered border border-success w-50 mx-auto">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Password</th>
            <th>Operations</th>
          </tr>
          {data.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <button
                    className="btn btn-danger mx-lg-2"
                    onClick={() => deletetherecord(item.id)}
                  >
                    Delete
                  </button>
                  <Link to="/update">
                    <button
                      className="btn btn-success mx-lg-2"
                      onClick={() =>
                        updaterecord(item.id, item.username, item.password)
                      }
                    >
                      Edit
                    </button>
                  </Link>
                </tr>
              </>
            );
          })}
        </table>
      </div>
      <div className="container">
        <Link to="/create">
          <button className="btn btn-info">Back</button>
        </Link>
      </div>
    </>
  );
}

export default Read;
