import React, { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "./../Store/CartContext";
import { currencyFormatter } from "./../util/currencyFormatter";
import Button from "./UI/Button";
import { UserProgressContext } from "../Store/UserProgressContext";
import CartItem from "./CartItem";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);
  function handleCartClose() {
    userProgressCtx.hideCart();
  }
  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }
  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCartClose : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            addItem={() => cartCtx.addItem(item)}
            removeItem={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCartClose}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go To CheckOut</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
