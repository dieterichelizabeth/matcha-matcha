import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ProductItem = (product) => {
  // React-Redux dispatch hook for adding products to the Redux store.
  const dispatch = useDispatch();

  // Access and use data from the Redux store state.
  const store = useSelector((state) => state);

  const addToCart = () => {
    const alreadyInCart = store.cart.find(
      (products) => products._id === product._id
    );

    // If the product is already in the Users cart, increase Purchase Quantity
    // else, add to cart and alert the user
    if (alreadyInCart) {
      dispatch({
        type: "updateCartQuantity",
        _id: product._id,
        purchaseQuantity: parseInt(alreadyInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: "addToCart",
        product: { ...product, purchaseQuantity: 1 },
      });
      alert("Added to Cart!");
    }
  };

  return (
    <div className="product-card" key={product.name}>
      <Link to={`/products/${product._id}`}>
        <img
          className="product-image"
          alt="Beauty Product"
          src={product.image}
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
