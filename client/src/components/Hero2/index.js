/**
 * Homepage "Guides and ResourceS" Section (under "Best Sellers" section)
 */
import { Flex, Heading, Link, Image, Stack, Text } from "@chakra-ui/react";

export default function GuidesAndResources() {
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
            We have everything you need to keep your plants healthy and happy.
            From fertilizer and plant food to potting mixes and more, we've got
            you covered. Shop now and watch your garden or indoor plant
            collection flourish!
          </Text>
          <Link href={"/Plant-Care-Guide-for-Beginners"}>
            <Text decoration={"underline"} color={"green.800"}>
              View Plant Care Guides
            </Text>
          </Link>
          <Link href={"/Contact-us"}>
            <Text decoration={"underline"} color={"green.800"}>
              Contact Us for a Plant Health Consultation
            </Text>
          </Link>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"A plant shop with different green plants sitting on the table."}
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
