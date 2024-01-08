import {
  Box,
  Container,
  Link,
  Stack,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import logoSm from "../../components/assets/logo-small.png";

export default function SmallCentered() {
  return (
    <Box bg={"blue.800"} color={useColorModeValue("gray.700", "gray.200")}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
        color={"yellow.50"}
      >
        <Image
          src={logoSm}
          height={"25px"}
          width={"25px"}
          alt="A white sprouting seedling (Company Logo)"
        ></Image>
        <Stack direction={"row"} spacing={6}>
          <Link href={"/"}>Home</Link>
          <Link href={"/our-story"}>Our Story</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact-us"}>Contact Us</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={"blue.700"}
        color={"yellow.50"}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2023 Matcha Plant Co. </Text>
        </Container>
      </Box>
    </Box>
  );
}
