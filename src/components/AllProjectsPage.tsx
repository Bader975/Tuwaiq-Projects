import { ChevronLeftIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spacer,
  Link,
  Avatar,
} from "@chakra-ui/react";
import { Text, Flex, Image, chakra, Divider } from "@chakra-ui/react";
import { Link as RouteLnk } from "react-router-dom";

import axios from "axios";

import React, { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function AllProjectsPage() {
  const [data, setData] = React.useState<any[]>([]);
  const [id, setId] = React.useState<number>();
  const [profleImg, setProfleImg] = React.useState<any>("");
  const [filteredList, setFilteredList] = useState(data);

  const [title, settitle] = React.useState("");

  const getallproject = async () => {
    const data = await (
      axios.get("http://localhost:3008/project/all").then(res => res.data)

    )


    // set state when the data received
    setData(data && data.Project);
    // console.log(data && data.Project[0].user.Profill.img);

    setProfleImg(data && data.Project && data.Project.user && data.Project.user.Profill.img);
  };


  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    console.log("rerenderd");

    getallproject();



  }, []);








  const filter = (filteredData: any[]) => {
    if (!title) {
      return filteredData;
    }

    const filtereddata = filteredData.filter(
      (data: { title: any }) =>
        data.title
          .split(" ")
          .toString()
          .toLowerCase()
          .indexOf(title.toLowerCase()) !== -1
    );
    return filtereddata;
  };


  //Stoped The infinte Loop in useEffect by Adding dependency []
  React.useEffect(() => {
    let filteredData = filter(data);
    setFilteredList(filteredData);
  }, [title, data]);
  // });
  return (
    <>
      <nav>
        <Nav />
      </nav>

      <Box w={"35%"} mx={"auto"} mt={10}>
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
            placeholder=" البحث عن مشروع"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </InputGroup>
      </Box>

      <Box mr={20} mt={4}>
        <Text fontSize="3xl" textAlign={"right"}>
          جميع المشاريع
        </Text>
      </Box>

      <SimpleGrid
        borderColor={"blackAlpha.200"}
        borderRadius={"2xl"}
        mx="auto"
        spacingY={10}
        spacingX={20}
        alignItems={"center"}
        columns={{ base: 1, md: 2, lg: 3 }}
        p={20}
        minH={"60vh"}
      >
        {filteredList.map((index) => (

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
                      fontSize="sm"
                      textTransform="uppercase"
                      color="brand.600"
                      _dark={{ color: "brand.400" }}
                      m={2}
                    >
                      المعسكر : {index.nameOfCamp}
                    </chakra.span>

                    <chakra.span
                      fontSize="sm"
                      textTransform="uppercase"
                      color="brand.600"
                      _dark={{ color: "brand.400" }}
                    >
                      التاريخ: {new Date(index.date).toISOString().slice(0, 10).replace(/-/g, '/')}
                    </chakra.span>
                  </Box>
                  <Divider borderColor={"blackAlpha.500"} mt={5} />

                  <Box mt={4}>
                    <Flex alignItems="center">
                      <Flex alignItems="center">
                        <Avatar
                          src={index.user.Profill.img}
                          ml={2}
                        // src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3'
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

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AllProjectsPage;
