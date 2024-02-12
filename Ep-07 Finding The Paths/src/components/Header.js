import { useState } from "react";
import {Link} from "react-router-dom"
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  const [btnNameReact,setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="log-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button 
            className="login" 
            onClick={()=> {
              btnNameReact == "login" 
              ? setBtnNameReact("Logout") 
              : setBtnNameReact("login")
            }}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
