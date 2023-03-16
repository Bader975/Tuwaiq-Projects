import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Stack,
  GridItem,
  Spacer,
} from "@chakra-ui/react";
import { Text, Flex, Image,  chakra, Divider } from "@chakra-ui/react";
import  {Link as RouteLnk } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

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
                  <Text fontSize={30}  mb={4}>
                     {index.title}
                      
                  </Text>
                  <Text> {index.user.name} </Text>
                </CardHeader>
                <CardBody h={20}>
                {index.discription}
                </CardBody>
                <CardFooter>
                   
                <Box  right={'230px'}>
                  
                  
                  <Link
                  to={`/IdeaInfo/${index.id}`}
                  color={"#4299E1"}
              
                 >
                 التفاصيل<ChevronLeftIcon/>                

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
