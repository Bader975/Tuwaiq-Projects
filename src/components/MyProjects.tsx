import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";


import { ButtonGroup, Link as RouteLnk, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, useDisclosure } from "@chakra-ui/react";
import {
  Text,
  Box,
  SimpleGrid,
  Flex,
  Image,
  chakra,
  Button,
  IconButton,
  Spacer,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";




function MyProjects() {
  const [data, setData] = React.useState<any[]>([]);

  const { isOpen, onOpen, onClose } = useDisclosure()


  const navigate = useNavigate();

  // Delete alert 

  // fetch data
  const getallproject = async () => {
    const data = await (
      await fetch(" https://tuwaiq-api.onrender.com/project", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") as string,

        },
      })
    ).json();

    // set state when the data received
    setData(data && data.Project);
  };

  React.useEffect(() => {
    getallproject();
  }, []);

  const deletProject = async (id: string) => {
    // let result = confirm("هل انت متاكد؟؟!");

    // if (result == true) {

    const data = await (
      await fetch(` https://tuwaiq-api.onrender.com/project/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") as string,
        },
      })
    ).json();


    getallproject();
    // to close the model for delete
    onClose();

  };


  interface Itypes {
    data: any[];
  }
  return (
    <>
      <nav>
        <Nav />
      </nav>

      <Flex ml={40} mb={5} mt={20}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" textAlign={"right"}>
            المشاريع الخاصة بك
          </Text>{" "}
        </Box>
        <Spacer />
        <Box>

          <Button
            onClick={() => navigate("/addProject")}
            m="10px"
            _hover={{ color: "white", backgroundColor: "#00ADBB" }}
            color={"#00ADBB"}
            bg={"none"}
            border="1px solid #00ADBB"
          >
            إضافة مشروع جديد
          </Button>
        </Box>
      </Flex>
      {/* ------- this is where to code */}

      {data.length === 0 ? <Text fontSize="20" mr={10}>no data to show </Text> : <Text fontSize={20} mr={10}>you have {data.length} projects</Text>}
      <SimpleGrid
        spacingX={5}
        spacingY={10}
        mx="auto"
        minH={"30vh"}
        alignItems={"center"}
        mt={10}
        columns={{ base: 1, md: 2, lg: 3 }}
        p={20}
      >

        {data.map((index) => (
          <GridItem key={index.id}>

            <Box textAlign={"right"} shadow={"lg"}>
              <Flex
                _dark={{ bg: "#3e3e3e" }}
                w="full"
                alignItems="center"
                justifyContent="center"
                textAlign={"right"}
              >
                <Box
                // mx="auto"
                // m={100}
                // mt={10}
                >

                  <Image
                    roundedTop="lg"
                    w="full"
                    h={64}
                    fit="cover"
                    src={index.img}
                    alt="Article"
                  />
                  <Text fontWeight={"bold"} fontSize={25} mr={5} mt={2}>
                    {" "}
                    {index.title}
                  </Text>

                  <Box p={6}>
                    <Box>
                      <chakra.span
                        fontSize="xs"
                        textTransform="uppercase"
                        color="brand.600"
                        _dark={{ color: "brand.400" }}
                      >
                        <Text fontSize={20}>
                          المعسكر : {index.nameOfCamp}
                        </Text>
                      </chakra.span>
                      <br />
                      <chakra.span
                        fontSize="xs"
                        textTransform="uppercase"
                        color="brand.600"
                        _dark={{ color: "brand.400" }}
                      >
                        التاريخ: {new Date(index.date).toISOString().slice(0, 10).replace(/-/g, '/')}
                      </chakra.span>

                      {/* DELETE BUTTON */}
                      <Box float={"left"}>
                        <Popover>
                          <PopoverTrigger>
                            <IconButton
                              color={"red"}
                              aria-label="delete"
                              icon={<DeleteIcon />}
                              m={5}

                            />
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton mr={"280"} fontSize={15} />
                            <PopoverHeader fontSize={18} p={10}>هل انت متاكد انك تريد حذف هذا المشروع ؟</PopoverHeader>
                            <PopoverBody>  <Button mr={3} onClick={onClose}>
                              الغاء
                            </Button>
                              <Button m={5} colorScheme="red" onClick={() => deletProject(index.id)}>حذف</Button> </PopoverBody>
                          </PopoverContent>
                        </Popover>

                        {/* <Button onClick={onOpen} colorScheme={"red"} /> */}
                        {/* <DeleteButton id={index.id}/> */}

                        {/* <Modal isOpen={isOpen} onClose={onClose} >
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader m={5}>هل انت متاكد؟</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody  >
                              هل انت متاكد انك تريد حذف هذا المشروع ؟

                            </ModalBody>


                            <ModalFooter>
                              <Button mr={3} onClick={onClose}>
                                الغاء
                              </Button>

                              <Button m={5} colorScheme="red" onClick={() => deletProject(index.id)}>حذف</Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal> */}

                        {/* </Button> */}


                        {/* <IconButton
                          color={"red"}
                          aria-label="delete"
                          icon={<DeleteIcon />}
                          onClick={onOpen}
                          m={5}

                        /> */}
                        {/* --------- */}

                        <Link to={`/ModifyProject/${index.id}`}>
                          <IconButton
                            mr={5}
                            color={"green"}
                            aria-label="edit"
                            icon={<EditIcon />}
                          />
                        </Link>
                      </Box>

                      <RouteLnk
                        display="block"
                        color="gray.800"
                        _dark={{ color: "white" }}
                        fontWeight="bold"
                        fontSize="2xl"
                        mt={2}
                        _hover={{ color: "gray.600", textDecor: "underline" }}
                      ></RouteLnk>
                    </Box>
                  </Box>
                  <br />
                </Box>
              </Flex>
            </Box>

          </GridItem>

        ))}
      </SimpleGrid>

      {/* -------------------------------------------------------- */}

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MyProjects;
