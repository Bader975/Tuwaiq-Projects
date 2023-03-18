import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, Avatar, Stack, Button, Textarea, Input,Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
interface UserData {
  name?: any;
  twitterURL: string;
  skill: string,

}
function ProfilePage() {
  const [data, setData] = React.useState<any>([]);
  const [user, setUser] = React.useState<any>([]);
  const [name, setName] = React.useState<any>("");
  const [twitterURL, setTwitterURL] = React.useState<any>("");
  const [img, setImg] = React.useState<any>("");
  const [skill, setSkill] = React.useState<any>("");
  const [aboutMy, setAboutMy] = React.useState<any>("");
  const [email, setEmail] = React.useState<any>("");
  const [phone_number, setPhone_number] = React.useState <any>("");
  const [discription, setDiscription] = React.useState<any>("");
  
  const navigate = useNavigate()
  const toast = useToast();



  const getUserProfile = async () => {
        // fetch data
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
      // set state when the data received
      setData(data.profile);
      setUser(data.profile.user);
     
    };

    React.useEffect(() => {
    getUserProfile();
  }, []);

 
      
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
              twitterURL,
              // Test USER Info Update 
              // phone_number,
              // name
        
            }),
          })
        ).json();
        // window.location.reload(); 
         toast({
      title: data.message,  
      status: "success",
      duration: 3000,
      position: "top",
    });

    getUserProfile();

        navigate("/Profile") 
               // set state when the data received
      };
      // Upadate User info --------------------------------
      const updateProfleImg = async () => {
        const data = await (
          await fetch(`http://localhost:3008/profile/`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: localStorage.getItem("token") as string,
            },
            body: JSON.stringify({
             
             img
        
            }),
          })
        ).json();
   
         toast({
      title: data.message,  
      status: "success",
      duration: 3000,
      position: "top",
    });

    getUserProfile();

        navigate("/Profile") 
               // set state when the data received
      };
      // --------
  const updateUserInfo = async () => {
    const data = await (
      await fetch(`http://localhost:3008/user/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") as string,
        },
        body: JSON.stringify({
         
        
          // Test USER Info Update 
        phone_number ,
          name
    
        }),
      })
    ).json();
    // window.location.reload();
    // preventDefault();  
    toast({
      title: data.message,  
      status: "success",
      duration: 3000,
      position: "top",
    });
    getUserProfile();
    navigate("/Profile/") 

    console.log(data.message);
           // set state when the data received
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

      </Box>
      <hr />
      {/* الصوره */}
      <Box className="imageProfile" mx={'auto'}  justifyContent={'center'} justifyItems={'center'} w={'130px'}>
        <Stack direction="row" mt={'5px'}>
          <Avatar
            src={data}
            w={"130px"}
            h={"130px"}
          />
        </Stack>
        {/* زر تحديث صوره العرض */}
        <Input type="file" border={'none'} className="custom-file-input2"></Input>
        <Button w={'100%'} mt={'10px'} bg={'#00ADBB'} color={'#fff'}
          _hover={{opacity:0.6 }} fontSize={12} p='5px' borderRadius={'10px'}>تحديث صورتي الشخصية</Button>
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
                <Input bg={'#fff'} placeholder={`${user.email}`} textAlign={'right'} readOnly={true}></Input>
              </Box>

              <Box mb={'10px'}>
                <Box float={'right'}> اسم المستخدم</Box>
                <Input bg={'#fff'} placeholder={`${user.name}`}  textAlign={'right'}  onChange={(e) => {
          setName(e.target.value); }}></Input>
              </Box>

              <Box mb={'10px'}>
                <Box float={'right'}> الهاتف</Box>
                <Input  id='phone' bg={'#fff'} placeholder={`${user.phone_number}`}  textAlign={'right'} onChange={(e) => {
          setPhone_number(e.target.value);}}></Input>
              </Box>

              <Box w={'full'} mb={'10px'} mt={'30px'} >
            <Button   textAlign={'center'}  w='full'bg={'#00ADBB'} color={'#fff'} _hover={{opacity:0.6 }} onClick={updateUserInfo} >تحديث معلومات الحساب</Button>
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

