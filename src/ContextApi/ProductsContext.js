import React, { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext({
  products: null,
  setProducts: () => {},
  loading: false,
  setLoading: () => {},
});

export const useProducts = () => useContext(ProductsContext);

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const value = {
    products,
    loading,
    setProducts,
    setLoading,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
