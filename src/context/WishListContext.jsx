import { createContext, useState, useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    const itemExists = wishlistItems.some(wishlistItem => wishlistItem.product_id === item.product_id);
    
    if (itemExists) {
      toast.error("This product is already in the wishlist!");
      return; 
    }

    setWishlistItems((prevItems) => [...prevItems, item]);
    toast.success("Product added to wishlist!");
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.product_id !== id));
    toast.error("Product has been removed from the wishlist!");
  };

  const sortWishlistByPriceDesc = () => {
    setWishlistItems((prevItems) => 
      [...prevItems].sort((a, b) => b.price - a.price)
    );
    toast.success("Sorted wishlist by price (descending)");
  };

  const resetWishlist = () => {
    setWishlistItems([]);
    toast.success("Wishlist has been reset!");
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, sortWishlistByPriceDesc, resetWishlist }}>
      <Toaster />
      {children}
    </WishlistContext.Provider>
  );
};
