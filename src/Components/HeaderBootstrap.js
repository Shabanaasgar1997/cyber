import React from "react";
import { Link } from "react-router-dom";
function HeaderBootstrap()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="headerlogo">
                <img alt="Logo" style={{width: "185px",float:"left",paddingTop: "5px", paddingBottom: "5px",maxWidth: "100%"}} src="https://cdn.shopify.com/s/files/1/0559/7531/3592/files/Gusto_Logo_04baf998-1fb3-4d82-9411-9997b9adf669.jpg?v=1673032640&width=185" />
                </div>
                
  {/*<button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>*/}

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/products">Products</Link>
      </li>
      <li className="nav-item dropdown">
      <Link className="nav-link" to="/filter">Filter</Link>
      </li>
    </ul>
  </div>
</nav>
    );
}
export default HeaderBootstrap;