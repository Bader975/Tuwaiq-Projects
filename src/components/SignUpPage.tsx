import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Grid, GridItem, Stack, Avatar, Textarea, Input, Button,Box, ChakraProvider, Heading, Link } from '@chakra-ui/react'
// import  from '@chakra-ui/react';

import React from 'react'

function SignUpPage() {
  return (
    <div>
      
      <Grid templateColumns="repeat(1, 1fr)" p={5} >
        {/*  صفحتي الشخصية */}
        <GridItem w="auto"  mx={'auto'}  p={20}  borderRadius={'10px'} bg={'#FCFCFC'} shadow={'2xl'}>
          <Box >
          <Heading as='h1' size='lg' mx={'auto'} color={'#009FAE'} textAlign={'center'} mb={2} p={2}>
          تسجيل جديد
  </Heading>

            <Box mb={'10px'} >
            <Box float={'right'}> البريد الإلكتروني  </Box>
            <Input bg={'#fff'} placeholder=" email@tuwig.com " textAlign={'right'}></Input>
            </Box>

            <Box mb={'10px'}>
            <Box float={'right'}> اسم المستخدم</Box>
            <Input bg={'#fff'} placeholder="ksa_2030" textAlign={'right'}></Input>
            </Box>

            <Box mb={'10px'}>
            <Box float={'right'}>  كلمة السر </Box>
            <Input bg={'#fff'} placeholder='يجب ان تكون اكثر من 8 احرف ' textAlign={'right'}></Input>
            </Box>

           <Box w={'full'} mb={'10px'} mt={'30px'}>
            <Button textAlign={'center'} bg={'#041C39'} color={'#fff'} w='100%' _hover={{opacity:0.6 }}> تسجيل جديد </Button>
           </Box >
           
<Link href='#' isExternal colorScheme={'bule'}>
  دخول ك اداري <ExternalLinkIcon mx='2px' />
</Link>
          </Box>

        </GridItem>

        {/* <GridItem w="auto"  h={'360px'}  padding={2}   borderRadius={'10px'} bg={'gray.100'}>
           <Box pb={'12px'}>
             <Box  textAlign={'right'}>   معلومات الحساب</Box>
           </Box >
           <hr />

           <Box pt={'15px'}>
              <Box mb={'10px'} >
                <Box float={'right'}>البريدالإلكتروني</Box>
                <Input bg={'#fff'} placeholder="البريدالإلكتروني" textAlign={'right'}></Input>
              </Box>

              <Box mb={'10px'}>
                <Box float={'right'}> الاسم</Box>
                <Input bg={'#fff'} placeholder=" الاسم" textAlign={'right'}></Input>
              </Box>

              <Box mb={'10px'}>
                <Box float={'right'}> الهاتف</Box>
                <Input bg={'#fff'} placeholder="الهاتف" textAlign={'right'}></Input>
              </Box>
              
              <Box w={'full'} mb={'10px'} mt={'30px'}>
            <Button   textAlign={'center'} bg={'#041C39'}  color={'#fff'} w='full' _hover={{opacity:0.6 }}>تحديث ملفي الشخصي</Button>
           </Box >

           </Box>
        </GridItem> */}

</Grid>

    </div>
  )
}

export default SignUpPage