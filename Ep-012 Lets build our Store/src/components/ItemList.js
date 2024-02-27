import { CDN_URL } from "../utils/constants";

const ItemList = ({ items , dummy }) => {
    // console.log(items)



    return (
    <div>
    {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span className="font-semibold">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs mt-1 font-serif text-gray-500">{item.card.info.description}</p>
            </div>
          </div>

          <div className="w-2/12  relative">
            <div>
                <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-lg "/>
            </div>
            <div className="absolute bottom-0">
                <button className="px-6 py-0 mx-4 font-bold text-sm rounded-lg bg-white text-green-800  shadow-lg">
                    ADD+
                </button>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default ItemList;
