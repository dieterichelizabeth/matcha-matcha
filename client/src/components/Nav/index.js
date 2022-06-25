import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CoffeeOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const items = [
  {
    label: <Link to="/">Matcha Matcha</Link>,
    key: "home",
    icon: <CoffeeOutlined />,
  },
  {
    label: <Link to="/catalog">Catalog</Link>,
    key: "catalog",
  },
  {
    label: <Link to="/signup">Signup</Link>,
    key: "login",
  },
  {
    label: <Link to="/login">Login</Link>,
    key: "signup",
  },
];

const Nav = () => {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default Nav;
