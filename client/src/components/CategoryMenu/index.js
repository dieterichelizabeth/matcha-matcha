import React from "react";
import { Col, Row, Button } from "antd";

function CategoryMenu() {
  const categories = [
    { name: "Face" },
    { name: "Hands" },
    { name: "Body" },
    { name: "Drinks" },
  ];

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }} justify={"center"}>
        {categories.map((item) => (
          <Col span={2} key={item.name}>
            <Button type="text">{item.name}</Button>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CategoryMenu;
