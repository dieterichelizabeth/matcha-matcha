import React from "react";
import Footer from "../../components/Footer";
import graphic from "../../components/assets/404-graphic.png";
import { Image, Box, Flex, Heading, Text } from "@chakra-ui/react";
import CategoryCards from "../../components/CategoryCards";

const NoMatch = () => {
  return (
    <>
      <section>
        <Box minHeight={"75vh"}>
          <Flex justifyContent={"center"}>
            <Image src={graphic} alt="404 page not found" width={"300px"} />
          </Flex>
          <Heading
            textAlign={"center"}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
            color={"green.800"}
          >
            Oops! Looks like we can't find that page.
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
      </section>
      <Footer />
    </>
  );
};

export default NoMatch;
