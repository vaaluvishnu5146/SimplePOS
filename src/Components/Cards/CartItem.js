import React from "react";

export default function CartItem({ data = {}, handleQuantity = () => {} }) {
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
