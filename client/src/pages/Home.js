import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Home = () => {
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

  return (
    <div>
      <div className="free-shipping-ad">
        <p>Free Shipping on all Orders!</p>
      </div>
      <CategoryMenu />
      <hr />
      <p className="catalog-page-divider">
        {categoryName ? `${categoryName} Products` : "All Products"}
      </p>
      <hr />
      <ProductList />

      <Footer />
    </div>
  );
};

export default Home;
