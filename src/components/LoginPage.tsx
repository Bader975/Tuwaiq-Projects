
import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Grid, GridItem, Heading, Input, Button,Box, Avatar,Image } from '@chakra-ui/react'


function LoginPage() {
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
            <Input bg={'#fff'} placeholder=" email@tuwig.com " textAlign={'right'}></Input>
            </Box>

          
            <Box mb={'10px'}>
            <Box float={'right'}>  كلمة السر </Box>
            <Input bg={'#fff'} placeholder='يجب ان تكون اكثر من 8 احرف ' textAlign={'right'}></Input>
            </Box>

           <Box w={'full'} mb={'10px'} mt={'30px'}>
            <Button textAlign={'center'} bg={'#041C39'} color={'#fff'} w='100%' _hover={{opacity:0.6 }}> تسجيل جديد </Button>
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