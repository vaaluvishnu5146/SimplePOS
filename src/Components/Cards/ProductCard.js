import React from "react";
import noodles from "../../assets/icons/noodles.svg";

export default function ProductCard({
  data = {},
  handleCart = (d) => {},
  disabled = false,
}) {
  return (
    <div className="product-card">
      <img src={data.image || noodles} alt="noodles" />
      <div className="product-content">
        <h4>{data.productName}</h4>
        <p>{data.price}</p>
        <button
          disabled={disabled}
          onClick={() => handleCart({ ...data, quantity: 1 })}
        >
          {disabled ? "Added To Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}
