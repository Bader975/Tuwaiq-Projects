import React, { useReducer } from 'react'
import tuwaiqSvg from "../components/tuwaiq_logo.svg";
import { HiOutlineMoon } from 'react-icons/Hi';

import {
    Box,

    Button,
    CloseButton,
    Flex,
    HStack,
    Icon,
    IconButton,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    SimpleGrid,
    Stack,
    VStack,
    chakra,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    Image,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement,
    Spacer
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import axios from 'axios';
import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link as RouteLink, useNavigate } from 'react-router-dom'

const reduser =(state:any,action:any)=>{
  if(action.type === 'user logIn')return {user: state.user =  true}
  if(action.type === 'user LogOut')return {user: state.user   = false}}
function Nav() {

  const user=localStorage.getItem("token")
//   localStorage.removeItem("userName")
// console.log(user);
const removeUser =()=>{
  localStorage.clear();
  navigate('/login')
}


  const initialState ={user:true};
  const [state,dispatch]:any= useReducer<any>(reduser,initialState)

    const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("fffff", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("#001F33", "gray.800");
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const MobileNavContent = (
    <VStack
      pos="fixed"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Link href="#home">
      <Button w="full" variant="light">
        الصفحة الرئيسية
      </Button>
      </Link>
      <Link href="#about">
      <Button 
        w="full"
      color="light"
        >
        جميع المشاريع
      </Button>
      </Link>
     
    </VStack>
  );
   // Get Method 
   const navigate = useNavigate()
   



    
  
  return (
    <>
    <chakra.header
      ref={ref}
      // shadow={y > height ? "sm" : undefined}
 boxShadow='dark-md'      
      // bg={bg}
      bg={'#122A47'}
      w="full"
      pos={"relative"}
      overflowY="hidden"
  
    >
      <chakra.div h="4.5rem" mx="auto" maxW="100%" bg={'#122A47'}>
        <Flex
          w="full"
          h="full"
          px="6"
        
          
        
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="flex-start">
            <Link href="/">
              <HStack>
                
              </HStack>
            </Link>
          </Flex>
     
          <Flex>
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
             
                
            <Image
             w="full"
             h={10}
          
          src={tuwaiqSvg}
          alt="logo"
          
        />   
                 <RouteLink to={"/"}>
              <Button
                bg={"none"}
                color="white"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: "#00ADBB", backgroundColor:"none"}}
                >
                  الصفحة الرئيسية
              </Button>
              </RouteLink>
              <RouteLink to="/Allproject">
                <Button
                  bg={"none"}
                  color="white"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: "#00ADBB", backgroundColor:"none"}}
                  >
                    جميع المشاريع
                </Button>
              
              </RouteLink>
              <RouteLink to="/Allideas">
                <Button
                  bg={"none"}
                  color="white"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: "#00ADBB", backgroundColor:"none"}}
                  >
                    جميع الأفكار
                </Button>
              
              </RouteLink>
           
            </HStack>
          </Flex>
          <Spacer />

          <Flex justify="flex-end" align="center" >

          <HiOutlineMoon color='#fff' size={20}  />

            
            {user === null?
             <RouteLink to={"/LoginPage"}> 
              <Button 
              _hover={{ color: "white", backgroundColor:"#00ADBB"}}
              onClick={()=>dispatch({type:"user logIn"})} color={"#00ADBB"} bg={"none"}
              border="1px solid #00ADBB" 
              mr={10} >
              تسجيل دخول
            </Button></RouteLink>  
            :    <Button 
             onClick={()=>removeUser()} mr={"2"} color={cl}>
            تسجيل خروج
          </Button>}
      
        
            <RouteLink to={"/login"}>
          
            </RouteLink>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color="white"
              _dark={{ color: "inherit" }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Flex>
        </Flex>
        {MobileNavContent}
      </chakra.div>
    </chakra.header>
     
</>
  )
}

export default Nav