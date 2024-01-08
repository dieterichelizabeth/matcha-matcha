/**
 * Single card item for display in the Cart component
 * @param {item} arg An object containing product data for display
 */
import { useDispatch } from "react-redux";
import { chakra, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import {
  removeFromLocalCart,
  updateLocalCartQty,
} from "../../utils/helpers.js";

const CartItem = ({ item }) => {
  // React-Redux dispatch hook for adding products to the Redux store.
  const dispatch = useDispatch();

  // Remove a product from the Cart array
  function removeFromCart() {
    dispatch({
      type: "removeFromCart",
      _id: item._id,
    });

    // Update the Local Storage Copy
    removeFromLocalCart(item);
  }

  // Update Cart Quantity based on User input
  const updateQuantity = (e) => {
    const value = e.target.value;

    if (value === "0") {
      dispatch({
        type: "removeFromCart",
        _id: item._id,
      });

      // Update the Local Storage Copy
      removeFromLocalCart(item);
    } else {
      dispatch({
        type: "updateCartQuantity",
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });

      // Update the Local Storage Copy
      updateLocalCartQty(item, value);
    }
  };

  return (
    <Flex alignItems={"center"} margin={"10px"}>
      <Image
        src={`/assets/small/${item.image}`}
        alt={item.name}
        height={"80px"}
        width={"80px"}
        objectFit={"cover"}
        marginRight={"10px"}
      />
      <Stack gap={"0"}>
        <Text>{item.name}</Text>

        <Flex justifyContent={"space-between"} marginBottom={"0"}>
          <Text>${item.price}</Text>
          <Flex alignItems={"center"}>
            <Text marginRight={"7px"}>Qty: </Text>
            <chakra.input
              width={"20px"}
              padding={"2px"}
              border={"1px solid #EDF2F7"}
              type="number"
              placeholder="1"
              value={item.purchaseQuantity}
              onChange={updateQuantity}
            />
          </Flex>
        </Flex>
        <Button
          marginTop={"0"}
          fontSize={"13px"}
          height={"25px"}
          width={"65px"}
          bg={"transparent"}
          textDecor={"underline"}
          onClick={() => removeFromCart(item)}
        >
          Remove
        </Button>
      </Stack>
    </Flex>
  );
};

export default CartItem;
