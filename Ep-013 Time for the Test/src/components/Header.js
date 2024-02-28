import React,{lazy} from "react";
import { useState ,useContext} from "react";
import {Link} from "react-router-dom"
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from '../utils/UserContext';
import { useSelector } from "react-redux";


const Header = () => {

  const [btnNameReact,setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="log-container">
        <img className="w-28" src={LOGO_URL} />
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
          <li className="px-4 font-bold text-xl">
            <Link className="px-4" to="/Cart">Cart - ({cartItems.length} items)</Link>
          </li>
          
          
          <button 
            className="login" 
            onClick={()=> {
              btnNameReact == "login" 
              ? setBtnNameReact("Logout") 
              : setBtnNameReact("login")
            }}>
            {btnNameReact}
          </button>

          <li className="px-4 font-bold">
            <Link className="links">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
