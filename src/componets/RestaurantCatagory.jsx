import ResturantItemsList from "./ResturantItemsList";

/* eslint-disable react/prop-types */
function RestaurantCatagory({ category }) {

  console.log(category)

  if (!category || !category.title || !category.itemCards) {
    return (
      <>
      {/* <div className="p-4 bg-gray-50  border-y-4">
       <div className="flex justify-between">
      <span className="ml-0 font-bold text-lg ">
        {category.title} 
      </span>
      <span className="text-gray-700">&#9660;</span>
      </div>
      </div> */}
      </>
    )
  }
  return (
    <div className="p-4 bg-gray-50  border-y-4">

      <div className="flex justify-between">
      <span className="ml-0 font-bold text-lg ">
        {category.title} ({category.itemCards.length})
      </span>
      <span className="text-gray-700">&#9660;</span>
      </div>

      <ResturantItemsList items = {category.itemCards}/>
   
    </div>
  );
}

export default RestaurantCatagory;
