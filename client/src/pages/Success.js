import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { removeFromLocalCart } from "../utils/helpers";
import { ADD_ORDER } from "../utils/mutations";

const Success = () => {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await JSON.parse(
        window.localStorage.getItem("Matcha-Skincare-cart")
      );
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          removeFromLocalCart(item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 20000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div className="success-page">
      <h1>Success!</h1>
      <p className="success-text">
        Thank you for your purchase! View Order details in your Order History.
      </p>
      <div className="success-page-button-container">
        <button className="back-to-home-button">
          {" "}
          <Link to="/">Back Home</Link>
        </button>
        <button className="view-orders-button">
          {" "}
          <Link to="/orderHistory">View Order History</Link>
        </button>
      </div>
    </div>
  );
};

export default Success;
