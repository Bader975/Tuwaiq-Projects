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
import  {Link as RouteLnk } from "@chakra-ui/react";

function AddNewBootcamp() {

  const navigate = useNavigate();

  const [name, setName] = React.useState<any>("");
  const [date, setDate] = React.useState<any>("");
  const addCamp = async () => {
    const data = await (
      await fetch("http://localhost:3008/admin/camp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") as string,
        },
        body: JSON.stringify({
          name,
          date,
        
        }),
      })
    ).json();
    navigate("/Bootcamp");
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
      <Text textAlign={'center'} fontSize={30}>إضافة معسكر  </Text>
      <FormControl>
                <FormLabel> اسم المعسكر</FormLabel>
                <Input  placeholder=" اسم المعسكر"  onChange={(e) => {
              setName(e.target.value);
            }} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>  التاريخ  </FormLabel>
                <Input placeholder= "2023 " onChange={(e) => {
              setDate(e.target.value);
            }}/>
              </FormControl>
 
      
      

     

              <SimpleGrid columns={2} mt={4}>
              <Button bg="#00ADBB" color={"#fff"}   _hover={{opacity:'0.8'}}   onClick={ addCamp} >
              حفظ
            </Button>
            <Button mr={2}   bg={'#fff'}    border='solid 1px lightgray' onClick={()=>navigate("/Bootcamp")}>
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

export default AddNewBootcamp;
