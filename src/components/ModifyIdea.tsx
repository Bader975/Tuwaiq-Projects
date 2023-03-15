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

function ModifyIdea() {
  return (
    <div>
       {/* Navbar */}
      <Box mb={10}>
        <Nav />
      </Box>
       {/* Navbar */}

      <Box m={'auto'} w={1000} minH={'60vh'}> 
      <Text textAlign={'center'} fontSize={30}>   تعديل  </Text>
      <FormControl>
                <FormLabel>  عنوان الفكرة  </FormLabel>
                <Input  placeholder=" اسم المعسكر" />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>  وصف عن الفكرة  </FormLabel>
                <Textarea placeholder= "اوصف الفكرة " />
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

export default ModifyIdea;
