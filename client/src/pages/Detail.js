import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToLocalCart, updateLocalCartQtyPlusOne } from "../utils/helpers";
import Footer from "../components/Footer";

const Detail = () => {
  // Access and interact with the Redux Store
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const [product, setCurrentProduct] = useState({});

  // Use the id from the URL
  const { id } = useParams();

  useEffect(() => {
    // Find the product details from the Redux Store
    if (store.products[0]) {
      setCurrentProduct(store.products.find((product) => product._id === id));
    }

    // If the product is not in the redux store, check local storage
    // Example: if the user refreshes the page, use local storage to display the product
    else if (!store.products[0]) {
      let data = JSON.parse(window.localStorage.getItem("Matcha-Skincare"));

      // map through local storage products for a matching item._id
      data.products.products.map((item) => {
        if (id === item._id) {
          setCurrentProduct(item);
        }
        return item;
      });
    }
  }, [store.products, id]);

  // Breadcrumb
  const Breadcrumb = (
    <div className="breadcrumb-container">
      <ul className="breadcrumb">
        <li>
          <a href="/">Home</a>
        </li>
        <li>{product.name}</li>
      </ul>
    </div>
  );

  const addToCart = () => {
    const alreadyInCart = store.cart.find((product) => product._id === id);

    if (alreadyInCart) {
      // If the product is already in the Users cart, increase Purchase Quantity
      dispatch({
        type: "updateCartQuantity",
        _id: product._id,
        purchaseQuantity: parseInt(alreadyInCart.purchaseQuantity) + 1,
      });

      // Open the cart and update the Local Storage copy
      dispatch({ type: "cartToggleOpen" });
      updateLocalCartQtyPlusOne(product);
    } else {
      // Else, add the product to cart
      dispatch({
        type: "addToCart",
        product: { ...product, purchaseQuantity: 1 },
      });

      // Open the cart and update the Local Storage copy
      dispatch({ type: "cartToggleOpen" });
      addToLocalCart(product);
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
      <Footer />
    </div>
  );
};

export default Detail;
