/* eslint-disable react/prop-types */

function RestaurantCatagory({category}) {
  return (
    <div className=" p-4 bg-gray-100 flex justify-between border-y-4">
        <span className="ml-0">{category.title}</span>
        <span className="">⬇️</span>

       
    </div>
  )
}

export default RestaurantCatagory