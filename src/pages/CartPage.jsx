import { FaSortAmountDown } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import CartCard from "../components/CartCard";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { MdCelebration } from "react-icons/md";
import { Helmet } from "react-helmet-async";

export default function CartPage() {
  const navigate = useNavigate();
  const { cartItems, sortCartByPriceDesc, resetCart } = useCart();
  const modalRef = useRef(null); 

  const totalPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  function handlePurchase() {
    modalRef.current.showModal();
  }

  function confirmPurchase() {
    resetCart();
    navigate("/");
  }

  return (
    <>
    <Helmet>
        <title>Cart</title>
        <link rel="icon" type="image/png" href="/public/assets/favicon-16x16.png" />
      </Helmet>
      <div className="mt-2">
        <Toaster />
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold">Cart</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="font-bold">Total Cost: ${totalPrice}</h1>

            <div onClick={sortCartByPriceDesc} className="btn btn-outline flex items-center gap-2 border border-purple-600 rounded-3xl text-purple-600 p-2 ">
              <button >Sort by Price</button>
              <FaSortAmountDown />
            </div>
            <button
              disabled={cartItems.length === 0}
              onClick={handlePurchase}
              className="bg-purple-600 text-white border rounded-3xl p-2 btn btn-outline "
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

      <div>
        {cartItems.map((item) => (
          <CartCard key={crypto.randomUUID()} item={item} />
        ))}
      </div>

      {/* Modal dialog */}
      <dialog ref={modalRef} id="my_modal_3" className="modal">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={confirmPurchase}>
            ✕
          </button>
          <div className="flex items-center flex-col">
          <h3 className="font-bold text-lg">CONGRATULATION!!</h3>
          <p className="py-4">Congratulations on your purchase!</p>
          <MdCelebration className="text-3xl" />
          </div>
          <div className="modal-action">
            
          </div>
        </div>
      </dialog>
    </>
  );
}
