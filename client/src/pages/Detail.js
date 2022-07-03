import React from "react";
import { Button, Divider } from "antd";
import Breadcrumb from "../components/Breadcrumb";

const Detail = () => {
  const product = {
    name: "Tea Hand Soap",
    description:
      "Tea Hand Soap is an organic hand soap made from 100% natural ingredients including tea green tea, lavender, lemon balm and more. A gentle yet effective cleanser that leaves your hands feeling fresh and clean.",
    image:
      "https://images.unsplash.com/photo-1564077454884-6ec0daa6acc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    category: "Hand",
    price: 25.99,
    quantity: 40,
    ingredients:
      "Sodium Hyaluronate, Green Tea, Avocado Oil, Lavendar Oil, Charcoal, Amino Acids, Vitamin K, Zinc, Amoxicillin, Niacinamide, Alpha Hydroxy Acid, Sulfur, Soybean Oil, Volcanic Ash, Glycolic acid, Ceramides, Seaweed, Vitamin A, Lemon Balm, Vitamin F, Vitamin B3",
    benefits:
      "Gentle enough for daily use. Leaves skin feeling clean and refreshed. Non-toxic. Scented with essential oils. Made in USA.",
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
