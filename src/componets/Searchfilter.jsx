import { useState } from "react";

function Searchfilter() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search clicked! Search term:", searchTerm);
  };

  return (
    <div className="relative p-5 flex">
      <input
        type="search"
        className="block w-3/4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        type="button"
        className="w-1/4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 justify"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default Searchfilter;
