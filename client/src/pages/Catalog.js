import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";

const Catalog = () => {
  // Access and use data from the Redux store state.
  const store = useSelector((state) => state);

  const categoryName = getName();

  function getName() {
    if (store.currentCategory) {
      const id = store.currentCategory;
      const category = store.categories.find((category) => category._id === id);
      return category.name;
    }
  }

  // Breadcrumb
  const Breadcrumb = (
    <div>
      <ul className="breadcrumb">
        <li>
          <a href="/">Home</a>
        </li>
        <li>Catalog</li>
      </ul>
    </div>
  );

  return (
    <div>
      {Breadcrumb}
      <CategoryMenu />
      <hr />
      <p className="catalog-page-divider">
        {categoryName ? `${categoryName} Products` : "All Products"}
      </p>
      <hr />
      <ProductList />
    </div>
  );
};

export default Catalog;
