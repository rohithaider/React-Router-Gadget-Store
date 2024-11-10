import { Link } from "react-router-dom";

export default function Card({ gadget }) {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = gadget || {};

  return <div className="card bg-base-100 w-80 shadow-xl">
  <figure className="">
    <img
    className="w-[200px] h-[182px]"
      src={product_image}
      alt="Shoes" />

  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <h2 className="card-title">${price}</h2>
    <div className="card-actions justify-start">
      <Link to={`/gadget/${product_id}`}><button className="btn btn-outline btn-primary rounded-2xl">View Details</button></Link>
    </div>
  </div>
</div>;
}
