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
          <Heading as="h1">Common Plant Care Mistakes</Heading>
          <BlogAuthor
            name="Sana Sabrina"
            date={new Date("2023-12-06T19:01:27Z")}
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
              src={`/assets/blogs/andrew-keymaster-ytvRxnK3vCE-unsplash.webp`}
              alt="some good alt text"
              objectFit="contain"
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
            Hey there, fellow plant parent! We know how exciting it can be to
            bring a new plant home, but caring for it can also be a bit
            daunting. That's why we're here to help you avoid some of the most
            common mistakes that new plant parents make. Let's dive in!
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            1. First up, overwatering. It's natural to think that more water is
            better, but each plant has its own water preferences. So, be sure to
            research how much water your plant species requires. We suggest
            using plant care guides to get to know your plant's individual
            needs.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            2. Next, let's talk about keeping your plant's foliage clean. Dust
            and debris can accumulate on leaves and make it harder for your
            plant to photosynthesize efficiently. To prevent this, give your
            plant a gentle wipe-down with a wet cloth or microfiber dusting
            gloves. It's also a great opportunity to check for any insect
            infestations or other issues.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            3. Healthy roots are crucial for a healthy plant, but they can be
            easy to forget about since they're hidden away in the soil. If your
            plant is struggling, check its roots for issues. Overwatered roots
            will be brown or black and slimy, while underwatered roots will be
            dry and brittle. If your plant is rootbound, it's time to give it a
            little extra love with a repotting or root pruning.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            4. Fertilizer is key to promoting healthy foliage, strong roots and
            flowering. You'll want to fertilize your houseplants during periods
            of active growth, usually in the spring and summer months. If your
            plant is struggling during the winter, try fertilizing in the spring
            once you see new growth.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            5. Plants love stability, so try to find a permanent spot for your
            plant to thrive. Moving it around can cause it to readjust to new
            light levels and temperatures, which can pause growth. Only move
            your plant if it's not happy in its current spot.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            6. Lastly, take the time to get to know your plant. Each plant has
            specific needs when it comes to watering frequency, soil type, and
            light requirements. Research your plant's origin and preferences to
            ensure you're giving it the proper care it needs. With a little bit
            of research and TLC, you'll have a happy and healthy plant in no
            time!
          </Text>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Blog;
