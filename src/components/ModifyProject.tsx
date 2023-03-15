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

function ModifyProject() {
  return (
    <div>
       {/* Navbar */}
      <Box mb={10}>
        <Nav />
      </Box>
       {/* Navbar */}

      <Box m={'auto'} w={1000}> 
      <Text textAlign={'center'} fontSize={30}>تعديل</Text>
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
        <Input placeholder=" وصف المشروع  " />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>صورة للمشروع</FormLabel>
        <Input type="file" />
      </FormControl>

         <SimpleGrid columns={2} mt={4}>
              <Button bg="#159741" color={"#fff"}    >
              حفظ
            </Button>
            <Button mr={2}   bg={"#97151D"} color={"#fff"}>
              إلغاء
            </Button>
         </SimpleGrid>

        </Box>

        {/* Footer */}
      <Box mt={10}>
        <Footer />
      </Box>
       {/* Footer */}
    </div>
  );
}

export default ModifyProject;
