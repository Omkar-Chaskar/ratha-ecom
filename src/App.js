import "./styles.css";
import {Navigation} from "./Components/index";
import {Home, ProductPage, Mockman, MyCart, WishList, Login, Signup} from "./pages/index";

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
