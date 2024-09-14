/* eslint-disable react/prop-types */
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Card } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import useFetchRestaurantData from "../utils/useFetchRestaurantData";
import ResturantList from "./ResturantList";



function RestaurantMenu() {
  const { resId } = useParams();

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
    costForTwoMessage = "",
    cuisines = [],
    areaName,
    totalRatings

  } = menuitem?.data?.cards?.[2]?.card?.card?.info || {};

  console.log(menuitem?.data?.cards?.[2]?.card?.card?.info)



  return (
    <>
    <div className="flex w-6/12 justify-center m-auto">
  <div className="w-full text-center">
    <h3 className="text-3xl text-bold font-bold text-gray-800 text-left p-4">{name}</h3>
    <div className="border-4 p-2">
    <p className="text-pretty text-justify p-2 text-orange-900 font-semibold">{cuisines.join(", ")} - {costForTwoMessage}</p>
    <p className="text-pretty text-justify p-2 text-sm">Total Ratings: {totalRatings}</p>
    <p className="text-pretty text-justify p-2 text-sm">{areaName}</p>
    </div>
    <ResturantList/>
  </div>
     
    </div>
      
      </>
  );
}

export default RestaurantMenu;
