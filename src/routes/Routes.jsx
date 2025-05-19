import App from "../App";
import { Route } from "react-router";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import OrderCarts from "../pages/OrdferCarts/OrderCarts";
import Register from "../components/Register";
import LogIn from "../components/LogIn";
const routes = (
  <>
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<OrderCarts />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
    </Route>

  </>
);

export default routes;
