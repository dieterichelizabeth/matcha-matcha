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
          <Heading as="h1">Increasing Humidity for Your Plants</Heading>
          <BlogAuthor
            name="Penelope May"
            date={new Date("2023-04-20T19:01:27Z")}
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
              src={`/assets/blogs/photo-1521488357999-ff03ac2b5fd7.webp`}
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
            If you love houseplants, you know how important it is to keep them
            healthy and thriving all year round. During the cold, dry months,
            it's especially crucial to increase the humidity in your home to
            provide your plants with an ideal living environment.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Some indoor plants come from humid jungle environments. That's why
            it's vital to keep the air around them moist to keep them lush and
            healthy! Signs that your plants need more humidity may include brown
            edges on leaves, wilting, yellowing, and crispy foliage.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            But don't worry! I'm here to share some tips on how to increase the
            humidity for your plants. One option is to use a humidifier, which
            is not only great for your plants but also beneficial for you too,
            especially during the drier months. You can also mist your plants
            with a plant mister or use pebble trays to increase humidity around
            your plants.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Another tip is to create a microclimate by grouping several plants
            together, which will create a pocket of humidity. And don't forget
            to give your plants regular showers or baths during the winter
            months to enjoy the extra moisture and to clean any dust from the
            foliage where tiny pests like to hide.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Finally, you can place your plants in more humid rooms in your home,
            such as kitchens, bathrooms, and laundry rooms, during the drier
            months.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            I hope these tips help you keep your houseplants happy and healthy
            all year round!
          </Text>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Blog;
