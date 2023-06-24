import React from "react";
import CartItem from "../Cards/CartItem";

export default function Cart({ data = [], handleQuantity = () => {} }) {
  return (
    <div className="app-cart-container">
      {data.length > 0 &&
        data.map((d, i) => (
          <CartItem
            data={d}
            key={`cart-item-${i}`}
            handleQuantity={handleQuantity}
          />
        ))}
    </div>
  );
}
