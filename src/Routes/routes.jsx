import { createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "../pages/Homepage";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    
    children:[
      {
        path:"/",
        element: <Homepage/>

      },
      {
        path:"statistics",
        element:<Statistics/>
      },
      {
        path:"dashboard",
        element:<Dashboard/>
      },

    ]
  },
]);

export {router}