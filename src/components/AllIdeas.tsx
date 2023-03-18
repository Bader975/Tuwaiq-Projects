import { ChevronLeftIcon, Search2Icon } from "@chakra-ui/icons";

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,

  GridItem,
  
  InputLeftElement,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { Text, Flex, Image, chakra, Divider } from "@chakra-ui/react";
import { Link as RouteLnk } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function AllIdeas() {
  const navigate = useNavigate();
  const [data, setData] = React.useState<[]>([]);
  const [id, setId] = React.useState<number>();

  const getallideas = async () => {
    const data = await (await fetch("http://localhost:3008/idea/all")).json();

    // set state when the data received
    setData(data && data.Idea);
  };

  // console.log(data);
  useEffect(() => {
    // fetch data

    getallideas();
  }, []);

  const [filteredList, setFilteredList] = useState(data);

  const [title, settitle] = React.useState("");
  const [nameproject, setNameProject] = React.useState("");

  const filter = (filteredData: any) => {
    if (!title) {
      return filteredData;
    }

    const filtereddata = filteredData.filter(
      (data: { title: any }) =>
        data.title.split(" ").toString().toLowerCase().indexOf(title) !== -1
    );
    return filtereddata;
  };

  const handleBrandChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    settitle(e.target.value);
  };

  React.useEffect(() => {
    let filteredData = filter(data);
    setFilteredList(filteredData);
  });

  return (
    <div>
      <nav>
        <Nav />
      </nav>
      {/* Searsh bar */}
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
            placeholder=" البحث عن الافكار"
            value={title}
            onChange={handleBrandChange}
          />
        </InputGroup>
      </Box>
      <Box mr={150} mt={20}>
        <Text fontSize="3xl" textAlign={"right"}>
          جميع الافكار
        </Text>
      </Box>

      <SimpleGrid
        borderColor={"blackAlpha.200"}
        minH={"60vh"}
        p={20}
        borderRadius={"2xl"}
        mx="auto"
        spacingX={10}
        spacingY={20}
        columns={{ base: 1, md: 2, lg: 3 }}
      >
        {filteredList.map((index: any) => (
          <div>
            <GridItem>
              <Card h={320}>
                <CardHeader>
                  <Text fontSize={30} mb={4}>
                    {index.title}
                  </Text>
                  <hr />
                  <Text mt={3}>صاحب الفكرة : {index.user.name} </Text>
                </CardHeader>
                <CardBody h={10}>{index.discription}</CardBody>
                <CardFooter>
                  <Box right={"230px"}>
                    <Link to={`/IdeaInfo/${index.id}`} color={"#4299E1"}>
                      التفاصيل
                      <ChevronLeftIcon />
                    </Link>
                  </Box>
                  {/* {index.user.name} */}
                </CardFooter>
              </Card>
            </GridItem>
          </div>
        ))}
      </SimpleGrid>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AllIdeas;
