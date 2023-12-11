import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { useLazyQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { loadStripe } from "@stripe/stripe-js";
import { BsCart4 } from "react-icons/bs";
import { Button } from "@chakra-ui/react";

// Stripe test key for development from Stripe documentation
// DO NOT INPUT SENSATIVE INFORMATION WITH THIS PUBLIC KEY
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_FRONT);

const Cart = () => {
  // Access and interact with the Redux Store
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  // Checkout query state variables
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  // useLazyQuery to run Hook on button ("checkout") click
  // data variable will contain the checkout session, but only after the query is called with the getCheckout() function
  // After the payment processes, users will be redirected to <path>/success.
  useEffect(() => {
    // redirect to Stripe once the data variable has data in it.
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // If the cart is empty on refresh, check local storage
  // state.cart.length is passed as a value in the dependency array to ensure the hook only executes if the depenency array has changed since last ran
  useEffect(() => {
    async function getCart() {
      const cart = await JSON.parse(
        window.localStorage.getItem("Matcha-Skincare-cart")
      );
      dispatch({ type: "addMultipleToCart", products: [...cart] });
    }

    if (!store.cart.length) {
      getCart();
    }
  }, [store.cart.length, dispatch]);

  function submitCheckout() {
    window.alert(
      `⚠️ WARNING ⚠️ - After pressing okay, the Stripe checkout page will display with an option to put in payment information. 
      
      ⛔️ DO NOT ENTER SENSATIVE PERSONAL INFORMATION OR REAL CREDIT CARD NUMBERS! ⛔️
      
      This project uses Stripe's public test key and the information that you provide is not secure.`
    );

    const productIds = [];

    // loop over all items saved in state.cart then, add their ID's to a new productId's array for generating the Stripe session during query
    store.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

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
      <Button
        fontSize={"sm"}
        fontWeight={600}
        color={"green.800"}
        bg={"transparent"}
        _hover={{
          bg: "gray.50",
        }}
        onClick={toggleCart}
      >
        <BsCart4 />
      </Button>
    );
  }

  // If the user is logged in, allow them to proceed to Stripe's checkout page
  const checkoutButtons = (
    <div>
      {Auth.loggedIn() ? (
        <button onClick={submitCheckout} className="checkout-button">
          CHECKOUT
        </button>
      ) : (
        <button className="checkout-button">
          <a href="/login">Login to Checkout</a>
        </button>
      )}
    </div>
  );

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

            {checkoutButtons}
          </div>
        ) : (
          <div>
            <img
              className="empty-cart-illustration"
              src={require("../assets/empty-cart.png")}
              alt="Drawing of a person stand next to an empty shopping cart."
            ></img>
            <p>Nothing added to cart yet!</p>

            {checkoutButtons}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
