import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  const orderNumber = "2017182818828182881";
  return (
    <div className="success-page">
      <h1>Success!</h1>
      <p className="success-text">
        Thank you for your purchase! Order number: {orderNumber}
      </p>
      <div className="success-page-button-container">
        <button className="back-to-home-button">
          {" "}
          <Link to="/">Back Home</Link>
        </button>
        <button className="view-orders-button">
          {" "}
          <Link to="/orderHistory">View Your Orders</Link>
        </button>
      </div>
    </div>
  );
};

export default Success;
