import {
  ChevronLeftIcon,
  DeleteIcon,
  EditIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import  {Link as RouteLnk } from "@chakra-ui/react";
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
      setData(data&&data.Project);
      
    };
    getallproject();

    
  }, []);
  // console.log(data);

  const deletProject = async (id:string) => {
    const data = await (
      await fetch(
        `http://localhost:3008/project/${id}`,{
          method: "delete",
          headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem('token') as string,
          },
        }
        )
        ).json();
        // we will come back to this to fix it!!!!!
        window.location.reload();
        navigate("/MyProjects")
  };
  // getallproject();
  return (
    <div>
      <nav>
        <Nav />
      </nav>

     
    
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

<SimpleGrid spacingX={5} spacingY={10} mx="auto" minH={"30vh"} alignItems={'center'} mt={10} columns={{ base: 1, md: 2, lg: 3 }} p={20}
>
{data.map((index) => (
              <div >
      
              <GridItem key={index.id}> 
             
  <Box   textAlign={'right'} shadow={"lg"}
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
          src={index.img}
          alt="Article"
        />
        <Text fontWeight={"bold"} fontSize={25} mr={5}mt={2}> {index.title}</Text>
        
        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color="brand.600"
              _dark={{ color: "brand.400" }}
            >
              <Text  fontSize={20} >
              المعسكر : {index.nameOfCamp}

              </Text>
            </chakra.span>
            <Box float={'left'}> 
             <IconButton
  color={'red'}
  aria-label='delete'
  icon={<DeleteIcon />}
  onClick={()=>deletProject(index.id)}
/>
  <Link to={`/ModifyProject/${index.id}`}>
<IconButton
  mr={5}
  color={'green'}
  
  
  aria-label='edit'
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
            >
           </RouteLnk>
           
          </Box>
         
            
         
          
        </Box>
        <br/>
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
