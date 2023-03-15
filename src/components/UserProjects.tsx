import React from "react";
import axios from "axios";
import "../App.css";
 import { Link as LinkRout } from "react-router-dom";

import {
  Text,
  SimpleGrid,
  Box,
  Spinner,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Grid,
  GridItem,
  chakra,
  Image,
  Flex,
  Icon,
  Button,
  HStack,
  InputLeftElement,
  InputGroup,
  Heading,
  Divider,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Link,
} from "@chakra-ui/react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { ChevronLeftIcon, Search2Icon } from "@chakra-ui/icons";

import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { SetStateAction, useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
function UserProjects() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <SimpleGrid columns={2} textAlign={"right"} mb={10} mt={10}>
        <Box pr={2}>
          <Box display={"flex"} justifyContent={"center"}>
            <SimpleGrid>
              <Image
                h={20}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
                alt="Dan Abramov"
              />
              <Box minH={20}>
                <Heading fontSize="lg"> اسم المطور</Heading>
              </Box>
            </SimpleGrid>
          </Box>

          <Box minH={20}>
            <Heading fontSize="lg"> نبذه عني</Heading>
          </Box>
        </Box>

        <Box borderRight={"solid 1px lightgray"} pr={5}>
          {/* معلومات التواصل */}
          <Box mb={5}>
            <Heading fontSize="lg" mb={2}>
              {" "}
              معلومات التواصل
            </Heading>
            <Text fontWeight={"bold"} m={1} display={"inline"}>
              رقم الهاتف:
            </Text>
            <Text display={"inline"}>067287287</Text>
            <Box></Box>
            <Text fontWeight={"bold"} m={1} display={"inline"}>
              حساب لينكد إن:
            </Text>
            <Text display={"inline"}>hatimlinked</Text>
          </Box>
          {/*    مهاراتي */}
          <Box mb={2} minH={20}>
            <Heading fontSize="lg" mb={2} minH={15}>
              {" "}
              المهارات
            </Heading>
          </Box>
          <Box mb={2} minH={20}>
            <Heading fontSize="lg" mb={2}>
              {" "}
              الهوايات
            </Heading>
            <Text>الرسم, السباحه</Text>
          </Box>
        </Box>
      </SimpleGrid>

      <hr />
      <Box textAlign={"right"}>
        {/* معلومات التواصل */}
        <Box>
          <Heading fontSize="lg" m={20}>
            {" "}
            مشاريعي
          </Heading>
        </Box>
      </Box>
      <SimpleGrid
        spacingX={5}
        spacingY={5}
        mx="auto"
        m={100}
        mt={10}
        columns={{ base: 1, md: 2, lg: 3 }}
      >
         
        <Box>
          <Flex
            _dark={{ bg: "#3e3e3e" }}
            w="full"
            alignItems="center"
            justifyContent="center"
            textAlign={"right"}
          >
            <Box
              mx="auto"
              rounded="lg"
              shadow="md"
              bg="white"
              _dark={{ bg: "gray.800" }}
              maxW="2xl"
            >
              <Image
                roundedTop="lg"
                w="full"
                h={64}
                fit="cover"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Article"
              />

              <Box p={6}>
                <Box>
                  <chakra.span
                   display="block"
                    fontSize="xs"
                    textTransform="uppercase"
                    color="brand.600"
                    _dark={{ color: "brand.400" }}
                  >
                    المعسكر
                  </chakra.span>
                  <Link
                    display="block"
                    color="gray.800"
                    _dark={{ color: "white" }}
                    fontWeight="bold"
                    fontSize="2xl"
                    mt={2}
                    _hover={{ color: "gray.600", textDecor: "underline" }}
                  >
                    اسم المشروع {" "}
                  </Link>
                </Box>
                <Divider borderColor={"blackAlpha.500"} mt={5} />

                <Box mt={4}>
                  <Flex alignItems="center">
                    <Link
                      mx={2}
                      mr={20}
                      fontWeight="bold"
                      color="gray.700"
                      _dark={{ color: "gray.200" }}
                    >
                      التفاصيل
                      <ChevronLeftIcon />
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default UserProjects;
