
import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useFetchRestaurantData = (resId) => {

  const [menuitem, setmenuitem] = useState(null)
 
useEffect(() =>{
 MenuItem();
  },[])

  const MenuItem = async () => {
    const restaurantData = await fetch(MENU_API + resId);
    const jsonResData = await restaurantData.json();
    setmenuitem(jsonResData);
  };

 
  return menuitem;
}

export default useFetchRestaurantData