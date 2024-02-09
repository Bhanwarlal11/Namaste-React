import { useState } from "react";
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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
