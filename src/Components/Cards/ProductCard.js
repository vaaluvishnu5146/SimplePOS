import React from "react";
import noodles from "../../assets/icons/noodles.svg";

export default function ProductCard({ data = {}, handleCart = (d) => {} }) {
  return (
    <div className="product-card">
      <img src={noodles} alt="noodles" />
      <div className="product-content">
        <h4>{data.productName}</h4>
        <p>{data.price}</p>
        <button onClick={() => handleCart({ ...data, quantity: 1 })}>
          Add
        </button>
      </div>
    </div>
  );
}
