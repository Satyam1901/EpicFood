import { Card, CardBody, Typography } from "@material-tailwind/react";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import Searchfilter from "./Searchfilter";
import { Link } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

function ProductCard() {
  const [list, setList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        const newData =
          json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
        setList(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (list === null) {
    return (
      <div className="flex flex-wrap gap-4">
        {[...Array(12)].map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    );
  }

  return (
    <>
      <Searchfilter />
      <div className="flex flex-wrap gap-4 justify-center w-full">
        {list.map((restaurant) => (
          <Link
            to={"/resturantmenu/" + restaurant.info.id}
            key={restaurant.info.id}
            className="w-full max-w-[26rem] flex justify-center"
          >
            <div className="w-full max-w-[26rem]">
              <Card className="w-full h-full flex flex-col justify-between shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
                    alt={restaurant.info.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Typography
                      variant="h5"
                      color="white"
                      className="font-bold text-lg"
                    >
                      {restaurant.info.name}
                    </Typography>
                  </div>
                </div>
                <CardBody className="p-4 flex flex-col justify-between">
                  <h4
                    color="blue-gray"
                    className="font-medium mb-2 overflow-hidden overflow-ellipsis"
                  >
                    {restaurant.info.cuisines.join(", ")}
                  </h4>
                  <div className="flex items-center justify-between mb-2">
                    <Typography
                      color="blue-gray"
                      className="flex items-center gap-1.5 font-normal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {restaurant.info.avgRating}
                    </Typography>
                    <Typography color="blue-gray" className="text-sm">
                      {restaurant.info.costForTwo}
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
