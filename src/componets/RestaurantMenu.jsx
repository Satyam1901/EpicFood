/* eslint-disable react/prop-types */
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Card } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import useFetchRestaurantData from "../utils/useFetchRestaurantData";

function ItemCard({ item, isExpanded, onClick }) {
  return (
    <li
      className="bg-gray-100 bg-opacity-90 p-4 mb-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <p className="text-lg font-semibold text-gray-900">
        {item.card.info.name}
      </p>
      {isExpanded && (
        <div className="mt-2">
          <p className="text-sm text-gray-700">{item.card.info.description}</p>
          <p className="font-bold mt-2 text-gray-900">
            Price: Rs.{item.card.info.price / 100}
          </p>
        </div>
      )}
    </li>
  );
}

function RestaurantMenu() {
  const { resId } = useParams();
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);

  const menuitem = useFetchRestaurantData(resId);

  if (menuitem === null) {
    return (
      <div className="flex justify-center p-5">
        {[...Array(6)].map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    );
  }

  const {
    name = "",
    city = "",
    areaName = "",
    costForTwoMessage = "",
    cuisines = [],
    totalRatings = 0,
  } = menuitem?.data?.cards?.[2]?.card?.card?.info || {};

  const itemsCard =
    menuitem?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards || [];

  const handleExpandClick = (index) => {
    setExpandedItemIndex(expandedItemIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center p-5 min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <Card className="w-full max-w-[26rem] shadow-lg rounded-lg p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-extrabold mb-4 text-gray-900">{name}</h1>
        <p className="text-lg mb-2 text-gray-700">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <p className="text-md mb-2 text-gray-600">
          {city}, {areaName}
        </p>
        <p className="text-md mb-4 text-gray-600">
          Total Ratings: {totalRatings}
        </p>
        <ul>
          {itemsCard.map((item, index) => (
            <ItemCard
              key={index}
              item={item}
              isExpanded={expandedItemIndex === index}
              onClick={() => handleExpandClick(index)}
            />
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default RestaurantMenu;
