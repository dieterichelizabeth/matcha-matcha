import { Button, Card, Checkbox, Form, Input, AutoComplete } from "antd";
import React, { useState } from "react";
const { Option } = AutoComplete;

const App = () => {
  // Set the State for Autocomplete options
  const [result, setResult] = useState([]);

  // Handle the autocomplete for "email" in the form
  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "yahoo.com", "aol.com"].map(
        (domain) => `${value}@${domain}`
      );
    }

    setResult(res);
  };

  // Alert login successful
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  // Alert login errir
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-form">
      <Card style={{ width: "40%" }}>
        <h1>Login</h1>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          {/* Email Field */}
          <Form.Item
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <AutoComplete
              onSearch={handleSearch}
              placeholder="Please enter your email"
            >
              {result.map((email) => (
                <Option key={email} value={email}>
                  {email}
                </Option>
              ))}
            </AutoComplete>
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Please enter your password" />
          </Form.Item>

          {/* Remember Me Checkbox */}
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item
            wrapperCol={{
              offset: 5,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default App;
