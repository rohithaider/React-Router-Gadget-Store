import { MdOutlineCancel } from "react-icons/md";
import { useWishlist } from "../context/WishListContext";
import { useCart } from "../context/CartContext";
export default function WishListCard({item}){
    const {removeFromWishlist} = useWishlist()
    const{addToCart} = useCart();
    
    
    return (
    <div className="flex justify-between border mb-2 p-2 mt-2  rounded-lg">
        <div className="w-20">
        <img src={item.product_image} alt="" />
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
        <h1 className="font-bold">{item.product_title}</h1>
        <h1 className="font-thin text-sm">{item.description}</h1>
        <h1>Price: ${item.price}</h1>
        <button onClick={()=>addToCart(item)} className="btn btn-outline bg-purple-600 text-white border rounded-3xl">Add to Cart</button>
        </div>
        <div className="flex items-center text-red-600 text-xl">
        <button onClick={()=>removeFromWishlist(item.product_id)}  className="btn text-red-600 text-xl bg-white"><MdOutlineCancel  /></button>

        </div>
    </div>
    );
}