import { Link, useLocation } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

export default function Navbar() {
  const location = useLocation();

  const isHomePage = location.pathname ==="/"
  return (
    <div className={`navbar ${isHomePage?"bg-[#9538E2] rounded-t-xl text-white":"bg-base-100"} `}>
      <div className="navbar-start">
        
        <Link to="/" className="btn btn-ghost text-xl">Gadget&apos;s Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="bg-white text-black border rounded-full"><CiShoppingCart /></a>
        <a className="bg-white text-black border rounded-full"><CiHeart /></a>
      </div>
    </div>
  );
}
