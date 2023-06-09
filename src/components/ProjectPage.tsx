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
  Link,
  CardFooter,
  Stack,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import React from "react";
import { RiPagesLine } from "react-icons/Ri";

import Footer from "./Footer";
import Nav from "./Nav";
import { FaUserAlt } from "react-icons/fa";
import { FiBell } from "react-icons/Fi";
import { LinkIcon } from "@chakra-ui/icons";

function ProjectPage() {
  const [data, setData] = React.useState<any>([]);
  // const [id , setId] =React.useState<number>();
  const { id } = useParams();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    const getallproject = async () => {
      const data = await (
        await fetch(`http://localhost:3008/project/${id}`)
      ).json();
      console.log(data);

      // set state when the data received
      setData(data && data.Project && data.Project[0]);
    };

    getallproject();
  }, []);

  console.log(data);

  return (
    <Box bg={"#F9F9F9"}>
      <nav>
        <Nav />
      </nav>
      <Grid gap={4}>
        <GridItem h="400" mx={"auto"}>
          <Image mt={3} h={"full"} src={data.img} />
        </GridItem>
      </Grid>

      <chakra.h1
        mt={3}
        mx={"auto"}
        color="black"
        fontWeight="bold"
        fontSize="2xl"
        marginTop={5}
        textAlign={"center"}
      >
        {data.title}
      </chakra.h1>

      <SimpleGrid
        textAlign={"right"}
        mb={10}
        mt={10}
        mx={"auto"}
        gap={5}
        mr={20}
        ml={20}
      >
        <Box
          pr={5}
          pt={5}
          h={300}
          mb={10}
          rounded="lg"
          shadow="md"
          bg="white"
          width={"full"}
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
              المعلومات
            </Text>
            <p className="ayaa"> </p>
          </Box>
          <Box>
            <Box mt={4}>
              <Flex alignItems="center">
                <Flex alignItems="center">
                  <Text ml={3} fontSize="lg">
                    المطور : {data.user && data.user.name}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Box>

          <Box>
            <Text fontSize="lg" mt={5}>
              {" "}
              {`  اسم المعسكر    :` + ` ` + ` ${data.nameOfCamp} `}
            </Text>
            <Link href={data.projectURL} isExternal>
              <Text fontSize="lg" mt={10}>
                <LinkIcon ml={2} />
                رابط المشروع
              </Text>
            </Link>
          </Box>
        </Box>

        <Box
          float="right"
          width={"full"}
          rounded="lg"
          shadow="md"
          bg="white"
          minH={"40vh"}
          justifyContent="center"
          alignContent={"center"}
          _dark={{ bg: "gray.800" }}
          mb={40}
          pt={5}
          pr={5}
        >
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
              icon={<RiPagesLine />}
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
            الوصف
          </Text>
          <p className="ayaa"> </p>
          <Text fontSize="lg" mx={"auto"} textAlign="right" mr={5} mt={5}>
            {" "}
            {data.discription}
          </Text>
        </Box>
      </SimpleGrid>

      <footer>
        <Footer />
      </footer>
    </Box>
  );
}

export default ProjectPage;
