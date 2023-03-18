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
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();

  const [title, setTitle] = React.useState<any>("");
  const [discription, setDiscription] = React.useState<any>("");
 
  const validation = () => {
    if (title.length == 0 || discription.length == 0) {
      setError(true);
    }
  };

  const addIdea = async () => {
   
    validation()
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

      <Box m={"auto"} w={800} minH={"60vh"} >
        <Text textAlign={"center"} fontSize={30}>
          إضافة فكرة{" "}
        </Text>
        <FormControl   h={'6rem'}>
          <FormLabel> عنوان الفكرة </FormLabel>
          <Input
            placeholder=" عنوان الفكرة "
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        {error&&title.length<=0?<Box  ><Text  color={'red'} fontSize={15}   >هذا الحقل لا يجب ان يكون فارغا</Text></Box>:''}

        </FormControl>

        <FormControl mt={4} h={'8rem'}>
          <FormLabel > وصف عن الفكرة </FormLabel>
          <Textarea
            placeholder="اوصف الفكرة "
            onChange={(e) => {
              setDiscription(e.target.value);
            }}
          />
                  {error&&discription.length<=0?<Box  ><Text  color={'red'} fontSize={15}   >هذا الحقل لا يجب ان يكون فارغا</Text></Box>:''}
                  {error&&discription&&discription.split(' ').length<=10?<Box  ><Text  color={'red'} fontSize={15}   > الوصف يجب أن يحتوي على عشر كلمات على الأقل </Text></Box>:''}


        </FormControl>

        <SimpleGrid columns={2} mt={4}>
          <Button
            bg="#00ADBB"
            color={"#fff"}
            _hover={{ opacity: "0.8" }}
            onClick={addIdea}
          >
            حفظ
          </Button>
          <Button
            mr={2}
            bg={"#fff"}
            border="solid 1px lightgray"
            onClick={() => navigate("/Myideas")}
          >
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
