import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";

export const BlogAuthor = (props) => {
  return (
    <HStack
      marginTop="2"
      spacing="2"
      display="flex"
      alignItems="center"
      justifyContent={"center"}
    >
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Blog = () => {
  return (
    <>
      <Container maxW={"7xl"} p="12" marginBottom={"50px"}>
        <Box textAlign={"center"} marginBottom={"50px"}>
          <Heading as="h1">Plant Care Guide for Beginners</Heading>
          <BlogAuthor
            name="Sana Sabrina"
            date={new Date("2023-11-25T19:01:27Z")}
          />
        </Box>

        {/* Blog Image */}
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
          width={{ base: "100%", md: "50%" }}
          margin={"auto"}
          marginBottom={"50px"}
        >
          <Box
            width={{ base: "100%", sm: "90%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Image
              borderRadius="lg"
              src={`/assets/blogs/photo-1583753075968-1236ccb83c66.webp`}
              alt="some good alt text"
              objectFit="cover"
              width={"100%"}
              maxH={"300px"}
            />
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(green.600 1px, transparent 1px)",
                "radial(green.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>

        <Box
          marginTop={{ base: "1", sm: "5" }}
          marginBottom={"50px"}
          maxW={"3xl"}
          margin={"auto"}
        >
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Hey there! Are you new to plant parenting? It's okay if you're
            feeling a little unsure about how to take care of your new plant,
            but don't worry, we've got you covered!
            <br></br>
            <br></br>
            Owning plants can be a relaxing and fun hobby, and anyone can
            develop a green thumb with the right information. So, let's dive
            into some key tips for new indoor plant owners:
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Tip #1: Get to know your plant. Every plant is unique and has
            different needs. But don't worry, you'll learn how to recognize
            these needs with time and experience. Some plants are
            low-maintenance and don't require much attention, while others need
            a bit more TLC. You can check out the care card that comes with your
            plant to learn more about your specific plant's preferences.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Tip #2: Don't water your plant too often. Overwatering is one of the
            most common mistakes new plant parents make. Most potted houseplants
            prefer their soil volume to dry out 50% to 75% of the way between
            waterings. So, be sure to check the soil moisture before watering
            and make sure your pot has a drainage hole to prevent your plant
            from sitting in soggy soil.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Tip #3: Choose the right spot. When it comes to indoor plants, it's
            all about the light! Different plants have different light exposure
            preferences, so it's important to choose the right spot for your
            plant.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Tip #4: Be patient! It's completely normal for your plant to take a
            few weeks to adjust to its new environment. If you notice a few
            leaves dropping off, don't worry! Just keep providing consistent
            soil moisture, lighting, and temperature, and you'll soon see new
            growth.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Tip #5: Ask for help If you're feeling unsure about how to care for
            your plant, don't hesitate to reach out to us! When you purchase a
            plant from Matcha Plant Co., you get free one-on-one expert advice
            from our Plant Support Team. We're here to support you every step of
            the way!
          </Text>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Blog;
