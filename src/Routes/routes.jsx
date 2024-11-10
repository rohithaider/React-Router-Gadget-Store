import { createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "../pages/Homepage";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import GadgetCards from "../components/GadgetCards";
import DetailsPage from '../pages/DetailsPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    
    children:[
      {
        path:"/",
        element: <Homepage/>,
        loader: ()=>fetch('/assets/categories.json'),
        children:[
          {
            path:"/",
            element:<GadgetCards/>,
            loader: ()=>fetch('/assets/gadgets.json'),
          },
          {
            path:"category/:category",
            element:<GadgetCards/>,
            loader: ()=>fetch('/assets/gadgets.json'),
          }
        ]

      },
      {
        path:"statistics",
        element:<Statistics/>
      },
      {
        path:"dashboard",
        element:<Dashboard/>
      },
      {
        path:"gadget/:product_id",
        element:<DetailsPage/>,
        loader: ()=>fetch('/assets/gadgets.json'),

      },

    ]
  },
]);

export {router}