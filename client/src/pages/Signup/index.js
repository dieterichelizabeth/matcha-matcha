import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Box,
  InputGroup,
  InputRightElement,
  Input,
  Link,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);

  // Form State
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // On form submit, attempt to create a new user
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUserResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });

      const token = newUserResponse.data.addUser.token;
      // Login the new user
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
            <Heading fontSize={"4xl"}>Create Your Account</Heading>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" name="firstName" onChange={handleChange} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name="lastName" onChange={handleChange} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" onChange={handleChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
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
                    Something went wrong with creating your account. Please try
                    again.
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
