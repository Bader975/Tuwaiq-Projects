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
import { MDBIcon } from "mdb-react-ui-kit";
import { SetStateAction, useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
function UserProjects() {
  return (
    <div>
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
      {/* <Divider orientation="vertical" /> */}
      <Text fontSize="lg" textAlign={"right"}  m={20}>
            {" "}
            مشاريعي
          </Text>
      <SimpleGrid columns={3}  textAlign={"right"} justifyContent='right'>
        

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
      
    </div>
  );
}

export default UserProjects;
