import { ChevronLeftIcon, Search2Icon } from "@chakra-ui/icons";



import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

// import axios from "axios";

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
    const data = await fetch(" https://tuwaiq-api.onrender.com/project/all").then(res => res.json())


    // set state when the data received
    setData(data && data.Project);


    setProfleImg(data && data.Project && data.Project.user && data.Project.user.Profill.img);

  };
 

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
     ("rerenderd");

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

      <Box w={["70%","30%","35%"]} mx={"auto"} mt={10}>
        <InputGroup
         
          mx={"auto"}
        >
          <InputLeftElement pointerEvents="none" float={"left"}>
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
      {/* { (filteredList.length)} */}
      {/* Added checker for input */}

      {filteredList.length == 0 && title.length > 0 && <Text textAlign="center" fontSize="25"> لا يوجد بيانات مطابقة للبحث</Text>}

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
          <OnePorject  key={index.id} id={index.id} title={index.title} img={index.img}
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
