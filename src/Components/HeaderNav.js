import React from "react";
import "./HeaderNav.css";
import { FaBeer } from "react-icons/fa";
class HeaderNav extends React.Component{
    render()
    {
        return(
            <div className="headerdiv">
                <div className="headerlogo">
                <img alt="Logo" style={{width: "185px",float:"left",paddingTop: "5px", paddingBottom: "5px",maxWidth: "100%"}} src="https://cdn.shopify.com/s/files/1/0559/7531/3592/files/Gusto_Logo_04baf998-1fb3-4d82-9411-9997b9adf669.jpg?v=1673032640&width=185" />
                </div>
                
                <div className="menudiv">
                <ul className="menuul">
                    <li className="menuli"> <a className="menulia" href="/">Women</a></li>
                    <li className="menuli"> <a className="menulia" href="/">Best Sellers</a></li>                    
                    <li className="menuli"> <a className="menulia" href="/">Combos</a></li>
                    <li className="menuli"> <a className="menulia" href="/">Sale</a></li>
                    <li className="menuli"> <a className="menulia" href="/">Gusto Jewelry</a></li>
                </ul>
                </div>

                <a className="seachdiv" href="/search">Search</a>
                <FaBeer />
            </div>
        )
    }
}
export default HeaderNav;