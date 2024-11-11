import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className=" bg-gray-100">
      <div className="container mx-auto">
      <Navbar />
      </div>
      <div className="container mx-auto">
      <Outlet />
      </div>
      
      <Footer/>
    </div>
  );
}
