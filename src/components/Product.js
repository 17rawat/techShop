import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";

import "./Product.css";
const Product = ({ title, id, thumbnail, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      cartActions.addToCart({
        title,
        id,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>$ {price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
