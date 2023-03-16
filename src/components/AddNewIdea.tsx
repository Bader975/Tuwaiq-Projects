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
import { useNavigate } from "react-router-dom";

function AddNewIdea() {
  const navigate = useNavigate();

  const [title, setTitle] = React.useState<any>("");
  const [discription, setDiscription] = React.useState<any>("");
  const addIdea = async () => {
    const data = await (
      await fetch("http://localhost:3008/idea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") as string,
        },
        body: JSON.stringify({
          title,
          discription,
        
        }),
      })
    ).json();
    navigate("/Myideas");
    // set state when the data received
  };

  return (
    <div>
       {/* Navbar */}
      <Box mb={10}>
        <Nav />
      </Box>
       {/* Navbar */}

      <Box m={'auto'} w={800} minH={'60vh'}> 
      <Text textAlign={'center'} fontSize={30}>إضافة فكرة  </Text>
      <FormControl>
                <FormLabel>  عنوان الفكرة  </FormLabel>
                <Input  placeholder=" عنوان الفكرة " onChange={(e) => {
              setTitle(e.target.value);
            }}
                />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>  وصف عن الفكرة  </FormLabel>
                <Textarea placeholder= "اوصف الفكرة " onChange={(e) => {
              setDiscription(e.target.value);
            }}
                />
              </FormControl>
 
      
      

     

              <SimpleGrid columns={2} mt={4}>
              <Button bg="#00ADBB" color={"#fff"}   _hover={{opacity:'0.8'}}  onClick={ addIdea} >
              حفظ
            </Button>
            <Button mr={2}   bg={'#fff'}    border='solid 1px lightgray' onClick={()=>navigate("/Myideas")}>
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

export default AddNewIdea;
