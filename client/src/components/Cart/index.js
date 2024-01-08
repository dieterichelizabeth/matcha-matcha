/**
 * Cart component - used in the navbar
 */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { useLazyQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { loadStripe } from "@stripe/stripe-js";
import { BsCart4 } from "react-icons/bs";
import { Link as MyLink } from "react-router-dom";
import { Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import cart from "../../components/assets/cart.png";

// Stripe test key for development from Stripe documentation
// DO NOT INPUT SENSATIVE INFORMATION WITH THIS PUBLIC KEY
const stripePromise = loadStripe(
  "pk_test_51NjrI7DSKGaJZlGB0akWojpo4H0lkIi1Z5AA70196poSGbDs3hnuLw9EOwd6bh18CfYM3inYRM4eQdkGFMIEvsC000puTkXyqb"
);

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
        aria-label="Open The Cart"
      >
        <BsCart4 />
      </Button>
    );
  }

  // If the user is logged in, allow them to proceed to Stripe's checkout page
  const checkoutButtons = (
    <>
      {Auth.loggedIn() ? (
        <Button onClick={submitCheckout}>CHECKOUT</Button>
      ) : (
        <MyLink to={"/login"}>
          <Button>Login to Checkout</Button>
        </MyLink>
      )}
    </>
  );

  return (
    <Stack>
      <Button
        fontSize={"sm"}
        fontWeight={600}
        color={"green.800"}
        bg={"gray.100"}
        _hover={{
          bg: "gray.200",
        }}
        onClick={toggleCart}
        aria-label="Open The Cart"
      >
        <BsCart4 />
      </Button>
      <Stack
        position={"absolute"}
        right={"0"}
        top={"80px"}
        alignItems={"center"}
        bg={"white"}
        padding={"20px 10px"}
        border={"1px solid"}
        borderColor={"gray.200"}
        zIndex={"4"}
        maxW={"400px"}
      >
        {store.cart[0] ? (
          <div>
            {store.cart.map((item, i) => (
              <CartItem key={i} item={item} />
            ))}
            {/* Cart Subtotal Display */}
            <hr></hr>
            <Flex justifyContent={"space-between"}>
              <Text>CART SUBTOTAL: </Text>
              <Text>${calculateTotal()}</Text>
            </Flex>
            <hr></hr>

            <Stack marginTop={"20px"}>{checkoutButtons}</Stack>
          </div>
        ) : (
          <Stack>
            <Image
              src={cart}
              height={"40px"}
              width={"40px"}
              margin={"auto"}
            ></Image>
            <Text>Nothing added to cart yet!</Text>

            <MyLink to={"/shop"}>
              <Button>Continue Shopping</Button>
            </MyLink>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Cart;
