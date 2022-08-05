import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToLocalCart, updateLocalCartQtyPlusOne } from "../../utils/helpers";

const ProductItem = (product) => {
  // Access and interact with the Redux Store
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  async function addToCart() {
    const alreadyInCart = store.cart.find(
      (products) => products._id === product._id
    );

    if (alreadyInCart) {
      // If product is already in the store, increase quantity
      dispatch({
        type: "updateCartQuantity",
        _id: product._id,
        purchaseQuantity: parseInt(alreadyInCart.purchaseQuantity) + 1,
      });

      // Open the Cart and Update Local Storage Copy
      dispatch({ type: "cartToggleOpen" });
      updateLocalCartQtyPlusOne(product);
    } else {
      // Else, add to store cart
      dispatch({
        type: "addToCart",
        product: { ...product, purchaseQuantity: 1 },
      });

      // Open the Cart and Update Local Storage Copy
      dispatch({ type: "cartToggleOpen" });
      addToLocalCart(product);
    }
  }

  return (
    <div className="product-card" key={product.name}>
      <Link to={`/products/${product._id}`}>
        <img
          className="product-image"
          alt="Beauty Product"
          src={`/images/${product.image}`}
        />
        <div className="product-card-text">
          <p className="product-name w100">{product.name}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
        </div>
      </Link>
      <button className="add-to-cart-button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
