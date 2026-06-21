import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/Product/ProductDetails";
import Cart from "../pages/Cart/Cart";
import EyeTest from "../pages/EyeTest/EyeTest";
import Contact from "../pages/Contact/Contact";
import Brands from "../pages/Brands/Brands";
import About from "../pages/About/About";
import Lenses from "../pages/Lenses/Lenses";
import ContactLenses from "../pages/ContactLenses/ContactLenses";
import Wishlist from "../pages/Wishlist/Wishlist";
import Dashboard from "../pages/Dashboard/Dashboard";
import Orders from "../pages/Orders/Orders";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />
      <Route
        path="/cart"
        element={<Cart />}
      />
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/checkout"
        element={<Checkout />}
      />
      <Route
        path="/eye-test"
        element={<EyeTest />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
        path="/brands"
        element={<Brands />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/lenses"
        element={<Lenses />}
      />
      <Route
        path="/contact-lenses"
        element={<ContactLenses />}
      />
      <Route
        path="/wishlist"
        element={<Wishlist />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
      <Route
        path="/orders"
        element={<Orders />}
      />
    </Routes>
  );
};

export default AppRoutes;