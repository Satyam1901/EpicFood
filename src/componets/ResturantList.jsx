import  { useEffect } from 'react'
import { MENU_List } from '../utils/constants'

function ResturantList() {
const menuitem = async () =>{
    const itemlist = await fetch(MENU_List)
    const json = await itemlist.json();
    const catogories = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"])
    console.log(catogories)
}
 


 useEffect(() => {
    menuitem();
 },[])

  return (
    <div>ResturantList</div>
  )
}

export default ResturantList