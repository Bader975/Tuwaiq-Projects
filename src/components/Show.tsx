import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Alert,Box, FormControl, FormLabel, Input, Textarea , Grid, GridItem, chakra, Image, Flex, Icon, Button, SimpleGrid, ButtonGroup, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import NavCompany from "./NavCompany";
function Show() {
    const [data , setData] =React.useState<any[]>([])
    const [id , setId] =React.useState<any>([])
    
    const navigate = useNavigate()
    // -----------
    const [isOpen, setIsOpen] = React.useState(false)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)
   
  //   React.useEffect(() => {
    
  //  axios.get(`https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB`).then(res=> {
  //   console.log(res.data)
  
  //  setData(res.data)
 
  //  })
  //   },[]) 
  //   const deldetTest =(id:any)=>{

  //     console.log("Test");
  //     console.log(id);
      
  //     axios.delete(`https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB/${id}`)
  //     .then(res=> {console.log(res) })
  //     // DeleteItems(id)

  //   }
     
// const UpdateItam=(id:any) => {
//   console.log(id);
//   axios.put(`https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB/${'id'}`)
// }
    // const DeleteItems= (id:any)=>{
    //   console.log(id);
      
    //      axios.delete(`https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB/${id}`).then(res=>{
    //       console.log(res , "delet data");
          
       
    //        setData(data.filter((del)=>{
    //       console.log(res);
    //        return del.id!=id
         
    // })
    
      // ) 
  //  }).catch((err)=>{console.log(err);
  //  })
      //  axios.get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB")
      // close() 
       
     
  // }

  // const cancel = ()=>{
  //   close()  
  // }
    // --------------------------------------------
    
// const Dlelete=()=> {

//  <>

//       <Button mr={5} onClick={open}>
//        Delete
//       </Button>
//       <Popover
//         returnFocusOnClose={false}
//         isOpen={isOpen}
//         onClose={close}
//         placement='right'
//         closeOnBlur={false}
//       >
       
//         <PopoverContent>
//           <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
//           <PopoverArrow />
//           <PopoverCloseButton />
//           <PopoverBody>
//             Are you sure you want to Delete Your Company?
//           </PopoverBody>
//           <PopoverFooter  justifyContent='flex-end'>
//             <ButtonGroup size='sm'>
//               <Button variant='outline'>Cancel</Button>
//               <Button colorScheme='red'>Apply</Button>
//               <Button bg={"red"} color='#fff' m={2} onClick={()=>DeleteItems}>Delete</Button>
//             </ButtonGroup>
//           </PopoverFooter>
//         </PopoverContent>  
//       </Popover>
//       </>
  
// }
    // --------------------------------------------
    
    // {if(localStorage.get('name')===item.name){
    
    // }}

    return (
   
      <GridItem  mr={'45rem'}> 
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
        <Flex alignItems="center" px={0} py={3} bg="#fff"  >
          
        
          </Flex>
          <Image
            w="full"
            h={56}
            fit="cover"
            src={localStorage.getItem('photo')}
            alt="avatar"
         
           />
           
  
  <Box py={4} px={3} alignItems="center" >
  <Flex alignItems="center" px={6} py={2} bg="green.400" color={'white'}  rounded={'lg'}>  
  <chakra.h1 mx={'auto'} color="balck" fontWeight="bold" fontSize="2xl" >
  { localStorage.getItem('companyName')}
  
   </chakra.h1>
  </Flex>
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
                <chakra.h1 fontSize={'16px'}  mt={1} >{localStorage.getItem('conference')}</chakra.h1>
           <chakra.h1 fontSize={'18px'} fontWeight='bold'mt={1} >Annual Income:</chakra.h1>
                <chakra.h1 fontSize={'18px'}  mt={1} >{localStorage.getItem('annualIncome')} </chakra.h1>
           <chakra.h1 fontSize={'18px'} fontWeight='bold'mt={1} >investment Price:</chakra.h1>
                <chakra.h1 fontSize={'18px'}  mt={1} > {localStorage.getItem('investmentPrice')}</chakra.h1>
           <chakra.h1 fontSize={'18px'} fontWeight='bold'mt={1} >Location:</chakra.h1>
                <chakra.h1 fontSize={'18px'} mt={1}  > {localStorage.getItem('location')}</chakra.h1>
                <chakra.h1 fontSize={'18px'} fontWeight='bold'mt={2} > Business Field: </chakra.h1>
                <chakra.h1 fontSize={'18px'} mt={1}>  {localStorage.getItem('business')}</chakra.h1>
               
            {/* <Link to={`/details/${item.id}`}>
            <Button fontSize={'lg'} mt={5} color={'white'} bg={'black'}>Details</Button>
            </Link> */}
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
        </Box>
      </Flex>
  
  
      </GridItem>
  
      )      
    }
    
    
    
    
    
    
    
    {/*End of Grid body */}

 

  
  
  export default Show;