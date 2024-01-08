import React, { useState } from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Container maxW={"7xl"} minH={"75vh"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
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
                src={"/assets/jazmin-quaynor-QnGqi8Rd-DA-unsplash.jpg"}
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 7 }}>
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
              <Stack
                spacing={4}
                w={"full"}
                maxW={"md"}
                color={"green.800"}
                as={"form"}
                onSubmit={handleFormSubmit}
              >
                <Heading fontSize={"4xl"}>Contact Us</Heading>
                <Text color={"gray.700"}>
                  If you have questions for Matcha Plant Co., submit a message
                  to get in touch. Our Plant Support and Matcha-grow® Teams
                  respond within 24 hours of message submission!
                </Text>
                <FormControl id="name">
                  <FormLabel color={"green.700"}>Name</FormLabel>
                  <Input type="name" name="name" isRequired />
                </FormControl>
                <FormControl id="email">
                  <FormLabel color={"green.700"}>Email address</FormLabel>
                  <Input type="email" name="email" isRequired />
                </FormControl>
                <FormControl id="message">
                  <FormLabel color={"green.700"}>Message</FormLabel>
                  <Textarea type="message" name="message" isRequired />
                </FormControl>
                <Stack spacing={6}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  ></Stack>
                  <Button colorScheme={"gray"} variant={"solid"} type="submit">
                    Submit
                  </Button>

                  {submitted ? (
                    <Stack>
                      <Text color={"green.800"}>
                        Message sent! Thank you for reaching out, we'll be in
                        touch shortly.
                      </Text>
                    </Stack>
                  ) : null}
                </Stack>
              </Stack>
            </Flex>
          </Stack>
        </Stack>
      </Container>

      <Footer />
    </>
  );
}
