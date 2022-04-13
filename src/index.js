import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filter-provider";
import { ProductProvider } from "./context/product-provider";
import { CategoryProvider } from "./context/category-provider";
import { WishlistProvider } from "./context/wishlist-provider";
import { CartProvider } from "./context/cart-provider";
// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
        <CategoryProvider>
          <ProductProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </ProductProvider>
        </CategoryProvider>
      </WishlistProvider>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
