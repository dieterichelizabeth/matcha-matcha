import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
  // Access and interact with the Redux Store
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  // On page load, attempt to gather "products" from the Database
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  // Once the data object is returned from useQuery(), execute the dispatch function to save products to the Redux Store.
  useEffect(() => {
    if (data) {
      dispatch({ type: "updateProducts", products: data.products });
      window.localStorage.setItem(
        "Matcha-Skincare",
        JSON.stringify({ products: data })
      );
    }
  }, [data, loading, dispatch]);

  // Filter products displayed based on the current Category.
  function filterProducts() {
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
      {store.products[0] ? (
        <>
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              description={product.description}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </>
      ) : (
        <p>There are no products yet!</p>
      )}

      {loading ? <p>loading</p> : null}
    </div>
  );
};

export default ProductList;
