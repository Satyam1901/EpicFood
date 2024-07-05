import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
        <h1 className="text-6xl font-bold text-red-500 mt-4">404</h1>
        <p className="text-gray-500 mt-4 mb-8">
          Oops! We can not seem to find the page you are looking for.
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={goHome}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

export default Error;
