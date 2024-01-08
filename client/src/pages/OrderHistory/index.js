import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import Footer from "../../components/Footer";
import OrderHistoryHeader from "../../components/OrderHistoryHeader";
import CategoryCards from "../../components/CategoryCards";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  chakra,
  Flex,
  Text,
  Stack,
  Heading,
} from "@chakra-ui/react";

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
      <OrderHistoryHeader />

      <main>
        <section className="page">
          <Accordion allowToggle>
            {user.orders[0] ? (
              <>
                {user.orders.map((order) => (
                  <Stack key={order._id} bg={"gray.50"}>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <chakra.span fontWeight={"600"}>
                              Order Number:{" "}
                            </chakra.span>
                            {order._id}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Text marginBottom={"20px"}>
                          <chakra.span fontWeight={"600"}>
                            Purchase Date:{" "}
                          </chakra.span>
                          {new Date(
                            parseInt(order.purchaseDate)
                          ).toLocaleDateString()}
                        </Text>
                        <hr></hr>
                        <Stack marginBottom={"20px"} marginTop={"20px"}>
                          {order.products.map(({ name, price, _id }, index) => (
                            <Flex alignItems={"center"} key={index}>
                              <Text marginRight={"10px"}>
                                <chakra.span fontSize={"10px"}>X</chakra.span>1
                              </Text>
                              <Link to={`/products/${_id}`} key={index}>
                                <Text>{name}</Text>
                                <Text>${price}</Text>
                              </Link>
                            </Flex>
                          ))}
                        </Stack>
                        <hr></hr>
                        <Text fontWeight={"600"} marginTop={"20px"}>
                          Total Paid: ${orderTotal(order)}
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  </Stack>
                ))}
              </>
            ) : (
              <Box>
                <Heading
                  textAlign={"center"}
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
                  color={"green.800"}
                >
                  It looks like you have no previous orders!
                </Heading>
                <Text
                  color={"green.800"}
                  fontWeight={600}
                  fontSize={{ base: "sm", sm: "md", lg: "xl" }}
                  textAlign={"center"}
                  marginTop={"20px"}
                >
                  Check out some of our plants by category
                </Text>
                <CategoryCards />
              </Box>
            )}
          </Accordion>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OrderHistory;
