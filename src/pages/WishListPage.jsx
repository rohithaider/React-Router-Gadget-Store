import CartCard from "../components/CartCard";
import WishListCard from "../components/WishListCard";
import { useWishlist } from "../context/WishListContext";

export default function WishListPage(){
    const{wishlistItems} = useWishlist()
    return (
        <div>
        {wishlistItems.map((item) => (
          <WishListCard key={crypto.randomUUID()} item={item} />
        ))}
      </div>
    );
}