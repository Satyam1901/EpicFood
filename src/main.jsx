import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Epicteam from "./componets/Epicteam.jsx";
import Contact from "./componets/Contact.jsx";
import Offers from "./componets/Offers.jsx";
import Help from "./componets/Help.jsx";
import Error from "./componets/Error.jsx";
import Main from "./componets/Main.jsx";
import RestaurantMenu from "./componets/RestaurantMenu.jsx";
import Searchfilter from "./componets/Searchfilter.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/epicteam",
        element: <Epicteam />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/searchfilter",
        element: <Searchfilter />,
      },
      {
        path: "/resturantmenu/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
