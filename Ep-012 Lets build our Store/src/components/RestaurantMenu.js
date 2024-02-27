import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestaurantCategory from "./RestaurantCategory.js";



const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestuarantMenu(resId);

  const dummy = 'Dummy Data';

  const [showIndex,setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  //destructuring & optional Chaining
  //->menu path
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
    // console.log(resInfo.cards[2].card.card.info.name);

  //->menu list item path

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories[0])
    
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
     </p>

      {/* category accordian */}
      {/* //controlled component */}
      {categories.map((category,index)=>{
        <RestaurantCategory
          key={category?.card?.card?.title}
          data = {category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
          dummy={dummy}
        />
      })}



    </div>
  );
};


export default RestaurantMenu;
