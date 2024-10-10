"use client";

import {
  Flex,
  Stack,
  Avatar,
  Heading,
  Box,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
  FormHelperText,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthType, AuthSchema } from "@/schemas";
import { useAuthContext } from "@/providers/authProviders";

export function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const { user, onSignup } = useAuthContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AuthType>({
    resolver: zodResolver(AuthSchema),
    mode: "all",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = async (data: AuthType) => {
    try {
      setLoading(true);
      onSignup(data.email, data.password);
    } catch (error) {
      console.error("Erreur d'enregistrement :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex flexDirection="column" width="100wh" height="100vh">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="blue.500" />
        <Heading color="blue.400"></Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                aria-label="Search database"
                height={"40px"}
                w={"150px"}
                rounded={"full"}
              >
                S&apos;enregistrer
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Signup;
