import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishListContext";
import { HelmetProvider } from "react-helmet-async";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <CartProvider>
      <WishlistProvider>
    <RouterProvider router={router} />
    </WishlistProvider>
    </CartProvider>
    </HelmetProvider>
  </StrictMode>
);
