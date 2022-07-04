import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";

const Catalog = () => {
  const Breadcrumb = (
    <div>
      <ul class="breadcrumb">
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
      <p className="catalog-page-divider">All Products</p>
      <hr />
      <ProductList />
    </div>
  );
};

export default Catalog;
