import { FaSortAmountDown } from "react-icons/fa";
export default function CartPage() {
  return (
    <div className="mt-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold">Cart</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="font-bold">Total Cost: $99</h1>

          <div className="btn btn-outline flex items-center gap-2 border border-purple-600 rounded-3xl text-purple-600 p-2 ">
            <button>Sort by Price</button>
            <FaSortAmountDown />
          </div>
          <button className="bg-purple-600 text-white border rounded-3xl p-2 btn btn-outline ">Purchase</button>
        </div>
      </div>
    </div>
  );
}
