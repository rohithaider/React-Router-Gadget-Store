import { useLocation } from "react-router-dom";

export default function Banner(){
    const location = useLocation();
    const isHomePage = location.pathname ==="/"
    return (
        <div className="hero bg-[#9538E2] min-h-96 rounded-b-xl">
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
            {isHomePage && <button className="btn btn-primary rounded-2xl bg-white text-[#9538E2]">Shop Now</button>}
          </div>
        </div>
      </div>
    );
}