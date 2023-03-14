import { ChevronLeftIcon } from "@chakra-ui/icons";
import {useDisclosure, Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, GridItem, Spacer } from "@chakra-ui/react";
import { Text, Flex, Image, Link, chakra, Divider } from "@chakra-ui/react";
import axios from "axios";
import {  useNavigate} from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function AllIdeas() {
  const navigate = useNavigate();
  const [data , setData] =React.useState<[]>([])
  const [id , setId] =React.useState<number>()
  // const [showElement,setShowElement] = React.useState(true)

  // React.useEffect(() => {
  //   getallideas();
      
  // }, []);

  // const getallideas = async () => {
  //   const request = await fetch("http://localhost:3008/idea/all")
  //   });
  //   const data = await request.json();
  // }
  // console.log(data);

  React.useEffect(() => {
    // fetch data
    const getallideas = async () => {
      const data = await (
        await fetch(
          "http://localhost:3008/idea/all"
        )
      ).json();

      // set state when the data received
      setData(data&&data.Idea);
    };

    getallideas();
  }, []);
  console.log(data);
  
      let {
        isOpen: modIsOpen,
        onOpen: modOnOpen,
        onClose: modOnClose,
      } = useDisclosure();
    
      let {
        isOpen: modIsOpen2,
        onOpen: modOnOpen2,
        onClose: modOnClose2,
      } = useDisclosure();
    
      const initialRef = React.useRef(null);
      const finalRef = React.useRef(null);
  return (
    <div >
      <nav>
        <Nav />
      </nav>

{/* <Box>  */}
{/* MAP All Projecs */}
        {/*Start of Grid body */}
        {/* <SimpleGrid
          borderColor={"blackAlpha.200"}
          borderRadius={"2xl"}
          mx="auto"
          columns={{ base: 1, md: 2, lg: 4 }}>


{data.map((index:any)=>(

  
<div className="bg-image hover-zoom">
             
             <GridItem >
          <h1>{index.title}</h1>  
             </GridItem>
         
         </div>
   
            
          ))}
        </SimpleGrid>
      </Box> */}

        {/*End of Grid body */}

      <Box mr={150} mt={20}>
        <Text fontSize="3xl" textAlign={"right"}>
          جميع الافكار
        </Text>
      </Box>

     
      <SimpleGrid  borderColor={"blackAlpha.200"} borderRadius={'2xl'} mx='auto' spacingX={10} spacingY={20} columns={{ base: 1, md: 2, lg: 4 }}> 
         {data.map((index:any)=>(
          <div>
                   <GridItem> 

          <Card  >
            <CardHeader>
              <Heading size="md"> {index.title}</Heading>
            </CardHeader>
            <CardBody>
              
            </CardBody>
            <CardFooter>
              
            <Text
                 
                color={"#4299E1"}
                alignItems={'left'}
                fontSize={20}
                _hover={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={modOnOpen2}
              >
            للمزيد...
              </Text>
              <Spacer></Spacer>
              <Text
                 
        fontWeight={'bold'}
                 fontSize={20}
               
               >
              {index.user.name}
               </Text>
               
            </CardFooter>
          </Card>
        </GridItem>
        
        <Modal onClose={modOnClose2}   isOpen={modIsOpen2} >
        <ModalOverlay />
<<<<<<< HEAD
        <ModalContent>
          <ModalHeader m={5}>Modal Title</ModalHeader>
=======
        <ModalContent p={5}>
          <ModalHeader >{index.title}</ModalHeader>
>>>>>>> 587cdf1b6d6c8bbe6b400faff7a564c936c54845
          <ModalCloseButton />
          <ModalBody>
          {index.discription}
          </ModalBody>
          <ModalFooter>
            <Button onClick={modOnClose2}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
