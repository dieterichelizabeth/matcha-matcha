import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  // Use the id from the URL
  const { id } = useParams();

  // Access and use data from the Redux store state.
  const store = useSelector((state) => state);
  console.log(store);

  // Find the product details from the Redux Store
  const product = store.products.find((product) => product._id === id);

  // Breadcrumb
  const Breadcrumb = (
    <div>
      <ul className="breadcrumb">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/catalog">Catalog</a>
        </li>
        <li>{product.name}</li>
      </ul>
    </div>
  );

  return (
    <div>
      {Breadcrumb}
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
          <hr />
          <p>
            <strong>Ingredients:</strong> {product.ingredients}
          </p>
          <hr />
          <p>
            <strong>Benefits:</strong> {product.benefits}
          </p>
          <hr />
          <div className="price-and-button-container">
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <button className="details-add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
