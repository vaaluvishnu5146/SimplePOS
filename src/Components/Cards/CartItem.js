import React from "react";
import { useCart } from "../../ContextApi/CartContext";

export default function CartItem({ data = {} }) {
  const { handleQuantity = () => {} } = useCart();
  return (
    <div className="cart-item">
      <div className="product-details">
        <h4>{data.productName}</h4>
        <p>{data.price}</p>
      </div>
      <div className="counter-button">
        <button onClick={() => handleQuantity(data.id, "decrement")}>-</button>
        <p>{data.quantity}</p>
        <button onClick={() => handleQuantity(data.id, "increment")}>+</button>
      </div>
    </div>
  );
}
