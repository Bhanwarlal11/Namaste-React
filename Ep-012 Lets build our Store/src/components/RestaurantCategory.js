import ItemList from "./ItemList";


const RestaurantCategory = ({data ,showItems, setShowIndex, dummy}) => {

    console.log(data);

  // //now i did not want to restraurant category has own power
  // const [showItems,setShowItems] = useState(false);
  console.log(data)
  const handleClick = ()=>{
    setShowIndex();
  }



  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div 
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian Boday */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
