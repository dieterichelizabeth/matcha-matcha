const initialState = {
  products: [],
  categories: [],
  currentCategory: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "updateProducts":
      return { ...state, products: [...action.products] };
    case "updateCategories":
      return { ...state, categories: [...action.categories] };
    case "updateCurrentCategory":
      return { ...state, currentCategory: action.currentCategory };
    default:
      return state;
  }
}
