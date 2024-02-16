import React,{lazy} from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnNameReact,setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="log-container">
        <img className="w-44" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
              online status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
          <Link to="/about">About</Link>
          </li>
          <li className="px-4">
          <Link className="px-4" to="/contact">Contact</Link>
          </li>
          <li>
          <Link className="px-4" to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
