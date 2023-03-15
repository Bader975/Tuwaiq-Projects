import React from 'react'
import { EmailIcon, ExternalLinkIcon, LockIcon, PhoneIcon } from '@chakra-ui/icons'
import { Grid, GridItem, Heading, Input, Button,Box, Avatar,Image, Text,useToast, InputGroup, InputLeftElement, InputRightElement, Checkbox, InputRightAddon } from '@chakra-ui/react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tuwaiqSvg from "../img/logIn_img.png";
import axios from 'axios';
import { FaUserAlt } from 'react-icons/fa';

function CompamySignUp() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Company");
  const [email, setEmail] = useState("");
  



  const toast = useToast();
  const navigate = useNavigate();


  // axios.post("http://localhost:3008/user/login",
  const submitLogin = async () => {
    try {
      const request = await fetch("http://localhost:3008/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  
          email, 
          password,
          name,
          role
         }),
      });
      const data = await request.json();
      if (request.status !== 200) {
        toast({
          title: data.message,
          status: "error",
          duration: 3000,
          position: "top",
        });
        return;
      }
      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        position: "top",
      });
     
      navigate("/LoginPage");
    } catch (error) {
      toast({
        title: "Server Error !",
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
  };

  return (
    <div>
      

      <Grid mt={20}>
   
        {/*  صفحتي الشخصية */}
        <GridItem w="auto"  mx={'auto'}  p={20}  pt={10}  borderRadius={'10px'} bg={'#fff'} shadow={'2xl'}>
          <Box >
          <Image
         
         w={300}
         src={tuwaiqSvg}
         alt="logo"
         mb={5}
         mr={16}

       />
          <Heading as='h1' size='lg' mx={'auto'} color={'#009FAE'} textAlign={'center'} mb={10} p={2}
         >
تسجيل جديد كشركة  </Heading>

            <Box mb={'10px'} >
            <Box float={'right'} fontWeight={"bold"}>  البريد الإلكتروني  </Box>
            <InputGroup>
    <InputRightAddon
      pointerEvents='none'
      
      children={<EmailIcon color='#00ADBB' />}
    />
    
    <Input type='tel' 
    bg={'#fff'}
    textAlign={'right'}  onChange={(e) => {
    
           setEmail(e.target.value);
         }}
    
    />
  </InputGroup>
           
            </Box>
            
         

            {/* <Box mb={'10px'} >
            <Box float={'right'} fontWeight={"bold"}>  اسم المستخدم  </Box>
            <InputGroup>
    <InputRightAddon
      pointerEvents='none'
      
      children={<FaUserAlt color='#00ADBB' />}
    />
    
    <Input type='tel' 
    bg={'#fff'}
    textAlign={'right'}  
    
    />
  </InputGroup>
           
            </Box> */}
            <br>
            </br>
            <Box mb={'10px'} >
            <Box float={'right'} fontWeight={"bold"}>  اسم الشركة  </Box>
            <InputGroup>
    <InputRightAddon
      pointerEvents='none'
      
      children={<FaUserAlt color='#00ADBB' />}
    />
    
    <Input type='tel' 
    bg={'#fff'}
    textAlign={'right'}  onChange={(e) => {
    
           setName(e.target.value);
         }}
    
    />
  </InputGroup>
           
            </Box>
            
            <br></br>
          
            <Box mb={'10px'}>
            <Box float={'right'} fontWeight={"bold"}>  كلمة المرور </Box>

            <InputGroup>
    <InputRightAddon
      pointerEvents='none'
      children={<LockIcon color='#00ADBB' />}
    />
    
    <Input type='tel' 
    bg={'#fff'}  textAlign={'right'}  onChange={(e) => {
      setPassword(e.target.value);
    }}
    
    />
  </InputGroup>
            </Box>
            <br></br>
            <Box mb={'10px'}>
            <Box float={'right'} fontWeight={"bold"}>  تأكيد كلمة المرور </Box>

            <InputGroup>
    <InputRightAddon
      pointerEvents='none'
      children={<LockIcon color='#00ADBB' />}
    />
    
    <Input type='tel' 
    bg={'#fff'}  textAlign={'right'} 
    
    />
  </InputGroup>
            </Box>
            <br></br>
            <Box>
            <Checkbox value='naruto'>بالتسجيل أقر بأني قرأت</Checkbox>
            <Box float={'left'} color={"#00ADBB"} mr={1}> شروط الاستخدام و سياسية الخصوصية     </Box>

              </Box>
              <Box> <Box float={'right'} >  و أوافق عليها   </Box></Box>
             <br></br>




           <Box w={'full'} mb={'10px'} mt={'30px'}>
            <Button textAlign={'center'} bg={'#00ADBB'} color={'#fff'} w='100%' _hover={{opacity:0.6 }}   onClick={submitLogin}>  تسجيل </Button>
           </Box >

          </Box>



            <br></br>
            <Box>

<Box float={'right'}  ml={1}> لديك حساب؟ </Box>

<Box float={'right'} color={"#00ADBB"}><Link to={"/LoginPage"}>  تسجيل دخول </Link> </Box>

              </Box>        </GridItem>

</Grid>


      
    </div>
  )
}

  export default CompamySignUp