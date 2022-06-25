import React from "react";
import { Divider } from "antd";
import Breadcrumb from "../components/Breadcrumb";
import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";

const Catalog = () => {
  return (
    <div>
      <Breadcrumb />
      <CategoryMenu />
      <Divider orientation="left">All Products</Divider>
      <ProductList />
    </div>
  );
};

export default Catalog;
