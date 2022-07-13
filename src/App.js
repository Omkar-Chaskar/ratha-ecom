import "./styles.css";
import { useEffect } from "react";
import { Navigation } from "./Components/index";
import {
  Home,
  ProductPage,
  Mockman,
  MyCart,
  WishList,
  Login,
  Signup,
  NotFound
} from "./pages/index";
import { documentTitle } from "./utils/documentTitle";
import { Routes, Route } from "react-router-dom";

export default function App() {
  useEffect(() => {
    documentTitle();
  }, []);

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
