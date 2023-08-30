

import React from 'react';
import "../App.css";
import { useParams } from "react-router-dom";
import {
  Text,
  SimpleGrid,
  Box,
  Heading,
  Divider,
  IconButton,
  Flex,
  chakra,
  Link,
  Image,
  GridItem,
  Spacer
} from "@chakra-ui/react";
import { Link as RouteLnk } from "react-router-dom";

import {
  MdContactPhone,
} from "react-icons/md";
import Nav from "./Nav";
import Footer from "./Footer";
import { FaUserAlt } from "react-icons/fa";
import { ChevronLeftIcon } from "@chakra-ui/icons";


interface Userinfo {
  name?: string | any;
  twitterURL?: string | any;
  aboutMy?: any[] | undefined;
  skill?: string | any;
}




function UserProfile() {
  const [data, setData] = React.useState<any>([]);
  const [user, setUser] = React.useState<any>([]);
  const [project, setProject] = React.useState<any[]>([]);

  const { id } = useParams();

  React.useEffect(() => {
    // fetch data
    document.documentElement.scrollTop = 0;

    const getUserProfile = async () => {
      const data = await (
        await fetch(` https://tuwaiq-api.onrender.com/profile/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();

      setData(data.profile[0]);
      setUser(data.profile[0].user)
    };

    getUserProfile();
    getallproject()
  }, []);


  // fetch data
  const getallproject = async () => {
    const data = await (
      await fetch(
        ` https://tuwaiq-api.onrender.com/project/userProject/${id}`, {
        method: "GET",

      }
      )
    ).json();
     ("project");

     (data && data.Project);

    // set state when the data received
    setProject(data && data.Project);

  };

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <>

        <SimpleGrid columns={[1, 2, 2]} textAlign={"right"} m={10} mt={20}>
          <Box
            pr={5}
            pt={5}
            h={400}
            mb={10}
            rounded="lg"
            shadow="md"
            bg="white"
            w={"auto"}
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
                  px={"17"}
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

            {/* { (data.aboutMy)} */}
            <Box mr={5}>
              <Box fontSize="lg">
                <Text mt={10}> الاسم :{user.name} </Text>
                <Divider />
                <Text mt={10}> السيرة :{data.aboutMy} </Text>

                <Divider />

                <Text mt={10}> المهارات: {data.skill} </Text>
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
              w={"full"}
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
                  <Text mt={10}> البريد الإلكتروني : {user.email}  </Text>
                  <Divider />

                  <Text mt={10}> رقم الهاتف : {user.phone_number} </Text>
                  <Divider />

                  <Text mt={10}> حساب ليكند إن: {data.twitterURL}  </Text>
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
        <SimpleGrid borderColor={"blackAlpha.200"} borderRadius={'2xl'} mx='auto' spacingX={20} spacingY={10} alignItems={'center'} w={'auto'} columns={{ base: 1, md: 2, lg: 3 }} p={20}>


          {project.map((index: any) => (

            <GridItem key={index.id}>


              <Flex

                _dark={{ bg: "#3e3e3e" }}


                alignItems="center"
                justifyContent="center"
                textAlign={'right'}
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
                    mx={'auto'}
                    roundedTop="lg"
                    w={"auto"}
                    h={64}
                    fit="cover"
                    src={index.img}
                    alt="Article"
                  />

                  <Box p={6}>
                    <Box>
                      <chakra.span
                        fontSize="xs"
                        textTransform="uppercase"
                        color="brand.600"
                        _dark={{ color: "brand.400" }}
                      >
                        المعسكر: {index.nameOfCamp}
                      </chakra.span>
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
                        {index.title}     </Link>


                    </Box>
                    <Divider borderColor={'blackAlpha.500'} mt={5} />

                    <Box mt={4} >
                      <Flex alignItems="center">
                        <Flex alignItems="center">


                          <RouteLnk to={`/UserProfile/${index.user.id}`}

                          >
                            {index.user.name}<ChevronLeftIcon />

                          </RouteLnk>

                        </Flex>

                        <Spacer />

                        <RouteLnk to={`/ProjectPage/${index.id}`}


                        >
                          التفاصيل<ChevronLeftIcon />

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
    </>
  );
}

export default UserProfile;
