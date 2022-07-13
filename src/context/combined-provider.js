import React from "react";
import {
  CartProvider,
  AuthProvider,
  CategoryProvider,
  FilterProvider,
  ProductProvider,
  WishlistProvider
} from "../context";

const CombinedProvider = ({ children }) => {
  return (
    <ProductProvider>
      <CategoryProvider>
        <FilterProvider>
          <AuthProvider>
            <WishlistProvider>
              <CartProvider>{children}</CartProvider>
            </WishlistProvider>
          </AuthProvider>
        </FilterProvider>
      </CategoryProvider>
    </ProductProvider>
  );
};
export { CombinedProvider };
