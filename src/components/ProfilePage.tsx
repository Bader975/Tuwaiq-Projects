import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, Avatar, Stack, Button, Textarea, Input,Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

function ProfilePage() {
  const [data, setData] = React.useState<any[]>([]);
  const [name, setName] = React.useState<any>("");
  const [twitterURL, setTwitterURL] = React.useState<any>("");
  const [img, setImg] = React.useState<any>("");
  const [skill, setSkill] = React.useState<any>("");
  const [aboutMy, setAboutMy] = React.useState<any>("");
  const [user, setUser] = React.useState<any[]>([]);
  const [email, setEmail] = React.useState<any>("");
  const [discription, setDiscription] = React.useState<any>("");
  const navigate = useNavigate()

  React.useEffect(() => {
    // fetch data
    const getUserProfile = async () => {
      const data = await (
        await fetch(
          "http://localhost:3008/profile",{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "authorization": localStorage.getItem('token') as string,
            },
          }
        )
      ).json();
      // console.log(data);
      

      // set state when the data received
      setData(data&&data.profile[0]);
      // console.log(data);

    };

    getUserProfile();
  }, []);
  // console.log(data.user);
  //     console.log(data);

  

      // update profile

      
      const updateProfle = async () => {
        const data = await (
          await fetch(`http://localhost:3008/profile/`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: localStorage.getItem("token") as string,
            },
            body: JSON.stringify({
             
              skill,
              aboutMy,
              twitterURL
        
        
            }),
          })
        ).json();
        window.location.reload();
        navigate("/Profile")        // set state when the data received
      };
    

  return (
    <div>
      
    <nav>
  <Nav/>
  </nav>
<Box w={"full"} mx={"auto"} p={5}>
  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
    {/*  صفحتي الشخصية */}
    <GridItem w="100%"    padding={2}  borderRadius={'10px'} bg={'gray.100'}>
      <Box p={'12px'} mb={5} pl={2} pr={2} fontWeight={'bold'}>
        <Box float={'right'} ml={5} >الملف الشخصي:</Box>
<Link to={'/userproject'}>
        <Box float={'left'}>
          <Text
          
          w='100%' bg={'none'} color={'#00ADBB'} _hover={{opacity:0.6 }}
          >عرض صفحتي الشخصية <ChevronLeftIcon/></Text>
          </Box>
        </Link>
      </Box>
      <hr />
      {/* الصوره */}
      <Box className="imageProfile" mx={'auto'} w={'130px'}>
        <Stack direction="row" mt={'5px'}>
          <Avatar
            src="https://bit.ly/broken-link"
            w={"130px"}
            h={"130px"}
          />
        </Stack>
        {/* زر تحديث صوره العرض */}
        <Box w={'100%'} mt={'10px'} bg={'#00ADBB'} color={'#fff'}
          _hover={{opacity:0.6 }} fontSize={12} p='5px' borderRadius={'10px'}>تحديث صورتي الشخصية</Box>
      </Box>
      {/* المدخلات */}
      <Box>

        <Box mb={'10px'}>
        <Box float={'right'}>المعلومات الشخصية</Box>
        <Textarea bg={'#fff'} placeholder={`${data.aboutMy }`}  textAlign={'right'}  onChange={(e) => {
          setAboutMy(e.target.value);
        }}></Textarea>
        </Box>

        <Box mb={'10px'}>
        <Box float={'right'}> المهارات</Box>
        <Textarea bg={'#fff'} placeholder={`${data.skill}`}  textAlign={'right'}  onChange={(e) => {
          setSkill(e.target.value);
        }}></Textarea>
        </Box>

        

        <Box mb={'10px'}>
        <Box float={'right'}> حساب لينكد إن  </Box>
        <Input bg={'#fff'} placeholder={`${data.twitterURL}`}  textAlign={'right'}  onChange={(e) => {
          setTwitterURL(e.target.value);
        }}></Input>
        </Box>


       <Box w={'100%'} mb={'10px'} mt={'30px'}>
        <Button textAlign={'center'} w='100%' bg={'#00ADBB'} color={'#fff'} _hover={{opacity:0.6 }} onClick={updateProfle}
>تحديث الملف الشخصي</Button>
       </Box >

      </Box>

    </GridItem>
{/* user info */}
        <GridItem w="auto"  h={'360px'}  padding={2}   borderRadius={'10px'} bg={'gray.100'} >
           <Box pb={'12px'} >
             <Box  textAlign={'right'} fontWeight={'bold'}mt={2} >   معلومات الحساب:</Box>
           </Box >
           <hr />

           <Box pt={'15px'}>
              <Box mb={'10px'} >
                <Box float={'right'}>البريدالإلكتروني</Box>
                <Input bg={'#fff'} placeholder='' textAlign={'right'} readOnly={true}></Input>
              </Box>

              <Box mb={'10px'}>
                <Box float={'right'}> اسم المستخدم</Box>
                <Input bg={'#fff'} placeholder='' textAlign={'right'}></Input>
              </Box>

              <Box mb={'10px'}>
                <Box float={'right'}> الهاتف</Box>
                <Input bg={'#fff'} placeholder='' textAlign={'right'}></Input>
              </Box>
              
              <Box w={'full'} mb={'10px'} mt={'30px'} >
            <Button   textAlign={'center'}  w='full'bg={'#00ADBB'} color={'#fff'} _hover={{opacity:0.6 }}>تحديث معلومات الحساب</Button>
           </Box >

           </Box>
        </GridItem>
      </Grid>
    </Box>
    <footer>
        <Footer/>
       </footer>
    </div>
  );
}

export default ProfilePage;
