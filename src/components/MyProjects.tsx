import { ChevronLeftIcon, DeleteIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  FormLabel,
  Text,
  ModalFooter,
  Select,
  Modal,
  Link,
  Textarea,
  Box,
  SimpleGrid,
  Divider,
  Flex,
  Image,
  chakra,
  Button,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { FiBell } from "react-icons/Fi";
import Footer from "./Footer";
import Nav from "./Nav";

function MyProjects() {
  let {
    isOpen: addIsOpen,
    onOpen: addOnOpen,
    onClose: addOnClose,
  } = useDisclosure();
  let {
    isOpen: modIsOpen,
    onOpen: modOnOpen,
    onClose: modOnClose,
  } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
       <nav>
        <Nav />
      </nav>

     
      {/* موديل لاضافه مشروع جديد */}
      <Modal
        size={"4xl"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={addIsOpen}
        onClose={addOnClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>اضف مشروعك</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel> عنوان المشروع</FormLabel>
              <Input ref={initialRef} placeholder=" عنوان المشروع" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>اسم المعسكر</FormLabel>
              <Select>
              <option ></option>
                <option value=" ">Option 1</option>
                <option value=" ">Option 2</option>
                <option value=" ">Option 3</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>وصف المشروع</FormLabel>
              <Textarea placeholder=" وصف المشروع  " />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel> رابط خارجي للمشروع يحتوي على https او http</FormLabel>
              <Input placeholder=" وصف المشروع  " />
            </FormControl>
          </ModalBody>

          <ModalFooter
            justifyContent={"center"}
            width={"500px"}
            margin={"auto"}
          >
            <Button bg="#159741" color={"#fff"} width={"50%"}>
              حفظ
            </Button>
            <Button
              onClick={addOnClose}
              mr={2}
              width={"50%"}
              bg={"#97151D"}
              color={"#fff"}
            >
              إلغاء
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* موديل للتعديل على مشروع */}

      <Modal
        size={"4xl"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={modIsOpen}
        onClose={modOnClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> تعديل المشروع </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel> عنوان المشروع</FormLabel>
              <Input ref={initialRef} placeholder=" عنوان المشروع" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>اسم المعسكر</FormLabel>
              <Select>
              <option ></option>
                <option value=" ">Option 1</option>
                <option value=" ">Option 2</option>
                <option value=" ">Option 3</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>وصف المشروع</FormLabel>
              <Textarea placeholder=" وصف المشروع  " />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel> رابط خارجي للمشروع يحتوي على https او http</FormLabel>
              <Input placeholder=" وصف المشروع  " />
            </FormControl>
          </ModalBody>

          <ModalFooter width={"500px"} margin={"auto"}>
            <Button bg="#159741" color={"#fff"} width={"50%"}>
              حفظ
            </Button>
            <Button
              onClick={modOnClose}
              mr={2}
              width={"50%"}
              bg={"#97151D"}
              color={"#fff"}
            >
              إلغاء
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* المشاريع */}
      {/* <Box mr={150} mt={20}>
      <Button
        onClick={addOnOpen}
        m="10px"
       bg={'#00ADBB'} color={'#fff'} _hover={{opacity:0.6 }}
      >
        إضافة مشروع جديد
      </Button>
<Text fontSize='3xl'
      textAlign={'right'}

> المشاريع الخاصة بك</Text>

</Box> */}
<Flex ml={40} mb={5} mt={20}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" textAlign={"right"} mr={40}>
          المشاريع الخاصة بك
          </Text>{" "}
        </Box>
        <Spacer />
        <Box>
        <Button
        onClick={addOnOpen}
        m="10px"
       bg={'#00ADBB'} color={'#fff'} _hover={{opacity:0.6 }}
      >
        إضافة مشروع جديد
      </Button>
        </Box>
      </Flex>

<SimpleGrid spacingX={5} spacingY={5} mx="auto"  m={100} mt={10} columns={{ base: 1, md: 2, lg: 3 }}
>
  
  <Box   textAlign={'right'}
 >
  <Flex
     
      _dark={{ bg: "#3e3e3e" }}
     
      w="full"
      alignItems="center"
      justifyContent="center"
      textAlign={'right'}
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color="brand.600"
              _dark={{ color: "brand.400" }}
            >
              المعسكر
            </chakra.span>
            <Box float={'left'}> <IconButton
  color={'red'}
  aria-label='delete'
  icon={<DeleteIcon />}
/>
<IconButton
  mr={5}
  color={'green'}
 

  aria-label='edit'
  icon={<EditIcon />}
/>
</Box>
            
            <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
اسم المشروع            </Link>
           
          </Box>
         
            
         
          
        </Box>
      </Box>
    </Flex>
  </Box>
  <Box >
  <Flex
      _dark={{ bg: "#3e3e3e" }}
      w="full"
      alignItems="center"
      justifyContent="center"
      textAlign={'right'}

    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color="brand.600"
              _dark={{ color: "brand.400" }}
            >
              المعسكر
            </chakra.span>
            <Box float={'left'}> <IconButton
  color={'red'}
  aria-label='delete'
  icon={<DeleteIcon />}
/>
<IconButton
  mr={5}
  color={'green'}
 

  aria-label='edit'
  icon={<EditIcon />}
/>
</Box>
            <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
اسم المشروع            </Link>
            
          </Box>
     

          

        </Box>
      </Box>
    </Flex>
  </Box>
  <Box >
  <Flex
      _dark={{ bg: "#3e3e3e" }}
      w="full"
      alignItems="center"
      justifyContent="center"
      textAlign={'right'}

    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color="brand.600"
              _dark={{ color: "brand.400" }}
            >
              المعسكر
            </chakra.span>
            <Box float={'left'}> <IconButton
  color={'red'}
  aria-label='delete'
  icon={<DeleteIcon />}
/>
<IconButton
  mr={5}
  color={'green'}
 

  aria-label='edit'
  icon={<EditIcon />}
/>
</Box>
            <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
اسم المشروع            </Link>
          
          </Box>

        
          
        </Box>
      </Box>
    </Flex>
  </Box>
  
</SimpleGrid>


     
      <footer>
        <Footer/>
       </footer>
    </>
  );
}

export default MyProjects;
