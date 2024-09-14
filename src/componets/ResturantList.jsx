import  { useEffect, useState } from 'react'
import { MENU_List } from '../utils/constants'
import RestaurantCatagory from './RestaurantCatagory';

function ResturantList() {

  const [resdata, setResData] = useState("");
const menuitem = async () =>{
    const itemlist = await fetch(MENU_List)
    const json = await itemlist.json();
    setResData(json)
  
}

const catogories= resdata?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"])

 useEffect(() => {
    menuitem();
 },[])

  return (
    <div>
     {catogories?.map((category, index) => (
        <RestaurantCatagory key={index} category={category?.card?.card} />
      ))}
    </div>
  )
}

export default ResturantList