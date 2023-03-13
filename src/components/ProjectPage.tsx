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
    CardFooter,
    Stack,
  } from "@chakra-ui/react";

import React from 'react'
import { MdHeadset } from "react-icons/md";
import Footer from "./Footer";
import Nav from "./Nav";

function ProjectPage() {
  return (
    <div>
   <nav>
      <Nav/>
      </nav>
<Grid  gap={4}>
  <GridItem h='400' mx={'auto'}>

  <Image
              h={'full'}
              src="https://www.springboard.com/blog/wp-content/uploads/2022/03/what-is-a-coding-project.png"
            
            />


  </GridItem>
  
</Grid>
          <Flex alignItems="center" px={6} py={3} bg="gray.400">
          

          <chakra.h1 mx={'auto'} color="white" fontWeight="bold" fontSize="lg">
           TODO APP
          </chakra.h1>
        </Flex>
         <hr />
        <SimpleGrid columns={3} textAlign={"right"} mb={10} mt={10} >
       
       
        <Box mr={50} >
         
            <Image
              h={20}
              mb={5}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
             
            />
          
          <Text fontSize="lg" mb={20}>
            {" "}
            رابط المشروع 
          </Text>
          <Text fontSize="lg" mb={10}>  اسم المعسكر</Text>
        </Box>
        <div className="line"></div>
        <Box mr={5}>
          <Text fontSize="lg" mx={'auto'} textAlign="center" >
            {" "}
             وصف المشروع
          </Text>
        
        </Box>
      </SimpleGrid>
      
    
      <footer>
        <Footer/>
       </footer>

    </div>
  )
}

export default ProjectPage;