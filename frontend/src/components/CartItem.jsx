import React from "react";
import { currencyFormatter } from "./../util/currencyFormatter";

const CartItem = ({ name, quantity, price ,addItem,removeItem}) => {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} X {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={removeItem}>-</button>
        <span>{quantity}</span>
        <button onClick={addItem}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
