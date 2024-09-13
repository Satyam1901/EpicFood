import { useState } from "react";

function Searchfilter() {
  const [searchFilter, setSearchFilter] = useState([]);

  const handleInputChange = (event) => {
    setSearchFilter(event.target.value);
  };

  const handleSearchClick = () => {
    // Implement your search logic here


    console.log("Search clicked! Search term:", searchFilter); // Placeholder for now
  };

  return (
    <div className="mb-3 xl:w-96 flex items-center">
      <input
        type="text"
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search..."
        value={searchFilter}
        onChange={handleInputChange}
      />
      <button
        type="button"
        className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
}

export default Searchfilter;
