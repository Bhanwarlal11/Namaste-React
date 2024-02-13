import React from 'react';
import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  
  const [resInfo,setResInfo] = useState(null);
    const { resId } = useParams();

useEffect(() =>{
  fetchMenu();
},[]);

  

const fetchMenu = async ()=>{
    const data = await fetch(MENU_API + resId)
    const json = await data.json();
    console.log(json)
    setResInfo(json.data);
}

if(resInfo===null) return <Shimmer/>;


//destructuring & optional Chaining
//->menu path
const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
//->menu list item path
const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards)


  return(
    <div>
      
        <h1>{name}</h1>
        <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        {itemCards.map((item)=>(
          <li>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price /100 || item.card.info.defaultPrice /100} 
          </li>
        ))
        }
    </div>
  );
};
export default RestaurantMenu;
