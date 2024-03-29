import { ChevronLeftIcon } from "@chakra-ui/icons";

import {
  Avatar,
  Box,
  Button,
  chakra,
  Divider,
  Flex,
  GridItem,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import HomeImg from "../assets/Homeimg1.svg";
import { Link as RouteLnk } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  stat: string;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      p={{ base: 4, md: 5 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      color={"#000"}
      borderColor={useColorModeValue("gray.400", "gray.400")}
      rounded={"lg"}
    >
      <StatLabel
        fontWeight={"bold"}
        fontSize={{ base: "sm", md: "lg", lg: "2xl" }}
        isTruncated
      >
        {title}
      </StatLabel>
      <StatNumber color={"#00ADBB"} fontSize={"4xl"} fontWeight={"bold"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

function HomePage() {
  const [numOfusers, setusers] = React.useState<any[]>([]);
  const [numOfproject, setproject] = React.useState<any[]>([]);
  const [numOfcamp, setcamp] = React.useState<any[]>([]);
  const [data, setData] = React.useState<any[]>([]);
  const [profleImg, setProfleImg] = React.useState<any>("");
  const [user, setUser] = React.useState<any>("");

  //AJEX CALL
  //  const ajex=new XMLHttpRequest();
  //   ajex.open('GET',"https://jsonplaceholder.typicode.com/todos")
  //   ajex.send();
  //   ajex.onload = () =>{
  //     const data= JSON.parse(ajex.responseText);
  //      (data);

  //   }


  // END OF GET


  // fetch data
  const getallusers = async () => {
    const data = await (
      await fetch(" https://tuwaiq-api.onrender.com/user/countall")
    ).json();


    // set state when the data received
    setusers(data && data.numOfuser);
  };

  // getallusers();
  // ---------------
  const getallprojects = async () => {
    const data = await (
      await fetch(" https://tuwaiq-api.onrender.com/project/all")
    ).json();

    setproject(data && data.Project.length);
  };

  const getallcamps = async () => {
    const data = await (
      await fetch(" https://tuwaiq-api.onrender.com/camp/countAll")
    ).json();

    setcamp(data && data.Camp);
  };

  //get first 3
  const getfirst3 = async () => {
    const data = await (
      await fetch(" https://tuwaiq-api.onrender.com/project/last3")
    ).json();

    // set state when the data received
    setProfleImg(data && data.Project[0]);
    setProfleImg(data && data.Project[0].user.Profill.img);


    setData(data && data.Project);


  };
  // getfirst3();

  React.useEffect(() => {
    getallusers();
    getfirst3();
    getallcamps();
    getallprojects();
  }, []);
  return (
    <div>
      <nav>
        <Nav />
      </nav>

      <Box>
        <Box
          pos={"absolute"}
          zIndex={"1"}
          color={"white"}
          w={"100%"}
          textAlign={"center"}
          height={"20%"}
          top={["25vh","30vh","30vh","70vh"]}
        >

          {/* <Box display={"flex"} justifyContent={"center"} gap={"2"}> */}
          <Heading fontSize={[16,20,35]}  pos={"relative"}
          zIndex={"1"}>
            {" "}


            مشاريع طلاب معسكرات أكاديمية طويق في مكان واحد{" "}

          </Heading>
          {/* </Box> */}


        </Box>
        <Image w="full" pos={"relative"} zIndex={"-1"} fit="cover" src={HomeImg} alt="HomeImg" />
      </Box>
      <Box>

        <Box
          bg={"#fff"}
          mt={10}
          p={10}
          boxShadow="xl"
          rounded={"xl"}
        >
          <Box
            w="full"
            mx={"auto"}
            pt={5}
            px={{ base: 2, sm: 10, md: 10 }}
            textAlign="center"
          >
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={{ base: 5, lg: 8 }}
            >
              <StatsCard title={"عدد المشاريع"} stat={`${numOfproject}`} />
              <StatsCard title={"عدد المستخدمين"} stat={`${numOfusers}`} />
              <StatsCard title={"عدد المعسكرات"} stat={`${numOfcamp}`} />
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Flex ml={40} mb={5} mt={[40,80]}>
        <>
          <Text fontSize="2xl" fontWeight="bold" textAlign={"right"} mr={[5, 20, 40]}>
            أحدث المشاريع
          </Text>{" "}
        </>
        <Spacer />
        <>
          <RouteLnk to="/Allproject">
            <Button
              _hover={{ color: "white", backgroundColor: "#00ADBB" }}
              color={"#00ADBB"}
              bg={"none"}
              border="1px solid #00ADBB"
            >
              مشاهدة الكل
            </Button>{" "}
          </RouteLnk>{" "}
        </>
      </Flex>
      <>
        <SimpleGrid
          borderColor={"blackAlpha.200"}
          borderRadius={"2xl"}
          mx="auto"
          spacingX={20}
          spacingY={10}
          alignItems={"center"}
          w={'full'}
          columns={{ base: 1, md: 2, lg: 3 }}
          p={20}
        >
          {data.map((index: any) => (
            <GridItem key={index.id}>
              <Flex
                _dark={{ bg: "#3e3e3e" }}
                alignItems="center"
                justifyContent="center"
                textAlign={"right"}
              >
                <Box
                  mx="auto"
                  rounded="lg"
                  shadow="xl"
                  bg="white"
                  _dark={{ bg: "gray.800" }}
                  w={500}
                >
                  <Image
                    mx={"auto"}
                    roundedTop="lg"
                    w={"auto"}
                    h={64}
                    fit="cover"
                    src={index.img}
                    alt="Article"
                  />

                  <Box p={6}>
                    <>
                      <Link
                        href={`/ProjectPage/${index.id}`}
                        display="block"
                        color="gray.800"
                        _dark={{ color: "white" }}
                        fontWeight="bold"
                        fontSize="2xl"
                        mt={2}
                        _hover={{ color: "gray.600", textDecor: "underline" }}
                      >
                        {index.title}{" "}
                      </Link>

                      <chakra.span
                        fontSize="md"
                        textTransform="uppercase"
                        color="brand.600"
                        _dark={{ color: "brand.400" }}
                      >
                        المعسكر: {index.nameOfCamp}
                      </chakra.span>
                      <br />
                      <chakra.span
                        fontSize="md"
                        textTransform="uppercase"
                        color="brand.600"
                        _dark={{ color: "brand.400" }}


                      >
                        التاريخ: {new Date(index.date).toISOString().slice(0, 10).replace(/-/g, '/')}



                      </chakra.span>
                    </>
                    <Divider borderColor={"blackAlpha.500"} mt={5} />

                    <Box mt={4}>
                      <Flex alignItems="center">
                        <Flex alignItems="center">
                          <Avatar
                            src={index.user.Profill.img}
                            ml={2}
                          />
                          <RouteLnk to={`/UserProfile/${index.user.id}`}>
                            {index.user.name}
                            <ChevronLeftIcon />
                          </RouteLnk>
                        </Flex>

                        <Spacer />

                        <RouteLnk to={`/ProjectPage/${index.id}`}>
                          التفاصيل
                          <ChevronLeftIcon />
                        </RouteLnk>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </GridItem>

          ))}
        </SimpleGrid>

      </>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
