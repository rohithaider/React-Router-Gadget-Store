import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";

export default function DetailsPage() {
  const { product_id } = useParams();
  const allData = useLoaderData();
  const [data, setData] = useState({});

  useEffect(() => {
    const find = [...allData].find((item) => item.product_id == product_id);
    setData(find);
  }, [allData, product_id]);

  return (
    <div>
      <div className="hero bg-[#9538E2] min-h-96 rounded-b-xl relative">
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
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={data.product_image}
                className="max-w-xs rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-xl font-bold">{data.product_title}</h1>
                <h1 className="text-lg font-bold">Price: ${data.price}</h1>
                <h1 className="text-center w-20 border border-green-400 rounded-2xl text-green-600 bg-green-100">
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
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <h1>{data.rating}</h1>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
