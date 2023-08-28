import React from "react";
import "./Home.css";
function Home(props)
{
    return(
        <>
        <div className="container-fluid bg-1 text-center">
  <h3>Who Am I?</h3>
  <h2>{props.title}</h2>
  <img style={{width:"800px"}} src={require("../assets/kingfisher.jpg")} className="img-circle" alt="Bird" />
  <h3 className="m-b-0" style={{marginBottom:"0"}}>I'm an adventurer</h3>
</div>

<div className="container-fluid bg-2 text-center">
  <h3>What Am I?</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div className="container-fluid bg-3 text-center">
  <h3>Where To Find Me?</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
</>
    );
}
export default Home;