import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
  // React-Redux dispatch hook for adding products to the Redux store.
  const dispatch = useDispatch();

  // Access and use data from the Redux store state.
  const store = useSelector((state) => state);

  // On page load, attempt to gather "products" from the Database
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  // Once the data object is returned from useQuery(), execute the dispatch function.
  useEffect(() => {
    // Save products to the Redux Store.
    if (data) {
      dispatch({ type: "updateProducts", products: data.products });
    }
  }, [data, loading, dispatch]);

  // Filter what products display based on what the current Category is.
  function filterProducts() {
    // if there is no category selected, return all products
    if (!store.currentCategory) {
      return store.products;
    }

    // if a category is selected, return all products with that category's id
    return store.products.filter(
      (product) => product.category._id === store.currentCategory
    );
  }

  return (
    <div className="product-results-container">
      {/* If there are products in the store, display the product cards. 
          If there are no products in the store after data is recieved from the database, display "no products". */}
      {store.products[0] ? (
        <>
          {filterProducts().map((product) => (
            <div className="product-card" key={product.name}>
              <Link to={`/products/467`}>
                <img
                  className="product-image"
                  alt="beuty Product"
                  src={product.image}
                />
                <div className="product-card-text">
                  <p className="product-name">{product.name}</p>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">${product.price}</p>
                </div>
              </Link>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          ))}
        </>
      ) : (
        <p>There are no products yet!</p>
      )}

      {/* If data from the database is still loading, display "loading" */}
      {loading ? <p>loading</p> : null}
    </div>
  );
};

export default ProductList;

/*
 ----------- Notes ------------

https://react-redux.js.org/api/hooks
- useDispatch: "hook returns a reference to the dispatch function from the Redux store, used for dispatch actions."
- useSelector(): "will also subscribe to the Redux store, and run your selector whenever an action is dispatched."
- dispatch variable added to dependency array for useEffect (Per react-redux hooks documentation)
*/
