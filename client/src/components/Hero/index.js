import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"90vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1581782404271-b51b71af50e9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        alignItems={"start"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
          >
            Find Your New Favorite Plant
          </Text>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "lg", md: "2xl" })}
          >
            Brouse our beautiful potted houseplants, shipped from our greenhouse
            and guaranteed for 30 days.
          </Text>
          <Stack direction={"row"}>
            <Link to={"/shop"}>
              <Button
                bg={"blue.800"}
                rounded={"full"}
                color={"yellow.50"}
                _hover={{ bg: "blue.700" }}
                padding={"20px 30px"}
              >
                Shop All Plants
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
