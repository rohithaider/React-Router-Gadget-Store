import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishListContext";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet-async";

export default function DetailsPage() {
  const { product_id } = useParams();
  const allData = useLoaderData();
  const [data, setData] = useState({});
  const { addToCart } = useCart();
  const { wishlistItems, addToWishlist } = useWishlist();
  const [isPressed, setIsPress] = useState(false);
  

  console.log(wishlistItems);

  useEffect(() => {
    const find = [...allData].find((item) => item.product_id == product_id);
    setData(find);
  }, [allData, product_id]);

  // This will help to determine the star rating
  const rating = data.rating || 0;

  function handleWishList() {
    addToWishlist(data);
    setIsPress(true);
  }

  function handleCart(){
    addToCart(data);
    

  }

  return (
    <div>
      <Helmet>
        <title>Details</title>
        <link rel="icon" type="image/png" href="/public/assets/favicon-16x16.png" />
      </Helmet>
      <Toaster />
      <div className="hero bg-[#9538E2] min-h-96 rounded-b-xl relative s">
        <div className="hero-content text-center text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold ">Product Details</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative bottom-20  p-3 border rounded-xl w-6/12">
          <div className="hero bg-white ">
            <div className="hero-content flex-col lg:flex-row ">
              <img
                src={data.product_image}
                className="max-w-xs rounded-lg shadow-2xl"
                alt="Product"
              />
              <div className="">
                <h1 className="text-xl font-bold ">{data.product_title}</h1>
                <h1 className="text-lg font-bold ">Price: ${data.price}</h1>
                <h1 className="text-center mt-2 mb-2 w-20 border border-green-400 rounded-2xl text-green-600 bg-green-100">
                  {data.availability ? "in-stock" : ""}
                </h1>
                <h1 className="text-sm ">{data.description}</h1>
                <div className="py-6">
                  <p className="font-bold">Specifications:</p>
                  <ul>
                    <li>{data.specification}</li>
                  </ul>
                </div>
                <div className="flex items-center">
                  <h1 className="font-bold">Rating </h1>
                  <CiStar className="text-yellow-700" />
                </div>
                <div className="flex items-center">
                  <div className="rating rating-sm">
                    {[...Array(5)].map((_, index) => (
                      <input
                        key={index}
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                        checked={index < rating}
                        readOnly
                      />
                    ))}
                  </div>
                  <h1>{rating}</h1>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div onClick={handleCart}  className="flex items-center bg-[#9538E2] text-white p-2 font-bold rounded-2xl btn ">
                    <button className="  ">
                      Add To Cart
                    </button>
                    <CiShoppingCart />
                  </div>
                  <button
                    onClick={handleWishList}
                    disabled={isPressed}
                    className={`bg-white text-black border rounded-full text-2xl btn ${
                      isPressed ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <CiHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
