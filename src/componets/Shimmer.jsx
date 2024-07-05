function Shimmer() {
  return (
    <div className="mt-6 w-full max-w-[26rem] shadow-lg rounded-lg overflow-hidden shimmer-card m-6">
      <div className="relative h-56 shimmer bg-gray-200 rounded-t-lg">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      </div>
      <div className="p-6">
        <div
          className="flex
    jsx
    Copy code
            items-center justify-between mb-3"
        >
          <div className="h-5 bg-gray-300 shimmer rounded w-1/2 "></div>
          <div className="flex items-center gap-1.5 ">
            <div className="h-5 w-5 bg-yellow-300 shimmer rounded-full"></div>
            <div className="h-5 bg-gray-300 shimmer rounded w-8"></div>
          </div>
        </div>
        <div className="h-4 bg-gray-300 shimmer rounded mb-2"></div>
        <div className="h-4 bg-gray-300 shimmer rounded mb-2"></div>
        <div className="h-4 bg-gray-300 shimmer rounded"></div>
      </div>
    </div>
  );
}

export default Shimmer;
