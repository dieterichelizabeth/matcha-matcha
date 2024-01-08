import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";

export default function OurStory() {
  return (
    <>
      <Container maxW={"7xl"} minH={"75vh"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 7 }}>
            <Heading
              lineHeight={1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
              color={"green.800"}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "5%",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  bg: "green.800",
                  zIndex: -1,
                }}
              >
                Our Mission is to give more green.
              </Text>
            </Heading>
            <Text color={"gray.800"}>
              We're a company that's dedicated to helping plant lovers find the
              healthiest and most beautiful plants without any hassle!
            </Text>
            <Text color={"gray.800"}>
              We deliver plants right to your door and provide you with all the
              tips and tricks you need to help them thrive. Our plants are grown
              and cared for by experts, so you can rest assured that they're
              healthy and strong before we ship them to you.
            </Text>
            <Text color={"gray.800"}>
              When you buy a plant from a nursery, it may not get the care it
              needs to stay healthy during the long journey from the greenhouse
              to the store. But with Matcha Plant Co., our plants are shipped
              directly to you, which means they arrive at your doorstep healthy
              and ready to grow!
            </Text>
            <Text color={"gray.800"}>
              So, if you're ready to bring a little more green into your life,
              let Matcha Plant Co. help you out. We believe that plants make
              life better, and we're here to make it easy for you to enjoy them!
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"400px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"/assets/lawrence-aritao-k2sTHzAnmfY-unsplash.jpg"}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>

      <Footer />
    </>
  );
}
