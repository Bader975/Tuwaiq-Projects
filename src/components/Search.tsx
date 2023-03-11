import React from "react";
import axios from "axios";
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
} from "@chakra-ui/react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { MDBIcon } from "mdb-react-ui-kit";

import { SetStateAction, useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
function Search() {
  const navigate = useNavigate();
  const [data, setData] = React.useState<any[]>([]);
  const [id, setId] = React.useState<number>();
  const [showElement, setShowElement] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB")
      .then((res) => {
        setData(res.data);
        console.log(data);
      });
  }, []);
  // Spinner time
  React.useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 1000);
  }, []);

  const [filteredList, setFilteredList] = useState(data);

  const [title, settitle] = useState("");
  const [companyName, setCompanyName] = React.useState("");

  const filter = (filteredData: any[]) => {
    if (!companyName) {
      return filteredData;
    }

    const filtereddata = filteredData.filter(
      (data: { companyName: any }) =>
        data.companyName
          .split(" ")
          .toString()
          .toLowerCase()
          .indexOf(companyName) !== -1
    );
    return filtereddata;
  };

  const handleBrandChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCompanyName(e.target.value);
  };

  useEffect(() => {
    let filteredData = filter(data);
    setFilteredList(filteredData);
  });

  return (
    <div className="search">

      {showElement ? (
        <div className="spinner">
          <Spinner
            boxSize="6rem"
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            ml={"auto"}
          />
        </div>
      ) : (
        <></>
      )}
      <Box w={"25%"} m={"auto"}>
        <InputGroup
          display={{
            lg: "block",
          }}
          ml="auto"
        >
          <InputLeftElement pointerEvents="none">
            <Search2Icon />
          </InputLeftElement>

          <Input
            variant="outline"
            w={"full"}
            shadow={"xl"}
            placeholder="Search For Company"
            value={companyName}
            onChange={handleBrandChange}
          />
        </InputGroup>
      </Box>
      <Box>
        {/*Start of Grid body */}
        <SimpleGrid
          borderColor={"blackAlpha.200"}
          borderRadius={"2xl"}
          mx="auto"
          columns={{ base: 1, md: 2, lg: 4 }}
        >
          {filteredList.map((data, index) => (
            <div className="bg-image hover-zoom">
              <Link to={`/details/${data.id}`}>
                <GridItem key={data.id}>
                  <Flex
                    // bg="#edf3f8"
                    rounded="lg"
                    display="Flex"
                    _dark={{ bg: "#3e3e3e" }}
                    p={5}
                    mx={"auto"}
                    w="xs"
                    h={"lx"}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      w="xs"
                      bg="white"
                      _dark={{ bg: "gray.800" }}
                      shadow="xl"
                      rounded="lg"
                      overflow="hidden"
                      mx="auto"
                      h={"lx"}
                    >
                      <Flex alignItems="center" px={0} py={3} bg="#fff"></Flex>
                      <Image
                        w="full"
                        h={56}
                        fit="cover"
                        src={data.photo}
                        alt="avatar"
                        rounded="sm"
                      />

                      <Box py={4} px={3} alignItems="center">
                        {/* <chakra.h1
                      display="block"
                      fontSize="2xl"
                      color="gray.800"
                      _dark={{ color: "white" }}
                      fontWeight="bold"
                      alignItems="center"
                
                    >
         
                    </chakra.h1> */}
                        <Flex
                          alignItems="center"
                          px={6}
                          py={2}
                          bg="green.400"
                          color={"white"}
                          rounded={"lg"}
                        >
                          <chakra.h1
                            mx={"auto"}
                            color="balck"
                            fontWeight="bold"
                            fontSize="2xl"
                          >
                            {data.companyName}
                          </chakra.h1>
                        </Flex>
                        <chakra.span
                          fontSize="sm"
                          color="gray.800"
                          _dark={{ color: "gray.200" }}
                        >
                          <chakra.h1 fontSize={"18px"} fontWeight="bold" mt={5}>
                            Conference:
                          </chakra.h1>
                          <chakra.h1 fontSize={"16px"} mt={2}>
                            {data.conference}
                          </chakra.h1>
                          <chakra.h1 fontSize={"18px"} fontWeight="bold" mt={2}>
                            Annual Income:
                          </chakra.h1>
                          <chakra.h1 fontSize={"18px"} mt={1}>
                            {data.annualIncome}{" "}
                          </chakra.h1>
                          <chakra.h1 fontSize={"18px"} fontWeight="bold" mt={2}>
                            investment Price:
                          </chakra.h1>
                          <chakra.h1 fontSize={"18px"} mt={2}>
                            {" "}
                            {data.investmentPrice}
                          </chakra.h1>
                          <chakra.h1 fontSize={"18px"} fontWeight="bold" mt={2}>
                            Location:
                          </chakra.h1>
                          <chakra.h1 fontSize={"18px"} mt={2}>
                            {" "}
                            {data.location}
                          </chakra.h1>
                          <chakra.h1 fontSize={"18px"} fontWeight="bold" mt={2}>
                            {" "}
                            Business Field:{" "}
                          </chakra.h1>
                          <chakra.h1 fontSize={"18px"} mt={2}>
                            {" "}
                            {data.business}
                          </chakra.h1>

                          <Link to={`/details/${data.id}`}>
                            <Button
                              fontSize={"lg"}
                              mt={5}
                              color={"white"}
                              bg={"green.400"}
                            >
                              Learn More
                            </Button>
                          </Link>
                        </chakra.span>

                        {/*           
          <<<<<<< HEAD
                 
          
                    <chakra.span
                      fontSize="md"
                      color="gray.700"
                      _dark={{ color: "gray.200" }}
                    >
                   <chakra.h1 fontSize={'18px'} fontWeight='bold' >investment Price:</chakra.h1>
                        <chakra.h1 fontSize={'18px'}   >{item.investmentPrice}</chakra.h1>
                       
                    </chakra.span>
                     {/* <Button mt={'10px'} onClick={()=> {goToCarddetails(data.id)}}>Details</Button> */}
                        {/* <Button onClick={()=>{navigate('/details')}}>Details</Button> */}
                      </Box>
                    </Box>
                  </Flex>
                </GridItem>
              </Link>
            </div>
          ))}
        </SimpleGrid>

        {/*End of Grid body */}
      </Box>
      <FooterHome />
    </div>
  );
}

export default Search;
