/* eslint-disable react/prop-types */
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchRestaurantData from "../utils/useFetchRestaurantData";
import ResturantList from "./ResturantList";

/**
 * This component is used to render the restaurant menu based on the restaurant
 * ID provided in the URL parameters. If the restaurant data is not available,
 * it renders a shimmer effect to indicate that the data is loading.
 *
 * @return {JSX.Element} The rendered restaurant menu component.
 */
function RestaurantMenu() {
  const { resId } = useParams();
  const restaurantData = useFetchRestaurantData(resId);

  if (!restaurantData) {
    return (
      <div className="flex justify-center p-5">
        {[...Array(6)].map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    );
  }

  const {
    name,
    costForTwoMessage,
    cuisines,
    areaName,
    totalRatings,
  } = restaurantData.data.cards[2].card.card.info;

  return (
    <div className="flex w-6/12 justify-center m-auto">
      <div className="w-full text-center">
        <h3 className="text-3xl text-bold font-bold text-gray-800 text-left p-4">
          {name}
        </h3>
        <div className="border-4 p-2">
          <p className="text-pretty text-justify p-2 text-orange-900 font-semibold">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
          <p className="text-pretty text-justify p-2 text-sm">
            Total Ratings: {!totalRatings? 0 : totalRatings}
          </p>
          <p className="text-pretty text-justify p-2 text-sm">{areaName}</p>
        </div>
        <ResturantList />
      </div>
    </div>
  );
}

export default RestaurantMenu;
