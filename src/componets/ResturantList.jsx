import  { useEffect, useState } from 'react'
import { MENU_List } from '../utils/constants'
import RestaurantCatagory from './RestaurantCatagory';

/**
 * This component renders a list of restaurant categories, where each category
 * is a separate `<RestaurantCatagory>` component.
 *
 * The component fetches the menu data from the server when mounted, and
 * stores it in the component state.
 *
 * The component renders a list of restaurant categories, where each category
 * is filtered to only include items that have a `card` property with an
 * `@type` property. The list is then sliced to exclude the first and last
 * elements, and then mapped over to render each category as a separate
 * `<RestaurantCatagory>` component.
 */
function ResturantList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(MENU_List)
      .then((res) => res.json())
      .then((data) =>
        setCategories(
          data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
            (c) => c.card?.card?.["@type"]
          )
        )
      );
  }, []);

  return (
    <div>
      {categories
      .slice(1, -1)
      .map((category, index) => (
        <RestaurantCatagory key={index} category={category.card.card} />
      ))}
    </div>
  );
}

export default ResturantList