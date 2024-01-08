import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { removeFromLocalCart } from "../utils/helpers";
import { ADD_ORDER } from "../utils/mutations";
import {
  chakra,
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const Success = () => {
  const [addOrder] = useMutation(ADD_ORDER);

  // Create an Order for the User and save to database
  // As each product is added to the 'Order', remove from local storage
  useEffect(() => {
    async function saveOrder() {
      const cart = await JSON.parse(
        window.localStorage.getItem("Matcha-Skincare-cart")
      );
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          removeFromLocalCart(item);
        });
      }
    }

    saveOrder();
  }, [addOrder]);

  return (
    <chakra.div>
      <Flex
        w={"full"}
        h={"75vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"top center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Thank you for your Purchase!
            </Text>
          </Stack>
          <Text textAlign={"center"} color={"white"} fontWeight={"bold"}>
            Your order is currently processing. Check your Order History for
            more details.
          </Text>

          <Flex justifyContent={"center"}>
            <Link to="/">
              <Button
                margin={"20px"}
                bg={"green.800"}
                color={"white"}
                _hover={{ bg: "green.700" }}
              >
                Back to Home
              </Button>
            </Link>
            <Link to="/orderHistory">
              <Button margin={"20px"}>View Order History</Button>
            </Link>
          </Flex>
        </VStack>
      </Flex>

      <Footer />
    </chakra.div>
  );
};

export default Success;
