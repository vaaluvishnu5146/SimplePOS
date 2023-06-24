import React from "react";
import ProductCard from "../Cards/ProductCard";

export default function ProductListing({ data = [], handleCart = (d) => {} }) {
  return (
    <div className="product-listing-container">
      {data.length > 0 &&
        data.map((d, i) => (
          <ProductCard
            handleCart={handleCart}
            data={d}
            key={`product-card-${i}`}
          />
        ))}
    </div>
  );
}
