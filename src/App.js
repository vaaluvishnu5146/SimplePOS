import "./App.css";
import React, { useState, useEffect } from "react";
import ProductListing from "./Components/ProductsListing/ProductListing";
import AppLayout from "./layout/AppLayout";
import axios from "axios";
import Cart from "./Components/Cart/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function handleAddCart(data = {}) {
    if (data) {
      let cartCopy = [...cart];
      cartCopy.push(data);
      setCart(cartCopy);
    }
  }

  function handleQuantity(id = "", type = "") {
    let cartCopy = [...cart];
    const matchedItem = cartCopy.find((d) => d.id === id);
    if (type === "increment") {
      matchedItem.quantity += 1;
    } else {
      matchedItem.quantity -= 1;
    }
    setCart(cartCopy);
  }

  useEffect(() => {
    axios.get("http://localhost:3000/mocks/products.json").then((response) => {
      if (response.statusText === "OK") {
        setProducts(response.data.result);
      }
    });

    return () => {};
  }, []);

  return (
    <AppLayout>
      <ProductListing data={products} handleCart={handleAddCart} />
      <Cart data={cart} handleQuantity={handleQuantity} />
    </AppLayout>
  );
}

export default App;
