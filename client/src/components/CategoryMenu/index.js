import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useSelector, useDispatch } from "react-redux";

function CategoryMenu() {
  // React-Redux dispatch hook for adding products to the Redux store.
  const dispatch = useDispatch();

  // Access and use data from the Redux store state.
  const store = useSelector((state) => state);

  // On page load, attempt to gather "category names" from the Database
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  // Once the "category names" return from the database, add them to the Redux Store.
  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: "updateCategories",
        categories: categoryData.categories,
      });
    }
  }, [categoryData, loading, dispatch]);

  // When the user selects a category, update the current category in the Redux Store.
  const handleClick = (id) => {
    dispatch({
      type: "updateCurrentCategory",
      currentCategory: id,
    });
  };

  return (
    <div>
      <div className="category-button-container">
        {/* If Categories are retrieved from the database, display them to the user */}
        {store.categories ? (
          <>
            {store.categories.map((category) => (
              <button
                className="category-button"
                key={category.name}
                onClick={() => {
                  handleClick(category._id);
                }}
              >
                {category.name}
              </button>
            ))}
          </>
        ) : (
          <></>
        )}

        {/* If categories do not return from the database after load, do not attempt to display menu */}
        {loading ? <p>Loading..</p> : null}
      </div>
    </div>
  );
}

export default CategoryMenu;
