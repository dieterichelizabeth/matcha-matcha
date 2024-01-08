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
          " With our innovative packaging technology, we can guarantee that your plant will arrive safely and without any mess. We use recycled and/or biodegradable materials so you can feel good about your purchase."
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
          "We take pride in providing high-quality, fully-grown indoor plants that come with a 30-day guarantee. You can trust that each plant we send out is carefully chosen and handled with care."
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
          "Our Matcha-grow® Team is always available to chat with you and answer any questions you may have. We'll provide you with detailed care instructions and offer real-time support to make sure your plant thrives."
        }
      />
    </SimpleGrid>
  );
};

export default Offers;
