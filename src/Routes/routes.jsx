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
        // Ensure the categories loader fetches and parses the JSON
        loader: () => fetch('/public/categories.json').then(response => response.json()),
        children: [
          {
            path: "/",
            element: <GadgetCards />,
            // Fetch and parse gadgets data
            loader: () => fetch('/public/gadgets.json').then(response => response.json()),
          },
          {
            path: "category/:category",
            element: <GadgetCards />,
            // Ensure it fetches the gadgets JSON data for each category route
            loader: () => fetch('/public/gadgets.json').then(response => response.json()),
          }
        ]
      },
      {
        path: "statistics",
        element: <Statistics />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "gadget/:product_id",
        element: <DetailsPage />,
        loader: () => fetch('/public/gadgets.json').then(response => response.json()),
      }
    ]
  },
]);

export { router };
