import { Link, useLocation, useLoaderData, Outlet } from "react-router-dom";

import Heroimage from "../components/Heroimage";
import Categories from "../components/Categories";
export default function Homepage() {
  const categories = useLoaderData();

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className="hero bg-[#9538E2] min-h-96 rounded-b-xl relative">
        <div className="hero-content text-center text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold ">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>

            {isHomePage && (
              <Link to="dashboard">
                <button className="btn rounded-2xl bg-white text-[#9538E2] mb-10">
                  Shop Now
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Heroimage />
      <div>
        <h1 className="text-center font-bold text-4xl mb-6">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      <div className="flex gap-3">
        <div className="w-2/12">
          <Categories categories={categories} />
        </div>
        <div className="w-10/12">
          <Outlet />
        </div>
      </div>
    </>
  );
}
