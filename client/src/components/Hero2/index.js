import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SplitScreen() {
  return (
    <Stack
      height={{ base: "auto", lg: "450px" }}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", lg: "4xl" }}>
            <Text as={"span"} position={"relative"} color={"green.800"}>
              Plant Care Guide and Resources
            </Text>
            <br />
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"green.800"}>
            Find your plant care essentials at The Sill. Nourish your plants
            with fertilizer and plant food, potting mixes, and more. Shop all
            the tools you need to have a flourishing garden or healthy
            houseplant collection.
          </Text>
          <Text decoration={"underline"} color={"green.800"}>
            View Plant Care Guides
          </Text>
          <Text decoration={"underline"} color={"green.800"}>
            Contact Us for a Plant Health Consultation
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          height={"450px"}
          width={"100%"}
          src={
            "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
          }
        />
      </Flex>
    </Stack>
  );
}
