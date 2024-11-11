import { Link, NavLink, useLocation } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

export default function Navbar() {
  const location = useLocation();

  const isHomePage = location.pathname ==="/"
  return (
    <div className={`navbar ${isHomePage?"bg-[#9538E2] rounded-t-xl text-white mt-2":"bg-base-100 "} `}>
      <div className="navbar-start">
        
        <Link to="/" className="btn btn-ghost text-xl">Gadget&apos;s Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to='/' className={({isActive})=>`${isActive?"tab-active":""}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="help">Policy</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <Link to="dashboard/cart" className="bg-white text-black border rounded-full text-xl"><CiShoppingCart /></Link>
        <Link to="dashboard/wishlist" className="bg-white text-black border rounded-full text-xl"><CiHeart /></Link>
      </div>
    </div>
  );
}
