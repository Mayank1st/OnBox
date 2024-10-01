"use client";

import React from "react";
import {
  Box,
  Button,
  Flex,
  Stack,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Image,
  VStack,
} from "@chakra-ui/react";

export default function Register() {
  const bg = useColorModeValue("gray.100", "gray.900");
  const boxBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={bg}
      p={6}
    >
      <Box
        maxW={"lg"}
        w={"full"}
        bg={boxBg}
        boxShadow={"lg"}
        rounded={"lg"}
        p={8}
      >
        <VStack spacing={6} align={"center"} textAlign={"center"}>
          <Heading fontSize={"2xl"} color={textColor}>
            Create a new account
          </Heading>

          <Button
            w={"full"}
            maxW={"md"}
            variant={"outline"}
            leftIcon={
              <Image
                src={"https://www.svgrepo.com/show/475656/google-color.svg"}
                alt="Google Logo"
                boxSize={5}
              />
            }
          >
            Sign up with Google
          </Button>

          <Button
            w={"full"}
            colorScheme={"blue"}
            type="submit"
          >
            Create an account
          </Button>

          <Text color={textColor}>
            Already have an account?{" "}
            <Link href="/login" color={"blue.400"}>
              Sign In
            </Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}
