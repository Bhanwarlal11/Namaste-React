import React from 'react';
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from '../utils/useRestuarantMenu';

const RestaurantMenu = () => {
  
  const { resId } = useParams();
  const resInfo = useRestuarantMenu(resId);


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
