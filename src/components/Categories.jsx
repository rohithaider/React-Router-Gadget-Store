/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function Categories({ categories }) {
  return (
  
    <div
      role="tablist"
      className="tabs tabs-boxed flex flex-col space-y-2 bg-white border items-center p-6 "
    >
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          role="tab"
          className={({isActive})=>`btn w-full rounded-2xl ${isActive?'tab-active':''}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
}
