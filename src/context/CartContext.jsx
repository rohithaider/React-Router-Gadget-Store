import { createContext, useState, useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const itemExists = cartItems.some(cartItem => cartItem.product_id === item.product_id);
    
    if (itemExists) {
      toast.error("This product is already in the cart!");
      return; 
    }

    setCartItems((prevItems) => [...prevItems, item]);
    toast.success("Product added to cart!");
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product_id !== id));
    toast.error("Product has been removed from the cart!");
  };


  const sortCartByPriceDesc = () => {
    setCartItems((prevItems) => 
      [...prevItems].sort((a, b) => b.price - a.price)
    );
    toast.success("Sorted by price (descending)"); 
  };

  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart,removeFromCart,sortCartByPriceDesc,resetCart}}>
      {children}
    </CartContext.Provider>
  );
};
