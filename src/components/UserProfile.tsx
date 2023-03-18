

import React, {useState, useEffect} from 'react';
import "../App.css";
import { Link as LinkRout, useParams } from "react-router-dom";
import {
  Text,
  SimpleGrid,
  Box,
  Heading,
  Divider,
  IconButton,
} from "@chakra-ui/react";

import {
  MdContactPhone,
} from "react-icons/md";
import Nav from "./Nav";
import Footer from "./Footer";
import { FaUserAlt } from "react-icons/fa";
function UserProfile() {
  const [data, setData] = React.useState<any[]>([]);
  const [user, setUser] = React.useState<any>([]);

  const { id } = useParams();

    // fetch data
    const getUserProfile = async () => {
      const data = await (
        await fetch(`http://localhost:3008/profile/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();
     
      // set state when the data received
      setData(data.profile);
     setUser(data.profile.user)
     
     getUserProfile();
    };

console.log(data);

   useEffect(() => {
      // fetch data
  console.log("aaaaaaaaaaaaaaaaaaaaaa");
  getUserProfile();
  
    }, []);


  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <SimpleGrid columns={2} textAlign={"right"} m={10} mt={20}>
        <Box
          pr={5}
          pt={5}
          h={400}
          mb={10}
          rounded="lg"
          shadow="md"
          bg="white"
          width={"full"}
          minH={"40vh"}
          _dark={{ bg: "gray.800" }}
        >
          <Box alignContent={"center"}>
            <Box float={"right"}>
              <IconButton
                fontSize={"3xl"}
                borderRadius={"50%"}
                color={"#00ADBB"}
                p={5}
                px={"17px"}
                py={8}
                _hover={{ color: "none", backgroundColor: "none" }}
                bg={"#DBF0F7"}
                aria-label=""
                icon={<FaUserAlt />}
              />
            </Box>

            <Text
              mt={5}
              mr={4}
              color={"#00ADBB"}
              fontSize={"xl"}
              fontWeight={"bold"}
              float={"right"}
            >
              معلومات عامة
            </Text>
            <p className="ayaa"></p>
          </Box>
          <Box mr={5}>
            <Box fontSize="lg">
              <Text mt={10}> الاسم : {user.name}</Text>
              <Divider />

              <Text mt={10}> السيرة : {data.aboutMy}</Text>
              <Divider />

              <Text mt={10}> المهارات: {data.skill}</Text>
              <Divider />
            </Box>
          </Box>
        </Box>
        <Box pr={5}>
          <Box
            pr={5}
            pt={5}
            h={400}
            mb={10}
            rounded="lg"
            shadow="md"
            bg="white"
            width={"full"}
            minH={"40vh"}
            _dark={{ bg: "gray.800" }}
          >
            <Box alignContent={"center"}>
              <Box float={"right"}>
                <IconButton
                  fontSize={"3xl"}
                  borderRadius={"50%"}
                  color={"#00ADBB"}
                  p={5}
                  px={"17px"}
                  py={8}
                  _hover={{ color: "none", backgroundColor: "none" }}
                  bg={"#DBF0F7"}
                  aria-label=""
                  icon={<MdContactPhone />}
                />
              </Box>

              <Text
                mt={5}
                mr={4}
                color={"#00ADBB"}
                fontSize={"xl"}
                fontWeight={"bold"}
                float={"right"}
              >
                معلومات التواصل
              </Text>
              <p className="ayaa"> </p>
            </Box>

            <Box mr={5}>
              <Box fontSize="lg">
                <Text mt={10}> البريد الإلكتروني : {data.user.email} </Text>
                <Divider />

                <Text mt={10}> رقم الهاتف : {data.phone_number}</Text>
                <Divider />

                <Text mt={10}> حساب ليكند إن: {data.twitterURL}</Text>
                <Divider />
              </Box>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>

      <hr />
      <Box textAlign={"right"}>
        {/* معلومات التواصل */}
        <Box>
          <Heading fontSize="xl" m={20} mt={10}>
            {" "}
            المشاريع الخاصة به
          </Heading>
        </Box>
      </Box>
      {/* <SimpleGrid
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
              h={420}
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
                    اسم المشروع{" "}
                  </Link>
                </Box>

                <Box mt={4} float={"left"}>
                  <Flex>
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
      </SimpleGrid> */}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default UserProfile;
