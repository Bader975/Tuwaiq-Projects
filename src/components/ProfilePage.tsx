import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  GridItem,
  Avatar,
  Stack,
  Button,
  Textarea,
  Input,
  Text,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
interface UserData {
  name?: any;
  twitterURL: string;
  skill: string;
}
function ProfilePage() {
  const [data, setData] = React.useState<any>([]);
  const [user, setUser] = React.useState<any>([]);
  const [name, setName] = React.useState<any>("");
  const [twitterURL, setTwitterURL] = React.useState<any>("");
  const [img, setImg] = React.useState<any>("");
  const [profleImg, setProfleImg] = React.useState<any>("");
  const [skill, setSkill] = React.useState<any>("");
  const [aboutMy, setAboutMy] = React.useState<any>("");
  const [email, setEmail] = React.useState<any>("");
  const [phone_number, setPhone_number] = React.useState<any>("");
  const [discription, setDiscription] = React.useState<any>("");

  const navigate = useNavigate();
  const toast = useToast();

  var fileAsBase64 = React.useCallback((file: File) => {
    return new Promise((resolve: any, reject: any) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  }, []);

  const uploadFileHandler = async (e: any) => {
    let file = e.target.files[0];
    let image = await fileAsBase64(file)
      .then((img) => img)
      .then((img) => img);
    setImg(image);
  };

  const getUserProfile = async () => {
    // fetch data
    const data = await (
      await fetch(" https://tuwaiq-api.onrender.com/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") as string,
        },
      })
    ).json();
    // set state when the data received
    setData(data.profile);
    setUser(data.profile.user);
    setProfleImg(data.profile.img);
  };

  React.useEffect(() => {
    getUserProfile();
  }, []);

  const updateProfle = async () => {
    const data = await (
      await fetch(` https://tuwaiq-api.onrender.com/profile/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") as string,
        },
        body: JSON.stringify({
          skill,
          aboutMy,
          twitterURL,
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

    navigate("/Profile");
    // set state when the data received
  };

  // Upadate User Image --------------------------------
  const updateProfleImg = async () => {
    const data = await (
      await fetch(` https://tuwaiq-api.onrender.com/profile/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") as string,
        },
        body: JSON.stringify({
          img,
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

    navigate("/Profile");
    // set state when the data received
  };
  // --------
  const updateUserInfo = async () => {
    const data = await (
      await fetch(` https://tuwaiq-api.onrender.com/user/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") as string,
        },
        body: JSON.stringify({
          // Test USER Info Update
          phone_number,
          name,
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
    navigate("/Profile/");

     (data.message);
    // set state when the data received
  };

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <Box w={"full"} mx={"auto"} p={5}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={6}>
          {/*  صفحتي الشخصية */}
          <GridItem w="100%" padding={2} borderRadius={"10px"} bg={"gray.100"}>
            <Box p={"12px"} mb={5} pl={2} pr={2} fontWeight={"bold"}>
              <Box float={"right"} ml={5}>
                الملف الشخصي:
              </Box>
            </Box>
            <hr />
            {/* الصوره */}
            <Box
              className="imageProfile"
              mx={"auto"}
              justifyContent={"center"}
              justifyItems={"center"}
              w={"130px"}
            >
              <Stack direction="row" mt={"5px"}>
                <Avatar
                  src={profleImg}
                  // src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3'
                  w={"130px"}
                  h={"130px"}
                />
              </Stack>
              {/* زر تحديث صوره العرض */}
              <Input
                type="file"
                border={"none"}

                className="custom-file-input2"
                onChange={(e) => {
                  uploadFileHandler(e);
                }}
              ></Input>
              <Button
                w={"100%"}
                mt={"10px"}
                bg={"#00ADBB"}
                color={"#fff"}
                _hover={{ opacity: 0.6 }}
                fontSize={12}
                p="5px"
                borderRadius={"10px"}
                onClick={updateProfleImg}
              >
                تحديث صورتي الشخصية
              </Button>
            </Box>
            {/* المدخلات */}
            <Box>
              <Box mb={"10px"}>
                <Box float={"right"}>المعلومات الشخصية</Box>
                <Textarea
                  bg={"#fff"}
                  
                  placeholder={data.aboutMy ==null ? " لا يوجد بياتات حتى الان" : data.aboutMy}
                  textAlign={"right"}
                  onChange={(e) => {
                    setAboutMy(e.target.value);
                  }}
                ></Textarea>
              </Box>

              <Box mb={"10px"}>
                <Box float={"right"}> المهارات</Box>
                <Textarea
                  bg={"#fff"}
                  // placeholder={`${data.skill}`}
                  placeholder={data.skill ==null ? " لا يوجد بياتات حتى الان" : data.skill}
                  // value={`${data.skill}`}
                  
                  textAlign={"right"}

                  onChange={(e) => {
                    setSkill(e.target.value);
                  }}
                ></Textarea>
              </Box>

              <Box mb={"10px"}>
                <Box float={"right"}> حساب لينكد إن </Box>
                <Input
                  bg={"#fff"}

                  placeholder={data.twitterURL ==null ? " لا يوجد بياتات حتى الان" : data.twitterURL}
                  textAlign={"right"}
                  onChange={(e) => {
                    setTwitterURL(e.target.value);
                  }}
                ></Input>
              </Box>

              <Box w={"100%"} mb={"10px"} mt={"30px"}>
                <Button
                  textAlign={"center"}
                  w="100%"
                  bg={"#00ADBB"}
                  color={"#fff"}
                  _hover={{ opacity: 0.6 }}
                  onClick={updateProfle}
                >
                  تحديث الملف الشخصي
                </Button>
              </Box>
            </Box>
          </GridItem>
          {/* user info */}
          <GridItem
            w="auto"
            h={"360px"}
            padding={2}
            borderRadius={"10px"}
            bg={"gray.100"}
          >
            <Box pb={"12px"}>
              <Box textAlign={"right"} fontWeight={"bold"} mt={2}>
                {" "}
                معلومات الحساب:
              </Box>
            </Box>
            <hr />

            <Box pt={"15px"}>
              <Box mb={"10px"}>
                <Box float={"right"}>البريدالإلكتروني</Box>
                <Input
                  bg={"#fff"}
                  placeholder={`${user.email}`}
                  textAlign={"right"}
                  readOnly={true}
                ></Input>
              </Box>

              <Box mb={"10px"}>
                <Box float={"right"}> اسم المستخدم</Box>
                <Input
                  bg={"#fff"}
                  placeholder={`${user.name}`}
                  textAlign={"right"}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></Input>
              </Box>

              <Box mb={"10px"}>
                <Box float={"right"}> الهاتف</Box>
                <Input
                  id="phone"
                  bg={"#fff"}
                  placeholder={`${user.phone_number === null ? "لا يوجد معلومات" : user.phone_number}`}
                  textAlign={"right"}
                  onChange={(e) => {
                    setPhone_number(e.target.value);
                  }}
                ></Input>
              </Box>

              <Box w={"full"} mb={"10px"} mt={"30px"}>
                <Button
                  textAlign={"center"}
                  w="full"
                  bg={"#00ADBB"}
                  color={"#fff"}
                  _hover={{ opacity: 0.6 }}
                  onClick={updateUserInfo}
                >
                  تحديث معلومات الحساب
                </Button>
              </Box>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ProfilePage;
