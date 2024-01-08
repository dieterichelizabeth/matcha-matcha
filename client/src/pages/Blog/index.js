import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";
import { Link as MyLink } from "react-router-dom";

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Blog = () => {
  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <MyLink
                to={"/Common-Plant-Care-Mistakes"}
                aria-label="Go to Common Plant Care Mistakes Blog Post"
              >
                <Image
                  borderRadius="lg"
                  src={`/assets/blogs/andrew-keymaster-ytvRxnK3vCE-unsplash.webp`}
                  alt="some good alt text"
                  objectFit="cover"
                  maxH={"340px"}
                  width={"100%"}
                />
              </MyLink>
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
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <Heading marginTop="1">
              <MyLink
                to={"/Common-Plant-Care-Mistakes"}
                aria-label="Go to Common Plant Care Mistakes Blog Post"
              >
                Common Plant Care Mistakes
              </MyLink>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              We know how exciting it can be to bring a new plant home, but
              caring for it can also be a bit daunting. That's why we're here to
              help you avoid some of the most common mistakes that new plant
              parents make.
            </Text>
            <BlogAuthor
              name="Sana Sabrina"
              date={new Date("2023-12-06T19:01:27Z")}
            />
          </Box>
        </Box>
        <Heading as="h2" marginTop="5">
          Latest articles
        </Heading>
        <Divider marginTop="5" />
        <Wrap spacing="30px" marginTop="5" marginBottom={"20"}>
          {/* Blog 1 */}
          <WrapItem width={{ base: "100%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <MyLink
                  to={"/Plant-Care-Guide-for-Beginners"}
                  aria-label="Go to Plant Care Guide for Beginners Blog Post"
                >
                  <Image
                    transform="scale(1.0)"
                    src={`/assets/blogs/photo-1583753075968-1236ccb83c66.webp`}
                    alt="some text"
                    objectFit="cover"
                    width="100%"
                    maxH={"235px"}
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </MyLink>
              </Box>

              <Heading fontSize="xl" marginTop="6">
                <MyLink
                  to={"/Plant-Care-Guide-for-Beginners"}
                  aria-label="Go to Plant Care Guide for Beginners Blog Post"
                >
                  Plant Care Guide for Beginners
                </MyLink>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                Are you new to plant parenting? It's okay if you're feeling a
                little unsure about how to take care of your new plant, but
                don't worry, we've got you covered!
              </Text>
              <BlogAuthor
                name="Sana Sabrina"
                date={new Date("2023-11-25T19:01:27Z")}
              />
            </Box>
          </WrapItem>

          {/* Blog 2 */}
          <WrapItem width={{ base: "100%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <MyLink
                  to={"/Battling-Yellow-Leaves"}
                  aria-label="Go to  Battling Yellow Leaves Blog Post"
                >
                  <Image
                    transform="scale(1.0)"
                    src={`/assets/blogs/photo-1562838089-9d088a1da4d5.webp`}
                    alt="some text"
                    width="100%"
                    objectFit="cover"
                    maxH={"235px"}
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </MyLink>
              </Box>

              <Heading fontSize="xl" marginTop="6">
                <MyLink
                  to={"/Battling-Yellow-Leaves"}
                  aria-label="Go to  Battling Yellow Leaves Blog Post"
                >
                  Battling Yellow Leaves
                </MyLink>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                If your plant's leaves are turning yellow, there could be a few
                things causing the issue. We understand how concerning it can
                be, so we'd love to help you work through what could be causing
                the issue and how you can get your plant back on track.
              </Text>
              <BlogAuthor
                name="Aysha Leonie"
                date={new Date("2023-09-15T19:01:27Z")}
              />
            </Box>
          </WrapItem>

          {/* Blog 3 */}
          <WrapItem width={{ base: "100%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <MyLink
                  to={"/Increasing-Humidity-for-Your-Plants"}
                  aria-label="Go to Increasing Humidity for Your Plants Blog Post"
                >
                  <Image
                    transform="scale(1.0)"
                    src={`/assets/blogs/photo-1521488357999-ff03ac2b5fd7.webp`}
                    alt="some text"
                    objectFit="cover"
                    width="100%"
                    maxH={"235px"}
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </MyLink>
              </Box>

              <Heading fontSize="xl" marginTop="6">
                <MyLink
                  to={"/Increasing-Humidity-for-Your-Plants"}
                  aria-label="Go to Increasing Humidity for Your Plants Blog Post"
                >
                  Increasing Humidity for Your Plants
                </MyLink>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                If you love houseplants, you know how important it is to keep
                them healthy and thriving all year round. During the cold, dry
                months, it's especially crucial to increase the humidity in your
                home to provide your plants with an ideal living environment.
              </Text>
              <BlogAuthor
                name="Penelope May"
                date={new Date("2023-04-20T19:01:27Z")}
              />
            </Box>
          </WrapItem>
        </Wrap>
      </Container>

      <Footer />
    </>
  );
};

export default Blog;
