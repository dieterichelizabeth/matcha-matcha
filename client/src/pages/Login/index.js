import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";

export default function Login() {
  const [login, { error }] = useMutation(LOGIN);

  // Form State
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // On form submit, attempt to login the user
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginUser = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = loginUser.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Stack minH={"83vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            color={"green.800"}
            as={"form"}
            onSubmit={handleFormSubmit}
          >
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel color={"green.700"}>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                isRequired
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel color={"green.700"}>Password</FormLabel>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                isRequired
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={"gray"} variant={"solid"} type="submit">
                Sign in
              </Button>

              {error ? (
                <Stack>
                  <Text color={"red.500"}>
                    Incorrect Login Email or Password. Please try again.
                  </Text>
                </Stack>
              ) : null}
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            maxH={"90vh"}
            width={"100%"}
            src={
              "https://images.unsplash.com/photo-1605351720698-6cfec9eb9b5e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </Flex>
      </Stack>

      <Footer />
    </div>
  );
}
