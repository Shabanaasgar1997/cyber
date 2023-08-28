import React, { useState } from "react";
import Navya from "./Users.json";

function UsersPrint() {
  //   const [data, setData] = useState();
  return (
    <>
      <h1>Hey this is the dynamic datas</h1>

      {Navya.map((kohli) => {
        return (
          <>
            <table className="table bg-danger">
              <tr>
                <td>{kohli.id}</td>
                <td>{kohli.name}</td>
                <td>{kohli.username}</td>
                <td>{kohli.email}</td>
                <td>
                  <img src={kohli.img} alt="" />
                </td>
              </tr>
            </table>
          </>
        );
      })}
    </>
  );
}

export default UsersPrint;
