import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const Success = () => {
  const orderNumber = "2017182818828182881";
  return (
    <div>
      <Result
        status="success"
        title="Success!"
        subTitle={`Thank you for your purchase! Order number: ${orderNumber}`}
        extra={[
          <Button type="primary" key="console">
            <Link to="/">Back Home</Link>
          </Button>,
          <Button key="buy">
            <Link to="/orderHistory">View Your Orders</Link>
          </Button>,
        ]}
      />
    </div>
  );
};

export default Success;
