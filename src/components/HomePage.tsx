import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Divider,
  Flex,
  GridItem,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import HomeImg from "../img/Homeimg1.svg";
import {  Link as RouteLnk } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

interface StatsCardProps {
  title: string;
  stat: string;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      color={'#000'}
      borderColor={useColorModeValue("gray.400", "gray.400")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"bold"} fontSize={"3xl"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber color={"#00ADBB"} fontSize={"4xl"} fontWeight={"bold"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

function HomePage() {
  const [numOfusers, setusers] = React.useState<any[]>([]);
  const [numOfproject, setproject] = React.useState<any[]>([]);
  const [numOfcamp, setcamp] = React.useState<any[]>([]);
  const [data, setData] = React.useState<any[]>([]);


  // const [id , setId] =React.useState<number>();

    // fetch data
    const getallusers = async () => {
      const data = await (
        await fetch(
          "http://localhost:3008/user/countall"
        )
      ).json();
  
      // set state when the data received
      setusers(data&&data.numOfuser);
    };
  
    getallusers();
    // ---------------
    const getallprojects = async () => {
      const data = await (
        await fetch(
          "http://localhost:3008/project/all"
        )
      ).json();
  
      // set state when the data received
      setproject(data&&data.Project.length);
    };
  // console.log(numOfproject);
  
    // getallprojects();
    // ---------------------------------
    const getallcamps = async () => {
      const data = await (
        await fetch(
          "http://localhost:3008/camp/countAll"
        )
      ).json();
  
      // set state when the data received
      setcamp(data&&data.Camp);
    };
  
    // getallcamps();
//---------------------------------
//get first 3
const getfirst3 = async () => {
  const data = await (
    await fetch(
      "http://localhost:3008/project/last3"
    )
  ).json();

  // set state when the data received
  setData(data&&data.Project);
};
// getfirst3();


React.useEffect(() => {
  getfirst3();
  getallcamps();
  getallprojects();
}, []);
  return (
    <div className={"backcoler"}>
      <nav >
        <Nav />
      </nav>

      <Box>
      <Box pos={"absolute"} zIndex={"1"} color={"white"} width={"100%"} textAlign={"center"} height={"20vh"} top={"25vh"}>
          <Box display={"flex"} justifyContent={"center"} gap={"2"}>
            <Heading mb={330} mt={60}>   مشاريع طلاب معسكرات أكاديمية طويق في مكان واحد  </Heading>
            
          </Box>
          <br></br>
          <Box >
            <Text fontSize={"x-large"}>   </Text>
            <Box bg={"#fff"}mt={10} m={10} p={20} zIndex={5}  boxShadow='2xl' rounded={"xl"}>
        <Box
          maxW="full"
          mx={"auto"}
          pt={5}
          px={{ base: 2, sm: 12, md: 17 }}
          textAlign="center"
        >
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard title={"عدد المشاريع"} stat={`${numOfproject}`} />
            <StatsCard title={"عدد المستخدمين"} stat={`${numOfusers}`} />
            <StatsCard title={"عدد المعسكرات"} stat={`${numOfcamp}`} />
          </SimpleGrid>
        </Box>
      </Box>
          </Box>
        </Box>
        <Image
          w="full"
          mt={-1}
          fit="cover"
          src={HomeImg}
          alt="HomeImg"
        />
      </Box>
      <br>
      </br>
<br>
      </br>
      <Flex ml={40} mb={5} mt={80}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" textAlign={"right"} mr={40}>
            أحدث المشاريع
          </Text>{" "}
        </Box>
        <Spacer />
        <Box>
          <RouteLnk to="/Allproject">
            <Button
              _hover={{ color: "white", backgroundColor: "#00ADBB" }}
              color={"#00ADBB"}
              bg={"none"}
              border="1px solid #00ADBB"
              
            >
              مشاهدة الكل
            </Button>{" "}
          </RouteLnk>{" "}
        </Box>
      </Flex>
      <Box>
      <SimpleGrid  borderColor={"blackAlpha.200"} borderRadius={'2xl'} mx='auto' spacingX={20} alignItems={'center'} columns={{ base: 1, md: 2, lg: 3 }} p={20}> 

  
      {data.map((index:any)=>(
              <div >
      
              <GridItem key={index.id}> 
             
              
  <Flex
     
      _dark={{ bg: "#3e3e3e" }}
     
      w="full"
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
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={index.img}
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
            <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
        {index.title}     </Link>
            
            {/* <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
        {index.title}     </Link>  */}
           
          </Box>
          <Divider borderColor={'blackAlpha.500'} mt={5} />

          <Box mt={4} >
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
             
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.300" }}
              >
                21 SEP 2015
              </chakra.span>
              <Spacer />

              <RouteLnk to={`/ProjectPage/${index.id}`}
                 
                  // mr={20}
                  // fontWeight="bold"
                  // color="gray.700"
                  // _dark={{ color: "gray.200" }}
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
      </Box>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
