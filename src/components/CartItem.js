import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cartSlice";
const CartItem = ({ title, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const incrementCartItem = () => {
    dispatch(
      cartActions.addToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2> {title}</h2>
      <p>${price} /-</p>
      <p>{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeCartItem}>
        -
      </button>
      <button className="cart-actions" onClick={incrementCartItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
