import React, { useContext } from "react";
import Image from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from "./../Store/CartContext";
import { UserProgressContext } from "../Store/UserProgressContext";
const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={Image} alt="Plate with full of dishes" />
        <h1>tastyfood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
