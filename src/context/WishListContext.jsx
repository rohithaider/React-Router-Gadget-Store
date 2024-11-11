import { createContext, useState, useContext } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => [...prevItems, item]);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
