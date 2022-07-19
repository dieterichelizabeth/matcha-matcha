import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  // React-Redux dispatch hook for adding products to the Redux store.
  const dispatch = useDispatch();

  // Remove a product from the Cart array
  const removeFromCart = () => {
    dispatch({
      type: "removeFromCart",
      _id: item._id,
    });
  };

  // Update Cart Quantity based on User input
  const updateQuantity = (e) => {
    const value = e.target.value;

    if (value === "0") {
      dispatch({
        type: "removeFromCart",
        _id: item._id,
      });
    } else {
      dispatch({
        type: "updateCartQuantity",
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
    }
  };

  return (
    <div className="cart-item-container">
      <img className="cart-item-image" src={item.image} alt={item.name} />
      <div className="cart-item-description">
        <p className="cart-item-name">{item.name}</p>
        <div className="cart-item-spacing">
          <p className="cart-item-price">${item.price}</p>
          <div className="cart-item-spacing">
            <p className="cart-item-price">Qty: </p>
            <input
              className="cart-item-qty-input"
              type="number"
              placeholder="1"
              value={item.purchaseQuantity}
              onChange={updateQuantity}
            />
          </div>
        </div>
        <button
          className="cart-item-remove"
          onClick={() => removeFromCart(item)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
