import { ChevronLeftIcon, Search2Icon } from '@chakra-ui/icons';
import { Box, GridItem, Input, InputGroup, InputLeftElement, SimpleGrid, Spacer ,Link} from '@chakra-ui/react'
import { Text, Flex, Image, chakra,Divider } from "@chakra-ui/react";
import {  Link as RouteLnk } from "react-router-dom";

import axios from 'axios';


import React, { useState } from 'react'
import Footer from './Footer';
import Nav from './Nav';

function AllProjectsPage() {
  const [data, setData] = React.useState<any[]>([]);
  const [id , setId] =React.useState<number>();

  const getallproject = async () => {
    const data = await (
      await fetch(
        "http://localhost:3008/project/all"
      )
    ).json();

    // set state when the data received
    setData(data&&data.Project);
  };
console.log("ggg");

  React.useEffect(() => {
    getallproject();
  }, []);

  console.log("bbbbb");
  
  console.log(data);
  


  const [filteredList, setFilteredList] = useState(data);

  const [title, settitle] = React.useState("");
  const [nameproject, setNameProject] = React.useState("");

  const filter = (filteredData: any[]) => {
    if (!title) {
      return filteredData;
    }

    const filtereddata = filteredData.filter(
      (data: { title: any}) => data.title.split(" ")
      .toString()
      .toLowerCase()
      .indexOf(title.toLowerCase()) !== -1
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
  }, );
  return (
    <div >

<nav>
      <Nav/>
      </nav>

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
            placeholder=" البحث عن مشروع"
            value={title}
            onChange={handleBrandChange}
          />
        </InputGroup>
      </Box>


<Box mr={20} mt={4}>
<Text fontSize='3xl'
      textAlign={'right'} 

>جميع المشاريع</Text>

</Box>

<SimpleGrid  borderColor={"blackAlpha.200"} borderRadius={'2xl'} mx='auto'spacingY={10} spacingX={20} alignItems={'center'} columns={{ base: 1, md: 2, lg: 3 }} p={20} minH={"60vh"}> 

  
{filteredList.map((index) => (
              <div >
        
            
              <GridItem key={index.id}> 
             
              
  <Flex
     
      _dark={{ bg: "#3e3e3e" }}
     
      
      alignItems="center"
      justifyContent="center"
      textAlign={'right'}
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="xl"
        bg="white"
        _dark={{ bg: "gray.800" }}
        w={500}
      >
        <Image
mx={'auto'}
          roundedTop="lg"
          w={"auto"}
          h={64}
          fit="cover"
          src={index.img}
          alt="Article"
        />

        <Box p={6}>
          <Box>
          <Link
            href={`/ProjectPage/${index.id}`}
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
        {index.title}     </Link>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color="brand.600"
              _dark={{ color: "brand.400" }}
            >
              المعسكر : {index.nameOfCamp}
            </chakra.span>
           
       
           
          </Box>
          <Divider borderColor={'blackAlpha.500'} mt={5} />

          <Box mt={4} >
            <Flex alignItems="center">
              <Flex alignItems="center">
        
                
                <RouteLnk to={`/UserProfile/${index.user.id}`}
                 
               >
{index.user.name}<ChevronLeftIcon/>                
               
</RouteLnk>

              </Flex>
             
              <Spacer />

              <RouteLnk to={`/ProjectPage/${index.id}`}
                 
             
                >
التفاصيل<ChevronLeftIcon/>                
                
</RouteLnk>
            </Flex>

            
          </Box>
          
        </Box>
      </Box>
    </Flex>


    </GridItem>
  </div>
  ))}
  
</SimpleGrid>









<footer>
        <Footer/>
       </footer>

    </div>

  )
}

export default AllProjectsPage