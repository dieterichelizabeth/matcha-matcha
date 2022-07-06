function reducer(state = [], action) {
  switch (action.type) {
    case "updateProducts":
      return [...state, { products: [...action.products] }];
    case "updateCategories":
      return [...state, { categories: [...action.categories] }];
    case "updateCurrentCategory":
      return [...state, { currentCategory: action.currentCategory }];
    default:
      return state;
  }
}
