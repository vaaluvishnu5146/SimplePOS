import "./App.css";
import React, { useEffect, useReducer } from "react";
import ProductListing from "./Components/ProductsListing/ProductListing";
import AppLayout from "./layout/AppLayout";
import axios from "axios";
import Cart from "./Components/Cart/Cart";
import { useProducts } from "./ContextApi/ProductsContext";
import { useCart } from "./ContextApi/CartContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_PRODUCTS":
      return {
        ...state,
        products: [...action.payload],
      };
    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return null;
  }
};

const initialState = {
  products: [],
  cart: [],
};

function App() {
  const { products = [], setProducts, loading, setLoading } = useProducts();
  const { handleAddCart = (d) => {} } = useCart();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("http://localhost:3000/mocks/products.json").then((response) => {
      if (response.statusText === "OK") {
        // dispatch({ type: "SAVE_PRODUCTS", payload: response.data.result });
        setProducts(response.data.result);
      }
    });

    return () => {};
  }, []);

  return (
    <AppLayout>
      <ProductListing data={products || []} handleCart={handleAddCart} />
      <Cart />
    </AppLayout>
  );
}

export default App;
