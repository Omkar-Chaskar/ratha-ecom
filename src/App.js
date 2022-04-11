import "./styles.css";
import Navigation from "./Components/Navigation";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import WishList from "./pages/WishList";
import MyCart from "./pages/MyCart";
import Mockman from "./pages/Mockman";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ProductPage" element={<ProductPage />} />
        <Route path="WishList" element={<WishList />} />
        <Route path="MyCart" element={<MyCart />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}
