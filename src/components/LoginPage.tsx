import React from "react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  Heading,
  Input,
  Button,
  Box,
  Image,
  useToast,
  InputGroup,
  Checkbox,
  InputRightAddon,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tuwaiqSvg from "../assets/logIn_img.png";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = React.useState<any>([]);

  const toast = useToast();
  const navigate = useNavigate();


  const submitLogin = async () => {
    try {
      // const request = await fetch(" https://tuwaiq-api.onrender.com/user/login", {
      const request = await fetch("https://tuwaiq-api.onrender.com/user/login", {
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
          duration: 4000,
          position: "top",
        });
        return;
      } else {
        toast({
          title: data.message,
          status: "success",
          duration: 3000,
          position: "top",
        });
        
        navigate("/");
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", data.name);
        sessionStorage.setItem("token", data.token);

      }
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
    <>
      <Grid mt={20}>
        {/*  صفحتي الشخصية */}
        <GridItem
          w="auto"
          mx={"auto"}
          p={20}
          pt={10}
          borderRadius={"10px"}
          bg={"#fff"}
          shadow={"2xl"}
        >
          <Box>
            <Link to={"/"}>
              <Image w={300} src={tuwaiqSvg} alt="logo" mb={5} />
            </Link>
            <Heading
              as="h1"
              size="lg"
              mx={"auto"}
              color={"#009FAE"}
              textAlign={"center"}
              mb={10}
              p={2}
            >
              تسجيل دخول
            </Heading>
            <form>
              <Box mb={"10px"}>
                <Box float={"right"} fontWeight={"bold"}>
                  {" "}
                  البريد الإلكتروني{" "}
                </Box>
                <InputGroup>
                  <InputRightAddon
                    pointerEvents="none"
                    children={<EmailIcon color="#00ADBB" />}
                  />

                  <Input
                    type="email"
                    bg={"#fff"}
                    textAlign={"right"}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </InputGroup>
              </Box>

              <br></br>

              <Box mb={"10px"}>
                <Box float={"right"} fontWeight={"bold"}>
                  {" "}
                  كلمة المرور{" "}
                </Box>

                <InputGroup>
                  <InputRightAddon
                    pointerEvents="none"
                    children={<LockIcon color="#00ADBB" />}
                  />

                  <Input
                    type="password"
                    bg={"#fff"}
                    textAlign={"right"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </InputGroup>
              </Box>
            </form>
            <Box>
              <Checkbox value="naruto">تذكرني</Checkbox>
              <Box float={"left"} color={"#00ADBB"}>
                {" "}
                نسيت كلمة المرور؟{" "}
              </Box>
            </Box>

            <Box w={"full"} mb={"10px"} mt={"30px"}>
              <Button
                textAlign={"center"}
                bg={"#00ADBB"}
                color={"#fff"}
                w="100%"
                _hover={{ opacity: 0.6 }}
                onClick={submitLogin}
              >
                {" "}
                دخول{" "}
              </Button>
            </Box>
            <Box>
              <Box>
                <Box float={"right"} ml={3}>
                  ليس لديك حساب؟{" "}
                </Box>

                <Box float={"right"} color={"#00ADBB"}>
                  <Link to={"/SignUpPage"}> إنشاء حساب </Link>{" "}
                </Box>
              </Box>
              <Box>
                <br></br>
                <Box float={"right"} ml={1}>
                  أو{" "}
                </Box>

                <Box float={"right"} ml={1} color={"#00ADBB"}>
                  <Link to={"/CompamySignUp"}> إنشاء حساب كشركة</Link>{" "}
                </Box>

                <Box float={"right"} ml={1}>
                  أو{" "}
                </Box>
                <Box float={"right"} color={"#00ADBB"} ml={1}>
                  <Link to={"/AdminSignUpPage"}> كمسؤول</Link>{" "}
                </Box>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default LoginPage;
