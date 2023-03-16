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
  useToast,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

function ModifyIdea() {
  const [data, setData] = React.useState<any>([]);
  const [title, setTitle] = React.useState<any>("");
  const [discription, setDiscription] = React.useState<any>("");
  
  const navigate = useNavigate();
const {id}=useParams();

  React.useEffect(() => {
    // fetch data
    const getCampByid = async () => {
      const data = await (
        await fetch(
          `http://localhost:3008/camp/${id}`
        )
      ).json();
     
      
      // set state when the data received
      setData(data&&data.Camp);
    };

    getCampByid();
  }, []);
  
  console.log(data);


//update boot camp


const updateCamp = async () => {
  const data = await (
    await fetch(`http://localhost:3008/idea/${id}`, {
      method: "PUT",
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
  console.log(data.message);
};


  return (
    <div>
      
       {/* Navbar */}
      <Box mb={10}>
        <Nav />
      </Box>
       {/* Navbar */}
{/* <input type='text' value={data.name} ></input> */}
      <Box m={'auto'} w={800} minH={'60vh'}> 
      <Text textAlign={'center'} fontSize={30}> تعديل  </Text>
      <FormControl>
      <FormLabel> عنوان الفكرة </FormLabel>
                <Textarea  placeholder={`${data.name}`} contentEditable={true} onChange={(e) => {
              setTitle(e.target.value);
            }} ></Textarea>
              </FormControl>
              {/* {data.name} */}



              <FormControl mt={4}>
                <FormLabel>  اوصف الفكرة  </FormLabel>


                <Input placeholder={`${data.date}`} onChange={(e) => {
              setDiscription(e.target.value);
            }}>
              
              </Input>
              </FormControl>
 
      
      

     

              <SimpleGrid columns={2} mt={4}>
              <Button bg="#00ADBB" color={"#fff"}   _hover={{opacity:'0.8'}}  onClick={ updateCamp} >
              حفظ
            </Button>
            <Button mr={2}   bg={'#fff'}    border='solid 1px lightgray'onClick={()=>navigate("/Myideas")}>
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

export default ModifyIdea;
function toast(arg0: { title: string; description: any; status: string; duration: number; isClosable: boolean; }) {
  throw new Error("Function not implemented.");
}

