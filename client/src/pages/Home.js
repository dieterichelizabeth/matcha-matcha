import React from "react";
import { useSelector } from "react-redux";
import Welcome from "../components/Welcome";
import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import Nav from "../components/Nav";

const Home = () => {
  // Access and use data from the Redux store state.
  const store = useSelector((state) => state);

  // Use redux store to display current category name.
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
      <Notification />
      <Nav />
      <Welcome />
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
