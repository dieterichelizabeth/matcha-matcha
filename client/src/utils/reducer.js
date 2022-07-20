const initialState = {
  products: [],
  categories: [],
  currentCategory: null,
  cart: [],
  cartOpen: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // add Product data from the database
    case "updateProducts":
      return { ...state, products: [...action.products] };
    // add Category data from the database
    case "updateCategories":
      return { ...state, categories: [...action.categories] };
    // Update the current category
    case "updateCurrentCategory":
      return { ...state, currentCategory: action.currentCategory };
    // Open/Close the cart
    case "cartToggle":
      return { ...state, cartOpen: !state.cartOpen };
    // Open the cart
    case "cartToggleOpen":
      return { ...state, cartOpen: true };
    // Add a product to the car array
    case "addToCart":
      return { ...state, cart: [...state.cart, action.product] };
    // Add multiple products to the cart array
    case "addMultipleToCart":
      return { ...state, cart: [...state.cart, ...action.products] };
    // Update the quantity of a product in the cart
    case "updateCartQuantity":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };
    // Remove a product from the cart array
    case "removeFromCart":
      let updatedCart = state.cart.filter((product) => {
        return product._id !== action._id;
      });
      return { ...state, cart: updatedCart };
    // Remove all products from the cart
    case "clearCart":
      return { ...state, cartOpen: false, cart: [] };
    default:
      return state;
  }
}
