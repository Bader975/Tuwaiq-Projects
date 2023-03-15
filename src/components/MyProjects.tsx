import {
  ChevronLeftIcon,
  DeleteIcon,
  EditIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  FormLabel,
  Text,
  ModalFooter,
  Select,
  Modal,
  Link,
  Textarea,
  Box,
  SimpleGrid,
  Divider,
  Flex,
  Image,
  chakra,
  Button,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { FiBell } from "react-icons/Fi";
import Footer from "./Footer";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function MyProjects() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <Nav />
      </nav>

      {/* موديل لاضافه مشروع جديد */}

      {/* المشاريع */}
      {/* <Box mr={150} mt={20}>
      <Button
        onClick={addOnOpen}
        m="10px"
       bg={'#00ADBB'} color={'#fff'} _hover={{opacity:0.6 }}
      >
        إضافة مشروع جديد
      </Button>
<Text fontSize='3xl'
      textAlign={'right'}

> المشاريع الخاصة بك</Text>

</Box> */}
      <Flex ml={40} mb={5} mt={20}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" textAlign={"right"} mr={40}>
            المشاريع الخاصة بك
          </Text>{" "}
        </Box>
        <Spacer />
        <Box>
          <Button
            onClick={() => navigate("/addProject")}
            m="10px"
            bg={"#00ADBB"}
            color={"#fff"}
            _hover={{ opacity: 0.6 }}
          >
            إضافة مشروع جديد
          </Button>
        </Box>
      </Flex>

      <SimpleGrid
        spacingX={5}
        spacingY={5}
        mx="auto"
        m={100}
        mt={10}
        columns={{ base: 1, md: 2, lg: 3 }}
      >
        <Box textAlign={"right"}>
          <Flex
            _dark={{ bg: "#3e3e3e" }}
            w="full"
            alignItems="center"
            justifyContent="center"
            textAlign={"right"}
          >
            <Box
              mx="auto"
              rounded="lg"
              shadow="md"
              bg="white"
              _dark={{ bg: "gray.800" }}
              maxW="2xl"
            >
              <Image
                roundedTop="lg"
                w="full"
                h={64}
                fit="cover"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
                    المعسكر
                  </chakra.span>
                  <Box float={"left"}>
                    {" "}
                    <IconButton
                      color={"red"}
                      aria-label="delete"
                      icon={<DeleteIcon />}
                    />
                    <IconButton
                      mr={5}
                      color={"green"}
                      aria-label="edit"
                      icon={<EditIcon />}
                      onClick={()=> navigate('/ModifyProject')}
                    />
                  </Box>

                  <Link
                    display="block"
                    color="gray.800"
                    _dark={{ color: "white" }}
                    fontWeight="bold"
                    fontSize="2xl"
                    mt={2}
                    _hover={{ color: "gray.600", textDecor: "underline" }}
                  >
                    اسم المشروع{" "}
                  </Link>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex
            _dark={{ bg: "#3e3e3e" }}
            w="full"
            alignItems="center"
            justifyContent="center"
            textAlign={"right"}
          >
            <Box
              mx="auto"
              rounded="lg"
              shadow="md"
              bg="white"
              _dark={{ bg: "gray.800" }}
              maxW="2xl"
            >
              <Image
                roundedTop="lg"
                w="full"
                h={64}
                fit="cover"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
                    المعسكر
                  </chakra.span>
                  <Box float={"left"}>
                    {" "}
                    <IconButton
                      color={"red"}
                      aria-label="delete"
                      icon={<DeleteIcon />}
                    />
                    <IconButton
                      mr={5}
                      color={"green"}
                      aria-label="edit"
                      icon={<EditIcon />}
                      onClick={()=> navigate('/ModifyProject')}
                    />
                  </Box>
                  <Link
                    display="block"
                    color="gray.800"
                    _dark={{ color: "white" }}
                    fontWeight="bold"
                    fontSize="2xl"
                    mt={2}
                    _hover={{ color: "gray.600", textDecor: "underline" }}
                  >
                    اسم المشروع{" "}
                  </Link>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex
            _dark={{ bg: "#3e3e3e" }}
            w="full"
            alignItems="center"
            justifyContent="center"
            textAlign={"right"}
          >
            <Box
              mx="auto"
              rounded="lg"
              shadow="md"
              bg="white"
              _dark={{ bg: "gray.800" }}
              maxW="2xl"
            >
              <Image
                roundedTop="lg"
                w="full"
                h={64}
                fit="cover"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
                    المعسكر
                  </chakra.span>
                  <Box float={"left"}>
                    {" "}
                    <IconButton
                      color={"red"}
                      aria-label="delete"
                      icon={<DeleteIcon />}
                    />
                    <IconButton
                      mr={5}
                      color={"green"}
                      aria-label="edit"
                      icon={<EditIcon />}
                      onClick={()=> navigate('/ModifyProject')}
                    />
                  </Box>
                  <Link
                    display="block"
                    color="gray.800"
                    _dark={{ color: "white" }}
                    fontWeight="bold"
                    fontSize="2xl"
                    mt={2}
                    _hover={{ color: "gray.600", textDecor: "underline" }}
                  >
                    اسم المشروع{" "}
                  </Link>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MyProjects;
