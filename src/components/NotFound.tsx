import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import {
  Grid,
  GridItem,
  Heading,
  Input,
  Button,
  Box,
  Image,
  Stack,
  Text,
  useToast,
  InputGroup,
  InputRightAddon,
  Checkbox,
  HStack,
  VStack,
  Link,
} from "@chakra-ui/react";
function NotFound() {
  return (
    <>
    <Box textAlign="center">
      <Heading as="h1" fontSize="6xl">
        404
      </Heading>
      <Text fontSize="2xl" fontWeight="bold">
        Page not found
      </Text>
      <Text mt={4}>
        Sorry, we couldn't find the page you were looking for.
      </Text>
      <ChakraLink to="/" as={RouterLink} color="blue.500" mt={4} display="inline-block">
        Go back to home
      </ChakraLink>
    </Box>
    </>
  )
}

export default NotFound