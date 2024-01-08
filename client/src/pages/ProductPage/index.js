import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToLocalCart, updateLocalCartQtyPlusOne } from "../../utils/helpers";
import Footer from "../../components/Footer";
import DeatailIcons from "../../components/DetailIcons";
import { Link } from "react-router-dom";
import {
  chakra,
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

const Detail = () => {
  // Access and interact with the Redux Store
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const [product, setCurrentProduct] = useState({});

  // Use the id from the URL
  const { id } = useParams();

  useEffect(() => {
    // Find the product details from the Redux Store
    if (store.products[0]) {
      setCurrentProduct(store.products.find((product) => product._id === id));
    }

    // If the product is not in the redux store, check local storage
    // Example: if the user refreshes the page, use local storage to display the product
    else if (!store.products[0]) {
      let data = JSON.parse(window.localStorage.getItem("Matcha-Skincare"));

      // map through local storage products for a matching item._id
      data.products.products.map((item) => {
        if (id === item._id) {
          setCurrentProduct(item);
        }
        return item;
      });
    }
  }, [store.products, id]);

  // Breadcrumb
  const Breadcrumb = (
    <Box bg={"gray.50"} paddingLeft={"20px"}>
      <chakra.ul display={"Flex"} listStyleType={"none"}>
        <chakra.li
          marginRight={"6px"}
          color={"gray.500"}
          _hover={{ color: "gray.700" }}
        >
          <Link to="/shop">Shop /</Link>
        </chakra.li>
        <chakra.li>
          <Text>{product.name}</Text>
        </chakra.li>
      </chakra.ul>
    </Box>
  );

  const addToCart = () => {
    const alreadyInCart = store.cart.find((product) => product._id === id);

    if (alreadyInCart) {
      // If the product is already in the Users cart, increase Purchase Quantity
      dispatch({
        type: "updateCartQuantity",
        _id: product._id,
        purchaseQuantity: parseInt(alreadyInCart.purchaseQuantity) + 1,
      });

      // Open the cart and update the Local Storage copy
      dispatch({ type: "cartToggleOpen" });
      updateLocalCartQtyPlusOne(product);
    } else {
      // Else, add the product to cart
      dispatch({
        type: "addToCart",
        product: { ...product, purchaseQuantity: 1 },
      });

      // Open the cart and update the Local Storage copy
      dispatch({ type: "cartToggleOpen" });
      addToLocalCart(product);
    }
  };

  const GetProductDetails = () => {
    if (product.details) {
      const detailsArr = product.details.split(",");
      return (
        <>
          {detailsArr.map((detail, i) => (
            <DeatailIcons detail={detail} key={i} />
          ))}
        </>
      );
    } else return <></>;
  };

  return (
    <div>
      {Breadcrumb}

      <Container maxW={"7xl"} marginBottom={"100px"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 16 }}
        >
          {/* Product Images */}
          <Flex>
            {product.image ? (
              <Image
                rounded={"md"}
                alt={"product image"}
                src={`/assets/${product.image}`}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            ) : (
              <></>
            )}
          </Flex>

          {/* Product Text */}
          <Stack spacing={{ base: 6, md: 10 }}>
            {/* Description Header */}
            <Box as={"header"}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "xl", sm: "2xl" }}
                  color={"green.800"}
                >
                  {product.name}
                </Heading>
                <Text color={"green.800"} fontWeight={600} fontSize={"xl"}>
                  ${product.price} USD
                </Text>
              </Flex>
            </Box>

            {/* Additional Information */}
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text color={"green.800"} fontSize={"xl"} fontWeight={"300"}>
                  {product.description}
                </Text>
              </VStack>

              {/* Detail Icons */}
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={"green.700"}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Details
                </Text>

                <Stack>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <GetProductDetails />
                  </SimpleGrid>
                </Stack>
              </Box>

              {/* Product Details */}
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={"green.700"}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Care Guide
                </Text>

                <Text fontSize={"lg"} color={"gray.600"}>
                  {product.benefits}
                </Text>
              </Box>
            </Stack>

            {/* Add To Cart Button */}
            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("blue.800", "gray.50")}
              color={useColorModeValue("yellow.50", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={addToCart}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </div>
  );
};

export default Detail;
