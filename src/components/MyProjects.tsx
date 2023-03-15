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
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { FiBell } from "react-icons/Fi";
import Footer from "./Footer";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function MyProjects() {
  const [data, setData] = React.useState<any[]>([]);
  const navigate = useNavigate()

  React.useEffect(() => {
    // fetch data
    const getallproject = async () => {
      const data = await (
        await fetch(
          "http://localhost:3008/project", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem('token') as string,
          },
        }
        )
      ).json();

      // set state when the data received
      setData(data && data.Project);
    };

    getallproject();
  }, []);
  console.log(data);



  const [img, SetImg] = React.useState("")
  const [base64, SetBase64] = React.useState("")
  console.log(img);
  // const baseConvertor = React.useCallback((file:File)=>{
  //   return new Promise((resolve:any, reject:any)=>{
  //       const reader = new FileReader();

  //       reader.readAsDataURL(file);
  //       reader.onload = () => resolve(reader.result)
  //       reader.onerror = err => reject(err)
  //       })
  //  },[])


  //   baseConvertor()

  let {
    isOpen: addIsOpen,
    onOpen: addOnOpen,
    onClose: addOnClose,
  } = useDisclosure();
  let {
    isOpen: modIsOpen,
    onOpen: modOnOpen,
    onClose: modOnClose,
  } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);




  return (
    <div>
      <nav>
        <Nav />
      </nav>



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
      {/* ------- this is where to code */}
      <SimpleGrid spacingX={5} spacingY={5} mx="auto" minH={"30vh"} m={100} mt={10} columns={{ base: 1, md: 2, lg: 3 }}
      >

        {data.map((index) => (
          <div >

            <GridItem>

              <Box textAlign={'right'}
              >
                <Flex

                  _dark={{ bg: "#3e3e3e" }}

                  w="full"
                  alignItems="center"
                  justifyContent="center"
                  textAlign={'right'}
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
                      src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="Article"
                    />
                    <Text fontWeight={"bold"} fontSize={25} mr={5} mt={2}> {index.title}</Text>

                    <Box p={6}>
                      <Box>
                        <chakra.span
                          fontSize="xs"
                          textTransform="uppercase"
                          color="brand.600"
                          _dark={{ color: "brand.400" }}
                        >
                          <Text fontSize={20} >
                            المعسكر : {index.nameOfCamp}

                          </Text>
                        </chakra.span>
                        <Box float={'left'}> <IconButton
                          color={'red'}
                          aria-label='delete'
                          icon={<DeleteIcon />}
                        />
                          <IconButton
                            mr={5}
                            color={'green'}


                            aria-label='edit'
                            icon={<EditIcon />}
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
                        </Link>

                      </Box>




                    </Box>
                  </Box>
                </Flex>
              </Box>

            </GridItem>
          </div>
        ))}

      </SimpleGrid>



      {/* -------------------------------------------------------- */}


      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyProjects;
