import { Box, Grid, GridItem, Avatar, Stack, Button, Textarea, Input } from "@chakra-ui/react";
import React from "react";

function ProfilePage() {
   
  return (
    <Box w={"1250px"} m={"auto"}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {/*  صفحتي الشخصية */}
        <GridItem w="100%"    padding={2} border={'solid 1px gray'} borderRadius={'10px'} bg={'gray.100'}>
          <Box pb={'12px'}>
            <Box float={'right'}>صفحتي الشخصية</Box>
            <Box>عرض صفحتي الشخصية</Box>
          </Box>
          <hr />
          {/* الصوره */}
          <Box className="imageProfile" m={'auto'} w={'130px'}>
            <Stack direction="row" mt={'5px'}>
              <Avatar
                src="https://bit.ly/broken-link"
                w={"130px"}
                h={"130px"}
              />
            </Stack>
            {/* زر تحديث صوره العرض */}
            <Box w={'100%'} mt={'10px'} bg={'#041C39'} color={'#fff'} fontSize={12} p='5px' borderRadius={'10px'}>تحديث صورتي الشخصية</Box>
          </Box>
          {/* المدخلات */}
          <Box>

            <Box mb={'10px'}>
            <Box float={'right'}>معلومات عني</Box>
            <Textarea bg={'#fff'} placeholder="معلومات عني" textAlign={'right'}></Textarea>
            </Box>

            <Box mb={'10px'}>
            <Box float={'right'}> مهاراتي</Box>
            <Textarea bg={'#fff'} placeholder="مهاراتي" textAlign={'right'}></Textarea>
            </Box>

            <Box mb={'10px'}>
            <Box float={'right'}> هواياتي</Box>
            <Textarea bg={'#fff'} placeholder='هواياتي' textAlign={'right'}></Textarea>
            </Box>

            <Box mb={'10px'}>
            <Box float={'right'}> رابط حساب تويتر</Box>
            <Input bg={'#fff'} placeholder="رابط حساب تويتر" textAlign={'right'}></Input>
            </Box>

            <Box mb={'10px'}>
            <Box float={'right'}> اسم مشروعي الشخصي</Box>
            <Input bg={'#fff'} placeholder="اسم مشروعي الشخصي" textAlign={'right'}></Input>
            </Box>

            <Box mb={'10px'}>
            <Box float={'right'}> رابط مشروعي الشخصي</Box>
            <Input bg={'#fff'} placeholder={'رابط مشروعي الشخصي'} textAlign={'right'}></Input>
            </Box>

           <Box w={'100%'} mb={'10px'} mt={'30px'}>
            <Button textAlign={'center'} bg={'#041C39'} color={'#fff'} w='100%' _hover={{opacity:0.6 }}>تحديث ملفي الشخصي</Button>
           </Box >

          </Box>

        </GridItem>

        <GridItem w="100%"  h={'360px'}  padding={2}   borderRadius={'10px'} bg={'gray.100'}>
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
              
              <Box w={'100%'} mb={'10px'} mt={'30px'}>
            <Button   textAlign={'center'} bg={'#041C39'}   color={'#fff'} w='100%' _hover={{opacity:0.6 }}>تحديث ملفي الشخصي</Button>
           </Box >

           </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ProfilePage;
