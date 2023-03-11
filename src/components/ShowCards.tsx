import React from "react";
import axios from 'axios';
import { Link , useNavigate} from "react-router-dom";
import { SimpleGrid,Box,Spinner, FormControl, FormLabel, Input, Textarea , Grid, GridItem, chakra, Image, Flex, Icon, Button, HStack} from "@chakra-ui/react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { MDBIcon } from "mdb-react-ui-kit";
import NavCompany from "./NavCompany";
import FooterHome from "./FooterHome";
import Search from "./Search";


function ShowCards() {

  const navigate = useNavigate();
  const [data , setData] =React.useState<any[]>([])
  const [id , setId] =React.useState<number>()

  
   

// to show and hide spinner for 3 sec
  const [showElement,setShowElement] = React.useState(true)

  React.useEffect(() => {
    axios
          .get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB")
       .then((res) => {
         setData(res.data);
         console.log(data)
      });
  }, []);
// Spinner time
  React.useEffect(()=>{
    setTimeout(function() {
      setShowElement(false)
         }, 1000);
       },
   [])



  return (
    
        <div className="Show_cards">
                  <NavCompany/>

{showElement?<div className="spinner"> 
<Spinner
   boxSize='6rem'
  thickness='5px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  ml={'auto'}
  
 
/></div>:<></>}
{/* <Search/> */}
  {/*companies cards */}
 {/*Grid  cards  Container --------------------------------------------------*/}
 <Box >
     {/*Start of Grid body */}
    <SimpleGrid  borderColor={"blackAlpha.200"} borderRadius={'2xl'} mx='auto' gap={20} columns={{ base: 1, md: 2, lg: 4 }}> 
    
    {/*Mapping ----------  */}

    {data.map((item:any) =>{

    
      return(
 
    <GridItem key={item.id}> 
    <Flex
      // bg="#edf3f8"
      rounded="lg"
      display= 'Flex'
      _dark={{ bg: "#3e3e3e" }}
      p={5}
      mx={'auto'}
      w="xs"
      h={"lx"}
      alignItems="center"
      justifyContent="center"

  bg={'balck'}
      
    
    >
   
      <Box
        w="xs"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="xl"
        rounded="lg"
        overflow="hidden"
        mx="auto"
        h={"lx"}
        
      
      >
        <Flex alignItems="center" px={6} py={3} bg="#fff" shadow={'lg'} >

<chakra.h1 mx={'auto'} color="balck" fontWeight="bold" fontSize="2xl" >
{item.companyName}

 </chakra.h1>
</Flex>
        <Image
          w="full"
          h={56}
          fit="cover"
          src={item.photo}
          alt="avatar"
          rounded="sm"
         />

         

        <Box py={4} px={6}>
           <chakra.h1
            display="block"
            fontSize="2xl"
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
            
          >
   
          </chakra.h1>
    
          <chakra.span
            fontSize="sm"
            color="gray.800"
            _dark={{ color: "gray.200" }}
        
          >
              <chakra.h1 fontSize={'18px'} fontWeight='bold'>Conference:</chakra.h1>
              <chakra.h1 fontSize={'16px'}  mt={1} >{item.conference}</chakra.h1>
         <chakra.h1 fontSize={'18px'} fontWeight='bold'mt={1} >Annual Income:</chakra.h1>
              <chakra.h1 fontSize={'18px'}  mt={1} >{item.annualIncome} <MDBIcon fas icon="dollar-sign" size='lg' /></chakra.h1>
         <chakra.h1 fontSize={'18px'} fontWeight='bold'mt={1} >investment Price:</chakra.h1>
              <chakra.h1 fontSize={'18px'}  mt={1} ><MDBIcon fas icon="hand-holding-usd" size='lg' /> {item.investmentPrice}</chakra.h1>
         <chakra.h1 fontSize={'18px'} fontWeight='bold'mt={1} >Location:</chakra.h1>
              <chakra.h1 fontSize={'18px'} mt={1}  ><MDBIcon far icon="compass" /> {item.location}</chakra.h1>
              <chakra.h1 fontSize={'18px'} fontWeight='bold'mt={2} > Business Field: </chakra.h1>
              <chakra.h1 fontSize={'18px'} mt={1}><MDBIcon fas icon="briefcase" size='lg' mt={5} />  {item.business}</chakra.h1>
             
          <Link to={`/details/${item.id}`}>
          <Button fontSize={'lg'} mt={5} color={'white'} bg={'black'}>Details</Button>
          </Link>
          </chakra.span>

{/*           
<<<<<<< HEAD
       

          <chakra.span
            fontSize="md"
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
         <chakra.h1 fontSize={'18px'} fontWeight='bold' >investment Price:</chakra.h1>
              <chakra.h1 fontSize={'18px'}   >{item.investmentPrice}</chakra.h1>
             
          </chakra.span>
           {/* <Button mt={'10px'} onClick={()=> {goToCarddetails(data.id)}}>Details</Button> */}
           {/* <Button onClick={()=>{navigate('/details')}}>Details</Button> */}
            
            
         </Box>
      </Box>
    </Flex>


    </GridItem>
  
      )
    })}



 
    </SimpleGrid>
    
    

    {/*End of Grid body */}

    </Box>

<FooterHome/>

        </div>
      )}
      
  

  export default ShowCards;



 



