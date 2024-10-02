"use client";

import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; 
import axiosInstance from "../utils/axiosInstance";

export default function Register() {
  const bg = useColorModeValue("gray.100", "gray.900");
  const boxBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGoogleSignUp = async () => {
    // Redirect directly to the backend Google auth endpoint
    window.location.href = "http://onbox-1.onrender.com/auth/google";
  };

  const fetchUserData = async () => {
    try {
      const response = await axiosInstance.get("/me"); // Fetch user data
      console.log("User Data:", response.data); // Log the user data
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // You can call fetchUserData here if the user is redirected back after login
  // (e.g., use a useEffect with a dependency on an authentication state)

  return (
    <Flex minH={"80vh"} align={"center"} justify={"center"} bg={bg} p={6}>
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
            onClick={handleGoogleSignUp} // Directly redirect to backend Google auth route
          >
            Sign up with Google
          </Button>

          <Button w={"full"} colorScheme={"blue"} type="submit">
            Create an account
          </Button>

          <Text color={textColor}>
            Already have an account?{" "}
            <Text
              as="span"
              color={"blue.400"}
              onClick={() => navigate("/login")}
              style={{ cursor: "pointer" }}
            >
              Sign In
            </Text>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}
