import { ChevronLeftIcon, Search2Icon } from "@chakra-ui/icons";
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import { Image as Img } from 'semantic-ui-react';

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
  Progress,
  VStack,
  HStack,
  CircularProgress,
  CircularProgressLabel,
  Spinner,
} from "@chakra-ui/react";
import { Text, Flex, Image, chakra, Divider } from "@chakra-ui/react";
import { Link as RouteLnk } from "react-router-dom";

import axios from "axios";

import React, { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import OnePorject from "./OnePorject";

function AllProjectsPage() {
  const [data, setData] = React.useState<any[]>([]);
  const [id, setId] = React.useState<number>();
  const [profleImg, setProfleImg] = React.useState<any>("");
  const [filteredList, setFilteredList] = useState(data);
  const [showElement, setShowElement] = React.useState(true);

  const [title, settitle] = React.useState("");

  const getallproject = async () => {
    const data = await axios.get("http://localhost:3008/project/all").then(res => res.data)


    // set state when the data received
    setData(data && data.Project);


    setProfleImg(data && data.Project && data.Project.user && data.Project.user.Profill.img);
  };


  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    console.log("rerenderd");

    getallproject();


  }, []);



  // $(function() {

  // });
  // Spinner time
  React.useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 1000);
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
      {showElement ? (
        <div className="spinner">
          <Spinner
            boxSize="4rem"
            thickness="5px"
            speed="0.80s"
            emptyColor="gray.400"
            color="blue.500"
            size="md"
            ml={"auto"}
          />
        </div>
      ) : (
        <></>
      )}
      {/* {console.log(filteredList.length)} */}
      {/* Added checker for input */}

      {filteredList.length == 0 && <Text textAlign={"center"} fontSize="25"> لا يوجد بيانات مطابقة للبحث</Text>}

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
        {/* Using Props to Render the Projecs */}
        {filteredList.map((index) => (
          <OnePorject id={index.id} title={index.title} img={index.img}
            nameOfCamp={index.nameOfCamp} date={index.date} userProfillimg={index.user.Profill.img}
            user_id={index.user.id}
            user_name={index.user.name} />

        ))}
      </SimpleGrid>


      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AllProjectsPage;
