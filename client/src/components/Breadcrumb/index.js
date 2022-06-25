import { Breadcrumb } from "antd";
import React from "react";

const Breadcrumbs = () => (
  <div className="breadcrumb-spacing">
    <Breadcrumb>
      <Breadcrumb.Item>
        <a href="/">Home</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Catalog</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

export default Breadcrumbs;
