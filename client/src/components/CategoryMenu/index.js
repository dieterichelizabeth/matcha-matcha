import React from "react";

function CategoryMenu() {
  const categories = [
    { name: "Face" },
    { name: "Hands" },
    { name: "Body" },
    { name: "Drinks" },
  ];

  return (
    <div>
      <div className="category-button-container">
        {categories.map((item) => (
          <button className="category-button" key={item.name}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
