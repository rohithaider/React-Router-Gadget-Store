import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishListContext";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
    <RouterProvider router={router} />
    </WishlistProvider>
    </CartProvider>
  </StrictMode>
);
