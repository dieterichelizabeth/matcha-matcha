import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "antd";

const ProductList = () => {
  const { Meta } = Card;

  const products = [
    {
      name: "Revitalizing Serum",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Face",
      price: 22.99,
      quantity: 500,
    },
    {
      name: "Healing Spot Treatment",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://images.unsplash.com/photo-1624095149305-70e17ef7adae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Face",
      price: 42.99,
      quantity: 1200,
    },
    {
      name: "Age-defying Eye Cream",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://images.unsplash.com/photo-1613803745799-ba6c10aace85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Face",
      price: 22.99,
      quantity: 700,
    },
    {
      name: "Moisturizing Lip Balm",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Face",
      price: 5.99,
      quantity: 300,
    },
  ];

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }} justify={"center"}>
      {products.map((item) => (
        <Col className="gutter-row" span={5} key={item.name}>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={
              <img
                alt="example"
                src={item.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
            }
          >
            <Link to={`/products/4567`}>
              <Meta title={item.name} description={item.description} />
            </Link>
            <div className="additional">
              <p className="price">{item.price}</p>
              <Button type="text" key={item._id}>
                Add to Cart
              </Button>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
