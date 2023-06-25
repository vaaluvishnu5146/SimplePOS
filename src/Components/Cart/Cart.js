import React from "react";
import CartItem from "../Cards/CartItem";
import { useCart } from "../../ContextApi/CartContext";

export default function Cart(props) {
  const { cart = [] } = useCart();
  return (
    <div className="app-cart-container">
      {cart.length > 0 &&
        cart.map((d, i) => <CartItem data={d} key={`cart-item-${i}`} />)}
    </div>
  );
}
