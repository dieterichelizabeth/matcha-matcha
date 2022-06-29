import React from "react";
import { Button, Divider } from "antd";
import Breadcrumb from "../components/Breadcrumb";

const Detail = () => {
  const product = {
    name: "Age-defying Eye Cream",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image:
      "https://images.unsplash.com/photo-1613803745799-ba6c10aace85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Face",
    ingredients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi istaprobare, quae sunt a te dicta? Refert tamen, quo modo.",
    benefits: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 22.99,
    quantity: 700,
  };

  return (
    <div>
      <Breadcrumb />
      <div className="details-page">
        {/* Product Image */}
        <div className="detailsImage">
          <img
            style={{ width: "100%" }}
            src={product.image}
            alt="product"
          ></img>
        </div>

        {/* Product Details */}
        <div className="details-description">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <Divider />
          <p>
            <strong>Ingredients:</strong> {product.ingredients}
          </p>
          <Divider />
          <p>
            <strong>Benefits:</strong> {product.benefits}
          </p>
          <Divider dashed />
          <p style={{ textAlign: "center" }}>
            <strong>Price:</strong> ${product.price}
            <Button style={{ marginLeft: "40px" }}>Add to Cart</Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
