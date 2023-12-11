import React, { useEffect } from "react";
import ProductCard from "../ProductCard";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { useSelector, useDispatch } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const BestSellerCards = () => {
  // Access and interact with the Redux Store
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  // On page load, attempt to gather "products" from the Database
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  // Once the data object is returned from useQuery(), execute the dispatch function to save products to the Redux Store.
  useEffect(() => {
    if (data) {
      dispatch({ type: "updateProducts", products: data.products });
      window.localStorage.setItem(
        "Matcha-Skincare",
        JSON.stringify({ products: data })
      );
    }
  }, [data, loading, dispatch]);

  // Filter products displayed based on the current Category.
  function filterProducts() {
    // if a category is selected, return all products with that category's id
    return store.products.filter(
      (product) => product.category._id === "657585be8737d1d8cda94f69"
    );
  }

  return (
    // <SimpleGrid minChildWidth="200px" spacing={10} marginTop={"30px"}>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
        },
        // when window width is >= 900px
        900: {
          slidesPerView: 4,
        },
      }}
    >
      {store.products[0] ? (
        <>
          {filterProducts().map((product) => (
            <SwiperSlide>
              {" "}
              <ProductCard
                key={product._id}
                _id={product._id}
                description={product.description}
                image={product.image}
                name={product.name}
                price={product.price}
              />{" "}
            </SwiperSlide>
          ))}
        </>
      ) : (
        <p>There are no products yet!</p>
      )}
      {loading ? <p>loading</p> : null}
      ...
    </Swiper>
    // </SimpleGrid>
  );
};

export default BestSellerCards;
