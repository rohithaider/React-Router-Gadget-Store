import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "../pages/Homepage";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import GadgetCards from "../components/GadgetCards";
import DetailsPage from "../pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: async () => {
          const response = await fetch("../public/categories.json");
          const categories = await response.json();
          return categories; // Return parsed data
        },
        children: [
          {
            path: "/",
            element: <GadgetCards />,
            loader: async () => {
              const response = await fetch("../public/gadgets.json");
              const gadgets = await response.json();
              return gadgets; // Return parsed data
            },
          },
          {
            path: "category/:category",
            element: <GadgetCards />,
            loader: async () => {
              const response = await fetch("../public/gadgets.json");
              const gadgets = await response.json();
              return gadgets; // Return parsed data
            },
          },
        ],
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "gadget/:product_id",
        element: <DetailsPage />,
        loader: async () => {
          const response = await fetch("../public/categories.json");
          const gadgets = await response.json();
          return gadgets; // Return parsed data
        },
      },
    ],
  },
]);

export { router };
