import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
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
  Heading,
  Spacer,
} from "@chakra-ui/react";

function AddNewProject() {
  return (
    <div>
       {/* Navbar */}
      <Box mb={10}>
        <Nav />
      </Box>
       {/* Navbar */}

      <Box m={'auto'} w={800} minH={'60vh'}> 
      <Text textAlign={'center'} fontSize={30}>إضافة مشروع جديد</Text>
      <FormControl>
        <FormLabel> عنوان المشروع</FormLabel>
        <Input placeholder=" عنوان المشروع" />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>اسم المعسكر</FormLabel>
        <Select>
          <option></option>
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
        <Input placeholder="رابط المشروع  " />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>صورة للمشروع</FormLabel>
        <Input type="file" />
      </FormControl>

         <SimpleGrid columns={2} mt={4}>
              <Button bg="#00ADBB" color={"#fff"}   _hover={{opacity:'0.8'}}  >
              حفظ
            </Button>
            <Button mr={2}   bg={'#fff'}    border='solid 1px lightgray'>
              إلغاء
            </Button>
         </SimpleGrid>

        </Box>

        {/* Footer */}
      <Box mt={20}>
        <Footer />
      </Box>
       {/* Footer */}
    </div>
  );
}

export default AddNewProject;
