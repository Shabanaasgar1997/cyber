import React from "react";
import mstyles from "./filter.module.css";
import styled from "styled-components";
import prodimg1 from "../assets/DSC_3164.jpg";
function Products({cost,color})
{    
    const Productimg = styled.img`
    width: 250px;
    margin:20px;
    border:1px solid gray;
  `;
    /*const proStyles = {
        textAlign: "justify",
        color: "red",
        fontSize: "1em",
      };*/
    
return(
  <>
<div className={mstyles.filterdiv} >
   
    <h4 className="text-primary">Products List</h4>
    <div>
      <b>Color: {color}</b><br/>
      <b>Cost: {cost}</b> <br/>
      <Productimg style={{width:"250px"}} src={prodimg1} alt="proimg1" />
      <Productimg src={require("../assets/IMG_9160.jpg")} alt="proimg1" />
      <Productimg alt="productimg1" src="https://cdn.shopify.com/s/files/1/0559/7531/3592/products/IMG_9160_b069eac0-a7ff-4212-ae01-1dfc8b8a0760.jpg?v=1654199189&width=500" />
    <Productimg alt="productimg1" src="https://cdn.shopify.com/s/files/1/0559/7531/3592/products/DSC_3118.jpg?v=1678768188&width=600" />
    <Productimg alt="productimg1" src="https://cdn.shopify.com/s/files/1/0559/7531/3592/files/DSC_3588.jpg?v=1685470185&width=500" />
    </div>
</div>
</>
);

}
export default Products;