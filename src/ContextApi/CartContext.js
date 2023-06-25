import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({
  cart: null,
  handleAddCart: () => {},
  handleQuantity: () => {},
  loading: false,
  setLoading: () => {},
  findFromCart: () => {},
});

export const useCart = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

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

  function findFromCart(id = []) {
    let cartCopy = [...cart];
    const matchedItem = cartCopy.find((d) => d.id === id);
    return matchedItem ? true : false;
  }

  const value = {
    cart,
    loading,
    handleAddCart,
    setLoading,
    handleQuantity,
    findFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
