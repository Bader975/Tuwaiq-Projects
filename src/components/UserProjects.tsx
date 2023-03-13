import React from "react";
import axios from "axios";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
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
} from "@chakra-ui/react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { SetStateAction, useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import Nav from "./Nav";
import Footer from "./Footer";
function UserProjects() {
  return (
    <div>
         <nav>
      <Nav/>
      </nav>
      <SimpleGrid columns={3} textAlign={"right"} mb={10} mt={10} >
        
       
        <Box mr={50}>
         
            <Image
              h={20}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
              alt="Dan Abramov"
            />
          
          <Text fontSize="lg" mb={20}>
            {" "}
            اسم المطور
          </Text>
          <Text fontSize="lg"> نبذه عنه</Text>
        </Box>
        <div className="line"></div>
        <Box mr={5}>
          <Text fontSize="lg" mb={20}>
            {" "}
            معلومات التواصل
          </Text>
          <Text fontSize="lg" mb={20}>
            {" "}
            مهاراتي
          </Text>
          <Text fontSize="lg"> هواياتي</Text>
        </Box>
      </SimpleGrid>
      
      <hr />
      <Box ml={300} textAlign={"right"}>
          <Text fontSize="lg" m={20}>
            {" "}
            مشاريعي
          </Text>
          </Box>
      <SimpleGrid textAlign={"right"} gap={20} mx="auto" my={10} m={5} columns={{ base: 1, md: 2, lg: 4 }}>
        

        <Box mx={"auto"}>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">REACT TS </Heading>
                <Text>lorem ipsum dolor sit amet, consectetur adip</Text>
              </Stack>
            </CardBody>
            <Divider  />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="black">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>


        {/* --------------------------------------------------- */}


        <Box mx={"auto"}>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">REACT TS </Heading>
                <Text>lorem ipsum dolor sit amet, consectetur adip</Text>
              </Stack>
            </CardBody>
            <Divider  />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="black">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
        {/* -- ------------------------------------*/}
        <Box mx={"auto"}>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">REACT TS </Heading>
                <Text>lorem ipsum dolor sit amet, consectetur adip</Text>
              </Stack>
            </CardBody>
            <Divider  />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="black">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
        {/* -- ------------------------------------*/}
        <Box mx={"auto"}>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">REACT TS </Heading>
                <Text>lorem ipsum dolor sit amet, consectetur adip</Text>
              </Stack>
            </CardBody>
            <Divider  />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="black">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
      </SimpleGrid>
<<<<<<< HEAD
=======

       <footer>
        <Footer/>
       </footer>
>>>>>>> b71e71f30d88f9e7c35da6b3cb7ac9ccf9316088
    </div>
  );
}

export default UserProjects;
