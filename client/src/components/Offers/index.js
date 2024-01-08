/**
 * "Offers" Section copmonent
 * used on the "Shop" page (3 cards below the products)
 */
import React from "react";
import { SimpleGrid, Image, Text, Stack, Flex } from "@chakra-ui/react";
import shippingImg from "../assets/vadim-kaipov-tZE2tTDQ6Zo-unsplash.webp";
import guarenteeImg from "../assets/vadim-kaipov-8ZELrodSvTc-unsplash.webp";
import guidanceImg from "../assets/lucas-hoang-lCNlFAuS050-unsplash.webp";

const Offers = () => {
  const Feature = ({ title, text, icon }) => {
    return (
      <Stack>
        <Flex
          w={300}
          h={200}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"gray.100"}
          mb={1}
        >
          {icon}
        </Flex>
        <Text fontWeight={600} color="green.800" fontSize={"xl"}>
          {title}
        </Text>
        <Text color={"gray.600"}>{text}</Text>
      </Stack>
    );
  };

  return (
    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
      <Feature
        icon={
          <Image
            src={shippingImg}
            alt="Beauty Product"
            height={"200px"}
            width={"300px"}
            objectFit={"cover"}
            loading="lazy"
          />
        }
        title={"Innovative Shipping"}
        text={
          "Our unique packaging technology — made mostly from recycled and/or biodegradable materials — holds your plant securely in place so it arrives safely and without the mess."
        }
      />
      <Feature
        icon={
          <Image
            src={guarenteeImg}
            alt="Beauty Product"
            height={"200px"}
            width={"300px"}
            objectFit={"cover"}
            loading="lazy"
          />
        }
        title={"Quality Plants Guaranteed"}
        text={
          "From our tabletop collections to our XL  Money Trees, our fully-grown and potted indoor plants come with a 30-day guarantee."
        }
      />
      <Feature
        icon={
          <Image
            src={guidanceImg}
            alt="Beauty Product"
            height={"200px"}
            width={"300px"}
            objectFit={"cover"}
            loading="lazy"
          />
        }
        title={"Plenty of Guidance"}
        text={
          "From detailed care instructions to real-time support, we’re here to make plants easy. Chat with our plant care experts on the Grow-How® Team for help."
        }
      />
    </SimpleGrid>
  );
};

export default Offers;
