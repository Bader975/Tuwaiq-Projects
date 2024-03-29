import React, { useReducer } from "react";
import tuwaiqSvg from "../assets/tuwaiq_logo.svg";

import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Link,
  VStack,
  chakra,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Image,
  Spacer,
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  Text,
  MenuList,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import {
  AiOutlineMenu,
} from "react-icons/ai";
// import { FiBell, FiChevronDown } from "react-icons/fi";

import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink as RouteLink, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const reduser = (state: any, action: any) => {
  if (action.type === "user logIn") return { user: (state.user = true) };
  if (action.type === "user LogOut") return { user: (state.user = false) };
};
function Nav() {
  const user = localStorage.getItem("token");
  const [data, setData] = React.useState<any>([]);
  const [user1, setUser1] = React.useState<any>([]);
  const [name, setName] = React.useState<any>("");
  const [profleImg, setProfleImg] = React.useState<any>("");
  const [twitterURL, setTwitterURL] = React.useState<any>("");
  const [img, setImg] = React.useState<any>("");

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
    setUser1(data.profile && data.profile.user);
    setProfleImg(data.profile && data.profile.img);
  };

  React.useEffect(() => {
    getUserProfile();
  }, []);


  const removeUser = () => {
    localStorage.clear();
    navigate("/login");
  };

  const initialState = { user: true };
  const [state, dispatch]: any = useReducer<any>(reduser, initialState);

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("fffff", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("#001F33", "gray.800");
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const MobileNavContent = (
    <VStack
      pos="fixed"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />

      <Link href="#home">
        <Button w="full" variant="light">
          الصفحة الرئيسية
        </Button>
      </Link>
      <Link href="#about">
        <Button w="full" color="light">
          جميع المشاريع
        </Button>
      </Link>
    </VStack>
  );
  // Get Method
  const navigate = useNavigate();

  return (
    <>
      <chakra.header
        ref={ref}
        // shadow={y > height ? "sm" : undefined}
        //  boxShadow='dark-md'
        bg={"#122A47"}
        w="full"
        overflowY="hidden"
        mb={0}
      >
        <chakra.div h="4.5rem" mx="auto" maxW="100%" bg={"#122A47"}>
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <Link href="/">
                <HStack></HStack>
              </Link>
            </Flex>

            <Flex>
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <RouteLink to={"/"} >
                  <Image w="full" h={10} src={tuwaiqSvg} alt="logo" />
                </RouteLink>
                <RouteLink to={"/"} className={({ isActive }) => isActive ? "nav-Active-Link" : ""}>
                  <Button
                    bg={"none"}
                    color="white"
                    display="inline-flex"
                    alignItems="center"
                    fontSize="md"
                    _hover={{ color: "#00ADBB", backgroundColor: "none" }}
                  >
                    الصفحة الرئيسية
                  </Button>
                </RouteLink>
                <RouteLink to="/Allproject" className={({ isActive }) => isActive ? "nav-Active-Link" : ""}>
                  <Button
                    bg={"none"}
                    color="white"
                    display="inline-flex"
                    alignItems="center"
                    fontSize="md"
                    _hover={{ color: "#00ADBB", backgroundColor: "none" }}
                  >
                    جميع المشاريع
                  </Button>
                </RouteLink>
                <RouteLink to="/Allideas" className={({ isActive }) => isActive ? "nav-Active-Link" : ""}>
                  <Button
                    bg={"none"}
                    color="white"
                    display="inline-flex"
                    alignItems="center"
                    fontSize="md"
                    _hover={{ color: "#00ADBB", backgroundColor: "none" }}
                  >
                    جميع الأفكار
                  </Button>
                </RouteLink>
                {localStorage.getItem('role') == "Admin" ?
                  <RouteLink to="/Bootcamp" className={({ isActive }) => isActive ? "nav-Active-Link" : ""}>
                    <Button
                      bg={"none"}
                      color="white"
                      display="inline-flex"
                      alignItems="center"
                      fontSize="md"
                      _hover={{ color: "#00ADBB", backgroundColor: "none" }}
                    >
                      المعسكرات
                    </Button>
                  </RouteLink>
                  : ""}
              </HStack>
            </Flex>
            <Spacer />

            <Flex justify="flex-end" align="center">


              {user === null ? (
                <RouteLink to={"/LoginPage"}>
                  <Button
                    _hover={{ color: "white", backgroundColor: "#00ADBB" }}
                    onClick={() => dispatch({ type: "user logIn" })}
                    color={"#00ADBB"}
                    bg={"none"}
                    border="1px solid #00ADBB"

                  >
                    تسجيل دخول
                  </Button>
                </RouteLink>
              ) : (
                <HStack spacing={{ base: "0", md: "6" }}>
                  <IconButton
                    size="lg"
                    color={"#fff"}
                    _hover={{ color: "none", backgroundColor: "none" }}
                    mr={5}
                    bg={"none"}
                    aria-label=""
                    // icon={<FiBell />}
                  />
                  <Flex alignItems={"flex-end"}>
                    <Menu>
                      <MenuButton
                        py={2}
                        transition="all 0.3s"
                        _focus={{ boxShadow: "none" }}
                      >
                        <HStack>
                          <Avatar
                            size={"sm"}
                            src={
                              profleImg
                            }
                          />
                          <VStack
                            display={{ base: "none", md: "flex" }}
                            alignItems="flex-start"
                            spacing="1px"
                            ml="2"
                          ></VStack>
                          <Box display={{ base: "none", md: "flex" }}>
                            {/* <FiChevronDown color="#fff" /> */}
                          </Box>
                        </HStack>
                      </MenuButton>
                      <MenuList
                        zIndex={2}
                        bg={useColorModeValue("white", "gray.900")}
                        borderColor={useColorModeValue("gray.200", "gray.700")}
                      >
                        <Box textAlign={"center"} fontWeight={"bold"}>
                          مرحبا: {localStorage.getItem('name')}
                        </Box>
                        <MenuDivider />
                        {
                          localStorage.getItem('role') == "User" ?
                            <RouteLink to={"/Profile"}>
                              <MenuItem
                                _hover={{
                                  color: "#00ADBB",
                                  backgroundColor: "none",
                                }}
                              >
                                الملف الشخصي
                              </MenuItem>
                              <MenuDivider />
                            </RouteLink>

                            : localStorage.getItem('role') == "Admin" || "Company" ? "" : ""}


                        {
                          localStorage.getItem('role') == "User" ? <RouteLink to={"/MyProjects"}>
                            <MenuItem
                              _hover={{
                                color: "#00ADBB",
                                backgroundColor: "none",
                              }}
                            >
                              مشاريعي
                            </MenuItem>
                          </RouteLink> : localStorage.getItem('role') == "Company" ? <RouteLink to={"/Myideas"}>
                            <MenuItem
                              _hover={{
                                color: "#00ADBB",
                                backgroundColor: "none",
                              }}
                            >
                              أفكاري
                            </MenuItem>
                          </RouteLink> : ""}

                        <MenuDivider />
                        <RouteLink to={"/"}>
                          <Button
                            textAlign={"center"}
                            w={"full"}
                            color={'red'}
                            rightIcon={<BiLogOut />}
                            onClick={() => removeUser()}
                            bg={"none"}
                            _hover={{
                              color: "#00ADBB",
                              backgroundColor: "none",
                            }}
                          >
                            تسجيل خروج
                          </Button>
                        </RouteLink>
                      </MenuList>
                    </Menu>
                  </Flex>
                </HStack>
              )}
              {/*  */}

              <RouteLink to={"/login"}></RouteLink>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="white"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </>
  );
}




export default Nav;
