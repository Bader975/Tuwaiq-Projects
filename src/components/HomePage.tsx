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
import React from "react";
import HomeImg from "../img/Homeimg1.svg";
import { Link as RouteLnk } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

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

  // fetch data
  const getallusers = async () => {
    const data = await (
      await fetch("http://localhost:3008/user/countall")
    ).json();

    // set state when the data received
    setusers(data && data.numOfuser);
  };

  getallusers();
  // ---------------
  const getallprojects = async () => {
    const data = await (
      await fetch("http://localhost:3008/project/all")
    ).json();

    setproject(data && data.Project.length);
  };

  const getallcamps = async () => {
    const data = await (
      await fetch("http://localhost:3008/camp/countAll")
    ).json();

    setcamp(data && data.Camp);
  };

  //get first 3
  const getfirst3 = async () => {
    const data = await (
      await fetch("http://localhost:3008/project/last3")
    ).json();

    // set state when the data received
    setProfleImg(data && data.Project[0].user.Profill.img);
    setData(data && data.Project);
    setData(data && data.Project);
    console.log(data.project);
    // setData(data&&data.Project);
  };
  // getfirst3();

  React.useEffect(() => {
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
          height={"20vh"}
          top={"25vh"}
        >
          <Box display={"flex"} justifyContent={"center"} gap={"2"}>
            <Heading mb={330} mt={60}>
              {" "}
              مشاريع طلاب معسكرات أكاديمية طويق في مكان واحد{" "}
            </Heading>
          </Box>

          <Box mt={20}>
            <Text fontSize={"x-large"}> </Text>
            <Box
              bg={"#fff"}
              mt={10}
              m={10}
              p={20}
              zIndex={5}
              boxShadow="2xl"
              rounded={"xl"}
            >
              <Box
                maxW="full"
                mx={"auto"}
                pt={5}
                px={{ base: 2, sm: 12, md: 17 }}
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
        </Box>
        <Image w="full" mt={-1} fit="cover" src={HomeImg} alt="HomeImg" />
      </Box>
      <br></br>
      <br></br>
      <Flex ml={40} mb={5} mt={80}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" textAlign={"right"} mr={40}>
            أحدث المشاريع
          </Text>{" "}
        </Box>
        <Spacer />
        <Box>
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
        </Box>
      </Flex>
      <Box>
        <SimpleGrid
          borderColor={"blackAlpha.200"}
          borderRadius={"2xl"}
          mx="auto"
          spacingX={20}
          spacingY={10}
          alignItems={"center"}
          minWidth={400}
          columns={{ base: 1, md: 2, lg: 3 }}
          p={20}
        >
          {data.map((index: any) => (
            <div>
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
                      <Box>
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
                          fontSize="xs"
                          textTransform="uppercase"
                          color="brand.600"
                          _dark={{ color: "brand.400" }}
                        >
                          المعسكر: {index.nameOfCamp}
                        </chakra.span>
                        <br />
                        <chakra.span
                          fontSize="xs"
                          textTransform="uppercase"
                          color="brand.600"
                          _dark={{ color: "brand.400" }}
                        >
                          التاريخ: {index.date}
                        </chakra.span>
                      </Box>
                      <Divider borderColor={"blackAlpha.500"} mt={5} />

                      <Box mt={4}>
                        <Flex alignItems="center">
                          <Flex alignItems="center">
                            <Avatar
                              src={profleImg}
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
            </div>
          ))}
        </SimpleGrid>
      </Box>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
