/* eslint-disable react/prop-types */
import { CDN_URL } from "../utils/constants";

function ResturantItemsList({ items }) {
    return (
      <>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="flex justify-between border-b border-gray-200 py-6 px-6 transition duration-300 ease-in-out hover:bg-gray-50"
          >
            <div className="flex-1">
            <div className="text-lg font-semibold text-gray-800">
              {item.card.info.name}
            </div>
            <div className="text-lg text-green-600 font-medium mt-2">
              ₹{item.card.info.price ? item.card.info.price / 100 : 250}
            </div>
            <div className="text-sm text-gray-600 mt-2 italic leading-relaxed">
              {item.card.info.description}
            </div>
          </div>
            <div className="ml-6 w-36 h-36 rounded-lg overflow-hidden">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </>
    );
  }
  
  export default ResturantItemsList;
  