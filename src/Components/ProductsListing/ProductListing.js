import React from "react";
import ProductCard from "../Cards/ProductCard";
import { useCart } from "../../ContextApi/CartContext";

export default function ProductListing({ data = [], handleCart = (d) => {} }) {
  const { findFromCart = () => {} } = useCart();
  return (
    <div className="product-listing-container">
      {data.length > 0 &&
        data.map((d, i) => (
          <ProductCard
            handleCart={handleCart}
            data={d}
            key={`product-card-${i}`}
            disabled={findFromCart(d.id)}
          />
        ))}
    </div>
  );
}
