import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";

const Cart = () => {
  // React-Redux dispatch hook for adding products to the Redux store.
  const dispatch = useDispatch();

  // Access and use data from the Redux store state.
  const store = useSelector((state) => state);

  function toggleCart() {
    dispatch({ type: "cartToggle" });
  }

  if (!store.cartOpen) {
    return (
      <div className="cart" onClick={toggleCart}>
        <p>
          <span className="material-symbols-outlined">shopping_bag</span>
        </p>
      </div>
    );
  }

  return (
    <div className="shopping-cart-open">
      <div className="shopping-cart-close-button" onClick={toggleCart}>
        [close]
      </div>
      <div className="cart-contents">
        <p>Nothing added to cart yet!</p>
      </div>

      <hr></hr>
      <div className="cart-open-amount-container">
        <p className="cart-open-total">CART SUBTOTAL: </p>
        <p>$170.00</p>
      </div>
      <hr></hr>
      <button className="view-cart-button">VIEW CART</button>
      <button className="checkout-button">CHECKOUT</button>
    </div>
  );
};

export default Cart;
