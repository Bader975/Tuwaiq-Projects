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
  Text,
  useToast,
  InputGroup,
  InputRightAddon,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tuwaiqSvg from "../img/logIn_img.png";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { MDBCheckbox } from "mdb-react-ui-kit";

function AdminSignUpPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [email, setEmail] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [password2, setPassword2] = useState("");
  const [cheked, setChecked] = React.useState(true);

  const [error, setError] = React.useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  // axios.post("http://localhost:3008/user/login",
  const submitLogin = async () => {
    if (
      name.length == 0 ||
      email.length == 0 ||
      employeeID.length == 0 ||
      password.length == 0 ||
      password2.length == 0 ||
      !cheked ||
      (password && password2 && password !== password2)
    ) {
      setError(true);
      setChecked(false);
    } else {
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
            role,
            employeeID,
          }),
        });
        const data = await request.json();
        if (request.status !== 200) {
          toast({
            title: data.message + " " + data.newUser.name,
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
    }
  };

  return (
    <div>
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
          <Box width={400}>
            <Link to={"/"}>
              <Image w={300} src={tuwaiqSvg} alt="logo" mb={5} mr={16} />
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
              تسجيل جديد كمسؤول{" "}
            </Heading>

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
                  type="tel"
                  bg={"#fff"}
                  textAlign={"right"}

                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </InputGroup>
              {error && email.length <= 0 ? (
                <Box>
                  <Text color={"red"} fontSize={15}>
                    هذا الحقل لا يجب ان يكون فارغا
                  </Text>
                </Box>
              ) : (
                ""
              )}
              {error && email && !email.includes("@") ? (
                <Box>
                  <Text color={"red"}> البريدالإلكتروني غير صالح</Text>
                </Box>
              ) : (
                ""
              )}
            </Box>

            <Box h={"90px"}>
              <Box float={"right"} fontWeight={"bold"}>
                {" "}
                اسم المستخدم{" "}
              </Box>
              <InputGroup>
                <InputRightAddon
                  pointerEvents="none"
                  children={<FaUserAlt color="#00ADBB" />}
                />

                <Input
                  type="tel"
                  bg={"#fff"}
                  textAlign={"right"}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </InputGroup>
              {error && name.length <= 0 ? (
                <Box float={"right"}>
                  <Text color={"red"} fontSize={15}>
                    هذا الحقل لا يجب ان يكون فارغا
                  </Text>
                </Box>
              ) : (
                ""
              )}
            </Box>
            <Box h={"90px"}>
              <Box float={"right"} fontWeight={"bold"}>
                {" "}
                الرقم الوظيفي{" "}
              </Box>
              <InputGroup>
                <InputRightAddon
                  pointerEvents="none"
                  children={<MdOutlineWork color="#00ADBB" />}
                />

                <Input
                  type="tel"
                  bg={"#fff"}
                  textAlign={"right"}
                  onChange={(e) => {
                    setEmployeeID(e.target.value);
                  }}
                />
              </InputGroup>
              {error && employeeID.length <= 0 ? (
                <Box>
                  <Text color={"red"} fontSize={15}>
                    هذا الحقل لا يجب ان يكون فارغا
                  </Text>
                </Box>
              ) : (
                ""
              )}
              {error && employeeID && employeeID.length <= 4 ? (
                <Box>
                  <Text color={"red"} fontSize={15}>
                    الرقم الوظيفي غير صالح{" "}
                  </Text>
                </Box>
              ) : (
                ""
              )}
            </Box>

            <Box h={"90px"}>
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
              {error && password.length <= 0 ? (
                <Box float={"right"}>
                  <Text color={"red"} fontSize={15}>
                    هذا الحقل لا يجب ان يكون فارغا
                  </Text>
                </Box>
              ) : (
                ""
              )}
              {error && password && password.length <= 6 ? (
                <Box>
                  <Text color={"red"} fontSize={15}>
                    كلمة السر قصيرة{" "}
                  </Text>
                </Box>
              ) : (
                ""
              )}
            </Box>
            <Box h={"90px"}>
              <Box float={"right"} fontWeight={"bold"}>
                {" "}
                تأكيد كلمة المرور{" "}
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
                    setPassword2(e.target.value);
                  }}
                />
              </InputGroup>
              {error && password2.length <= 0 ? (
                <Box>
                  <Text color={"red"} fontSize={15}>
                    هذا الحقل لا يجب ان يكون فارغا
                  </Text>
                </Box>
              ) : (
                ""
              )}

              {error && password2 && password2 !== password ? (
                <Box>
                  <Text color={"red"} fontSize={15}>
                    كلمة السر ليست متساوية{" "}
                  </Text>
                </Box>
              ) : (
                ""
              )}
            </Box>
            <Box h={"85px"}>
              <Box float="right" mx={'auto'}>
                <Checkbox colorScheme='blue'
                  value="naruto"
                  onClick={(e) => {
                    setChecked(true);
                  }}
                ></Checkbox>

              </Box>

              <Text float={"right"} mr={1}>
                {" "}
                بالتسجيل أقر بأني قرأت
              </Text>
              <Box mb={2}>
                <Text display={"inline"} mr={1} color={"#00ADBB"}>
                  شروط الاستخدام و سياسية الخصوصية
                </Text>
                <Text display={"inline"} mr={1}>
                  وأوافق عليها
                </Text>
              </Box>
              {!cheked ? (
                <Text color={"red"}>
                  {" "}
                  يجب ان توافق على شروط الاستخدام و سياسية الخصوصية{" "}
                </Text>
              ) : (
                cheked
              )}
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
                تسجيل{" "}
              </Button>
            </Box>
          </Box>
          <br></br>
          <Box>
            <Box float={"right"} ml={1}>
              {" "}
              لديك حساب؟{" "}
            </Box>

            <Box float={"right"} color={"#00ADBB"}>
              <Link to={"/LoginPage"}> تسجيل دخول </Link>{" "}
            </Box>
          </Box>{" "}
        </GridItem>
      </Grid>
    </div>
  );
}

export default AdminSignUpPage;
