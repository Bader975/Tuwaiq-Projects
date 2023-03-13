
import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Grid, GridItem, Heading, Input, Button,Box, Avatar,Image, useToast } from '@chakra-ui/react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();
  const navigate = useNavigate();



  const submitLogin = async () => {
    try {
      
      const request = await fetch("http://localhost:3008/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
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
      localStorage.setItem("authorization", data.token);
      navigate("/");
  
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
      

      <Grid templateColumns="repeat(2, 1fr)" p={5} >
        {/*  صفحتي الشخصية */}
        <GridItem w="auto"  mx={'auto'}  p={20}  borderRadius={'10px'} bg={'#FCFCFC'} shadow={'2xl'}>
          <Box >
          <Heading as='h1' size='lg' mx={'auto'} color={'#009FAE'} textAlign={'center'} mb={2} p={2}>
          تسجيل دخول
  </Heading>

            <Box mb={'10px'} >
            <Box float={'right'}> البريد الإلكتروني  </Box>
            <Input bg={'#fff'} placeholder=" email@tuwig.com " textAlign={'right'}  onChange={(e) => {
                    setEmail(e.target.value);
                  }}></Input>
            </Box>

          
            <Box mb={'10px'}>
            <Box float={'right'}>  كلمة السر </Box>
            <Input bg={'#fff'} placeholder='يجب ان تكون اكثر من 8 احرف ' textAlign={'right'}  onChange={(e) => {
                    setPassword(e.target.value);
                  }}></Input>
            </Box>

           <Box w={'full'} mb={'10px'} mt={'30px'}>
            <Button textAlign={'center'} bg={'#041C39'} color={'#fff'} w='100%' _hover={{opacity:0.6 }}   onClick={submitLogin}> تسجيل دخول </Button>
           </Box >
  
          </Box>

        </GridItem>

        <GridItem w="auto"  h={'360px'}  padding={2}   borderRadius={'10px'} bg={'#FCFCFC'}>
           <Box pb={'12px'}>
          
             <Image src='https://upload.wikimedia.org/wikipedia/ar/thumb/9/96/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9_%D8%B7%D9%88%D9%8A%D9%82.png/800px-%D8%B4%D8%B9%D8%A7%D8%B1_%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9_%D8%B7%D9%88%D9%8A%D9%82.png' h='full' w={'full'} opacity={1}></Image>

         


           </Box >
          
        </GridItem>

</Grid>


      
    </div>
  )
}

export default LoginPage