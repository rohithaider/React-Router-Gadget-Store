import { Helmet } from "react-helmet-async";

import WishListCard from "../components/WishListCard";
import { useWishlist } from "../context/WishListContext";

export default function WishListPage(){
    const{wishlistItems} = useWishlist()
    return (
       <div>
         <Helmet>
        <title>Wishlist</title>
        <link rel="icon" type="image/png" href="/public/assets/favicon-16x16.png" />
      </Helmet>
         <div>
        {wishlistItems.map((item) => (
          <WishListCard key={crypto.randomUUID()} item={item} />
        ))}
      </div>
       </div>
    );
}