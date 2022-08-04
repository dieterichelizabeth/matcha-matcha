import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useSelector, useDispatch } from "react-redux";

function CategoryMenu() {
  // Access and interact with the Redux Store
  const dispatch = useDispatch();
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

        {loading ? <p>Loading..</p> : null}
      </div>
    </div>
  );
}

export default CategoryMenu;
