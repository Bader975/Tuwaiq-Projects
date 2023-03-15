import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import  {Link as RouteLnk } from "@chakra-ui/react";
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

function AddNewProject() {
  const [title, setTitle] = React.useState<any>("");
  const [nameOfCamp, setNameOfCamp] = React.useState<any>("");
  const [discription, setDiscription] = React.useState<any>("");
  const [projectURL, setProjectURL] = React.useState<any>("");
  const [img, setImg] = React.useState<any>("");
  const [data, setData] = React.useState<any[]>([]);

  const navigate = useNavigate();

  const addproject = async () => {
    const data = await (
      await fetch("http://localhost:3008/project/", {
        method: "POST",
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

  React.useEffect(() => {
    // fetch data
    const getallproject = async () => {
      const data = await (await fetch("http://localhost:3008/camp")).json();

      // set state when the data received
      setData(data && data.Camp);
    };

    getallproject();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Box mb={10}>
        <Nav />
      </Box>
      {/* Navbar */}

      <Box m={"auto"} w={800}>
        <Text textAlign={"center"} fontSize={30}>
          اضافة مشروع جديد
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
            {data.map((index: any) => (
              // <option>{`${index.name}` + ` ` + `${index.date}`}</option>
              <option>{index.name}</option>

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
            onClick={ addproject}
          >
            حفظ
          </Button>
          <Button mr={2} bg={"#fff"} border="solid 1px lightgray">
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
