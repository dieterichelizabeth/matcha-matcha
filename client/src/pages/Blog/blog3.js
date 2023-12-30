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
          <Heading as="h1">Battling Yellow Leaves</Heading>
          <BlogAuthor
            name="Aysha Leonie"
            date={new Date("2023-09-15T19:01:27Z")}
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
              src={`/assets/blogs/photo-1562838089-9d088a1da4d5.webp`}
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
            If your plant's leaves are turning yellow, there could be a few
            things causing the issue. We understand how concerning it can be, so
            we'd love to help you work through what could be causing the issue
            and how you can get your plant back on track. Below are some of the
            most common causes of yellow leaves:
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            1. Watering Issues: Yellow leaves are often caused by watering too
            often, but some plants can also get yellow leaves when they are
            under-watered or watered too infrequently. So, it is important to
            maintain ideal soil moisture for your plant. To keep your plant
            lush, water evenly all the way around the pot. Water thoroughly
            until it drips out the bottom of the pot into the saucer. After a
            few minutes, discard any excess water to avoid soggy soil and 'wet
            feet' which can lead to root rot.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            2. Improper Lighting: Many plants can tolerate low light areas, but
            if the light is too low, this can cause the leaves to turn yellow.
            If you suspect your plant is not getting enough light, try moving it
            to a spot with bright, indirect sunlight. Bright indirect light can
            be found next to an east-facing window or a few feet back from an
            unobstructed southern or western window. If your plant loves the
            sun, you may want to acclimate it to a spot with direct sunlight.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            3. Pests: Yellowing leaves could be a sign that there are pests
            lurking on your plant. Pests such as mealybugs, spider mites, and
            aphids feed on the sap from your plant's leaves which weakens the
            plant and can lead to discoloration. Keep an eye out for signs such
            as fine webbing, thin black dots or clusters of small white dots on
            the underside of the leaves, cotton-like tufts, hard bumps on the
            leaves or stems, and sticky residue on the leaves. If you see any of
            these signs, start pest treatment immediately.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            4. Nutrient Deficiency: With severe chlorosis, the leaves, affected
            branches or the entire plant may die. The most common nutrient
            problem associated with chlorosis is a lack of iron, but yellowing
            may also be caused by manganese, zinc, or nitrogen deficiencies. So,
            if your plant is putting out new growth, fertilize during the
            growing season. Any balanced indoor plant food with micronutrients
            should work just fine! Always follow the directions on the label.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            5. Rootbound: Another thing to consider is whether your plant is
            outgrowing its current pot. If so, it may be becoming root bound.
            Root bound conditions can happen when the plant has grown so many
            roots that there is no more room to expand. This means the roots are
            taking up too much room in the current pot that there is not a
            balanced soil-to-root ratio. This inhibits your plant from taking up
            the proper amount of water and nutrients it needs which can lead to
            discolored, yellow leaves. To tell if your plant is root bound, look
            for roots creeping up along the top of the soil or growing through
            the drainage holes at the bottom of the pot.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            6. Normal Leaf Life Cycle: Some yellowing is normal! If there is new
            growth on your plant and the yellowing leaves are older,
            particularly at the bottom of the plant, this yellowing is natural.
            Your plant sheds its old leaves and sends energy to new growth! You
            can simply trim any old leaves off to help your plant focus its
            energy on new and healthy growth.
          </Text>
          <Text
            as="p"
            marginTop="10"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Get Your Plant Back on Track: Your plant should be able to recover
            once you figure out the culprit that is causing the yellowing
            leaves. Adjust your care accordingly and prune off any leaf that is
            more than 50% discolored using a clean pair of scissors or pruning
            shears.
          </Text>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Blog;
