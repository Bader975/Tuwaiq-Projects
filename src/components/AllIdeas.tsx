import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  GridItem,
  Spacer,
} from "@chakra-ui/react";
import { Text, Flex, Image, Link, chakra, Divider } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function AllIdeas() {
  const navigate = useNavigate();
  const [data, setData] = React.useState<[]>([]);
  const [id, setId] = React.useState<number>();
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
      const data = await (await fetch("http://localhost:3008/idea/all")).json();

      // set state when the data received
      setData(data && data.Idea);
    };

    getallideas();
  }, []);
  console.log(data);

   
  return (
    <div>
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
        {data.map((index: any) => (
          <div>
            <GridItem  >
              <Card 
              h={320}
              >
                <CardHeader>
                  <Heading size="sm" mb={4}>
                     {index.title}  
                  </Heading>
                  <Text> {index.user.name}</Text>
                </CardHeader>
                <CardBody>
                {index.discription}
                </CardBody>
                <CardFooter>
                   
                <Box position={'relative'} right={'230px'}><Text
                  
                  color={"#4299E1"}
                  fontSize={20}
                  _hover={{ fontWeight: "bold", cursor: "pointer" }}
                 >
                 التفاصيل<ChevronLeftIcon/>                

                </Text>
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
