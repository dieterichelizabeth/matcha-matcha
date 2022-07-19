import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Detail = () => {
  // React-Redux dispatch hook for adding products to the Redux store.
  const dispatch = useDispatch();

  // Use the id from the URL
  const { id } = useParams();

  // Access and use data from the Redux store state.
  const store = useSelector((state) => state);

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

  const addToCart = () => {
    const alreadyInCart = store.cart.find((product) => product._id === id);

    // If the product is already in the Users cart, increase Purchase Quantity
    // else, add to cart and alert the user
    if (alreadyInCart) {
      dispatch({
        type: "updateCartQuantity",
        _id: product._id,
        purchaseQuantity: parseInt(alreadyInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: "addToCart",
        product: { ...product, purchaseQuantity: 1 },
      });
      alert("Added to Cart!");
    }
  };

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
            <button className="details-add-to-cart" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
