import React from "react";
import { Button, Card, Form, Input } from "antd";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-disable no-template-curly-in-string */

const Signup = () => {
  // Console Signup Successful
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  // Console Signup error
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-form">
      <Card style={{ width: "40%" }}>
        <h1>Signup</h1>
        <Form
          name="nest-messages"
          labelCol={{ span: 4 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateMessages={validateMessages}
          layout="vertical"
        >
          {/* Name Input */}
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Please enter your full name" />
          </Form.Item>

          {/* Username */}
          <Form.Item
            name={["user", "username"]}
            label="Username"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Please create a username" />
          </Form.Item>

          {/* Email Input */}
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input placeholder="Please enter your email" />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            name={["user", "password"]}
            label="Password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password placeholder="Please enter your password" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
