import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router";
import routes from "./routes/Routes";
import ProductProvider from "./context/ProductProvider";
import { CartProvider } from "./context/CartProvider";
import ScrollToTop from "./components/ScrollToTop";
import AuthProvider from "./context/AuthProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <Routes>{routes}</Routes>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
