

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
import { useNavigate, useParams } from "react-router-dom";

function ModifyProject() {
  const [title, setTitle] = React.useState<any>("");
  const [nameOfCamp, setNameOfCamp] = React.useState<any>("");
  const [discription, setDiscription] = React.useState<any>("");
  const [projectURL, setProjectURL] = React.useState<any>("");
  const [img, setImg] = React.useState<any>("");
  const [data, setData] = React.useState<any[]>([]);
  const [camp, setCamp] = React.useState<any[]>([]);

  const navigate = useNavigate();
const {id}=useParams();
React.useEffect(() => {
  // fetch data
  const getProjectByid = async () => {
    const data = await (
      await fetch(
        `http://localhost:3008/project/${id}`
      )
    ).json();
   

    
    // set state when the data received
    setData(data&&data.Project);
  };
const getallcamp = async () => {
    const data = await (await fetch("http://localhost:3008/camp")).json();

    // set state when the data received
    setCamp(data && data.Camp);
  };

  getallcamp();

  getProjectByid();
}, []);




  // fetch data
  



  
  const updateproject = async () => {
    const data = await (
      await fetch(`http://localhost:3008/project/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") as string,
        },
        body: JSON.stringify({
          title,
          nameOfCamp,
          discription,
          projectURL,
          img,
        }),
      })
    ).json();
    navigate("/MyProjects");
    // set state when the data received
  };

  return (
    <div>
      {/* Navbar */}
      <Box mb={10}>
        <Nav />
      </Box>
      {/* Navbar */}

      <Box m={"auto"} w={800}>
        <Text textAlign={"center"} fontSize={30}>
          تعديل المشروع 
        </Text>
        <FormControl>
          <FormLabel> عنوان المشروع</FormLabel>
          <Input
            placeholder=" عنوان المشروع"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
         
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>اسم المعسكر</FormLabel>

          <Select
            onChange={(e) => {
              setNameOfCamp(e.target.value);
            }}
          >
            <option></option>
            {camp.map((index1: any) => (
              // <option>{`${index.name}` + ` ` + `${index.date}`}</option>
              <option>{index1.name}</option>

            ))}
          </Select>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>وصف المشروع</FormLabel>
          <Textarea
            placeholder=" وصف المشروع  "
            onChange={(e) => {
              setDiscription(e.target.value);
            }}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel> رابط خارجي للمشروع يحتوي على https او http</FormLabel>
          <Input
            placeholder=" وصف المشروع  "
            onChange={(e) => {
              setProjectURL(e.target.value);
            }}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>صورة للمشروع</FormLabel>
          <Input
            
            placeholder=" رابط الصوره"
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </FormControl>

        <SimpleGrid columns={2} mt={4}>
          <Button
            bg="#00ADBB"
            color={"#fff"}
            _hover={{ opacity: "0.8" }}
            onClick={ updateproject}
          >
            حفظ
          </Button>
          <Button mr={2} bg={"#fff"} border="solid 1px lightgray" onClick={()=>navigate("/MyProjects")}>
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

export default ModifyProject;
