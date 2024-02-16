import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // destructoring
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="w-60 h-44 rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-l">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

//higher order component

//input - RestaurantCard ==> restaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}


export default RestaurantCard;
