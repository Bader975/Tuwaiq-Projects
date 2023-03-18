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
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();

  const [name, setName] = React.useState<any>("");
  const [date, setDate] = React.useState<any>("");
  const validation = () => {
    if (name.length == 0 || date.length == 0) {
      setError(true);
    }
  };
  const addCamp = async () => {
    validation()
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

      <Box mx={'auto'} w={{base:300,md:700,lg:800}} minH={'60vh'}> 
      <Text textAlign={'center'} fontSize={30}>إضافة معسكر  </Text>
      <FormControl h={'5rem'}>
                <FormLabel> اسم المعسكر</FormLabel>
                <Input  placeholder=" اسم المعسكر" onChange={(e) => {
              setName(e.target.value);
            }} />
              {error&&name.length<=0?<Box  ><Text  color={'red'} fontSize={15}   >هذا الحقل لا يجب ان يكون فارغا</Text></Box>:''}

              </FormControl>
  
              <FormControl mt={4} h={'5rem'}>
                <FormLabel>  التاريخ  </FormLabel>
                <Input placeholder= "2023 " onChange={(e) => {
              setDate(e.target.value);
            }}/>
                    {error&&date.length<=0?<Box  ><Text  color={'red'} fontSize={15}   >هذا الحقل لا يجب ان يكون فارغا</Text></Box>:''}

              </FormControl>
 
      
      

     

              <SimpleGrid columns={2} mt={6}  >
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
