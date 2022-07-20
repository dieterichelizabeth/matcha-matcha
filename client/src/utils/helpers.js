export function addToLocalCart(product) {
  // get cart from local storage
  let data = JSON.parse(window.localStorage.getItem("Matcha-Skincare-cart"));

  // If the cart exists, add product to cart array
  if (data) {
    let newItem = { ...product, purchaseQuantity: 1 };
    data.push(newItem);

    window.localStorage.setItem("Matcha-Skincare-cart", JSON.stringify(data));
  } else {
    // else, create the local storage cart
    window.localStorage.setItem(
      "Matcha-Skincare-cart",
      JSON.stringify([{ ...product, purchaseQuantity: 1 }])
    );
  }
}

export function removeFromLocalCart(item) {
  // get cart from local storage
  let data = JSON.parse(window.localStorage.getItem("Matcha-Skincare-cart"));

  // filter through local storage cart, remove the item with  matching id
  let updatedCart = data.filter((product) => {
    return product._id !== item._id;
  });

  window.localStorage.setItem(
    "Matcha-Skincare-cart",
    JSON.stringify(updatedCart)
  );
}

export function updateLocalCartQty(item, value) {
  // get cart from local storage
  let data = JSON.parse(window.localStorage.getItem("Matcha-Skincare-cart"));

  // Look through Local Storage cart and update the purchase quantity of matching id by <value>
  let updatedCart = data.map((product) => {
    if (product._id === item._id) {
      product.purchaseQuantity = value;
    }
    return product;
  });

  window.localStorage.setItem(
    "Matcha-Skincare-cart",
    JSON.stringify(updatedCart)
  );
}

export function updateLocalCartQtyPlusOne(product) {
  // get cart from local storage
  let data = JSON.parse(window.localStorage.getItem("Matcha-Skincare-cart"));

  // Look through Local Storage cart and update the purchase quantity of matching id by 1
  let updatedCart = data.map((item) => {
    if (item._id === product._id) {
      item.purchaseQuantity = item.purchaseQuantity + 1;
    }
    return item;
  });

  window.localStorage.setItem(
    "Matcha-Skincare-cart",
    JSON.stringify(updatedCart)
  );
}
