import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Footer from "../components/Footer";

const OrderHistory = () => {
  // Get the User Data from the database
  const { loading, data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }

  // Calculate cart total based on items in User's cart
  function orderTotal(order) {
    let sum = 0;
    order.products.forEach((item) => {
      sum += item.price;
    });

    return sum.toFixed(2);
  }

  if (loading) return "Loading";

  return (
    <div>
      <div className="order-history">
        <div className="order-history-user"></div>
        <div className="order-history-orders">
          <h2>My Orders</h2>
          {user.orders[0] ? (
            <>
              {user.orders.map((order) => (
                <div key={order._id} className="order-cards">
                  <h3 className="order-date">
                    {new Date(
                      parseInt(order.purchaseDate)
                    ).toLocaleDateString()}
                  </h3>
                  <p className="order-id"> Order Number: {order._id}</p>
                  <hr />
                  <div>
                    <p>Products Purchased: </p>
                    <div className="order-products-container">
                      {order.products.map(
                        ({ name, price, image, _id }, index) => (
                          <div className="order-product-card" key={name}>
                            <Link to={`/products/${_id}`}>
                              <img
                                className="product-image"
                                alt="Beauty Product"
                                src={image}
                              />
                              <div className="product-card-text">
                                <p className="product-name w100">{name}</p>

                                <p className="product-price">${price}</p>
                              </div>
                            </Link>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <hr />
                  <p className="order-total">
                    Total Paid: ${orderTotal(order)}{" "}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <p className="no-order-history">No Previous Orders.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderHistory;
