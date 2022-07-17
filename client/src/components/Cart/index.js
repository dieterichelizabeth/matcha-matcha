import React from "react";
import { useSelector, useDispatch } from "react-redux";

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
      <div className="shopping-cart" onClick={toggleCart}>
        <p>
          <span className="material-symbols-outlined">shopping_bag</span>
        </p>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <div onClick={toggleCart}>[close]</div>
      <p>Open</p>
    </div>
  );
};

export default Cart;
