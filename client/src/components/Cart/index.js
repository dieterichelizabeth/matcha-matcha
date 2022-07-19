import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem";
import "./style.css";

const Cart = () => {
  // React-Redux dispatch hook for adding products to the Redux store.
  const dispatch = useDispatch();

  // Access and use data from the Redux store state.
  const store = useSelector((state) => state);
  console.log(store);

  // Open/Close the cart
  function toggleCart() {
    dispatch({ type: "cartToggle" });
  }

  // Calculate cart total based on items in User's cart
  function calculateTotal() {
    let sum = 0;
    store.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  // Display the cart icon when the shopping cart is closed
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

      {/* Cart Items */}
      <div className="cart-contents">
        {store.cart[0] ? (
          <div>
            {store.cart.map((item) => (
              <CartItem key={item.name} item={item} />
            ))}
            {/* Cart Subtotal Display */}
            <hr></hr>
            <div className="cart-open-amount-container">
              <p className="cart-open-total">CART SUBTOTAL: </p>
              <p>${calculateTotal()}</p>
            </div>
            <hr></hr>

            {/* Checkout Button */}
            <button className="checkout-button">CHECKOUT</button>
          </div>
        ) : (
          <div>
            <img
              className="empty-cart-illustration"
              src={require("../assets/empty-cart.png")}
              alt="Drawing of a person stand next to an empty shopping cart."
            ></img>
            <p>Nothing added to cart yet!</p>
            <button className="checkout-button">
              <a href="/catalog">Go to Catalog</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
