import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import  {Link as RouteLnk } from "@chakra-ui/react";
import {
  FormControl,
  Input,
  FormLabel,
  Text,
  Select,
  Textarea,
  Box,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import './AddNewProject.css';

function AddNewProject() {
  const [title, setTitle] = React.useState<any>("");
  const [nameOfCamp, setNameOfCamp] = React.useState<any>("");
  const [discription, setDiscription] = React.useState<any>("");
  const [projectURL, setProjectURL] = React.useState<any>("");
  const [img, setImg] = React.useState<any>("");
  const [data, setData] = React.useState<any[]>([]);

  const navigate = useNavigate();
  const [error, setError] = React.useState(false);

  const validation = () => {
    if (title.length == 0 || discription.length == 0 ||projectURL.length ==0 || img.length == 0 ) {
      setError(true);
    }
  };

  const addproject = async () => {
    validation()
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

  var fileAsBase64 = React.useCallback((file:File)=>{
    return new Promise((resolve:any, reject:any)=>{
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = err => reject(err)
        })
   },[])
 
  const uploadFileHandler = async (e : any) => {
    var file = e.target.files[0];
    var image  = await fileAsBase64(file).then(img => img).then(img => img)
    setImg(image);
  }

  React.useEffect(() => {
    // fetch data
    const getallcamp = async () => {
      const data = await (await fetch("http://localhost:3008/camp")).json();

      // set state when the data received
      setData(data && data.Camp);
    };

    getallcamp();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Box mb={10}>
        <Nav />
      </Box>
      {/* Navbar */}

      <Box m={"auto"} w={800} >
        <Text textAlign={"center"} fontSize={30}>
          اضافة مشروع جديد
        </Text>
        <FormControl h={'6rem'}>
          <FormLabel> عنوان المشروع</FormLabel>
          <Input
            placeholder=" عنوان المشروع"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {error&&title.length<=0?<Box  ><Text  color={'red'} fontSize={15}   >هذا الحقل لا يجب ان يكون فارغا</Text></Box>:''}

        </FormControl>

        <FormControl mt={4} h={'5rem'}>
          <FormLabel>اسم المعسكر</FormLabel>

          <Select
            onChange={(e) => {
              setNameOfCamp(e.target.value);
            }}
          >
            <option></option>
            {data.map((index: any) => (
              <option>{index.name}</option>

            ))}
          </Select>
        </FormControl>

        <FormControl mt={4} h={'8rem'}>
          <FormLabel>وصف المشروع</FormLabel>
          <Textarea
            placeholder=" وصف المشروع  "
            onChange={(e) => {
              setDiscription(e.target.value);
            }}
          />
          {error&&discription.length<=0?<Box  ><Text  color={'red'} fontSize={15}   >هذا الحقل لا يجب ان يكون فارغا</Text></Box>:''}
          {error&&discription&&discription.split(' ').length<=10?<Box  ><Text  color={'red'} fontSize={15}   > الوصف يجب أن يحتوي على عشر كلمات على الأقل </Text></Box>:''}

        </FormControl>

        <FormControl mt={4} h={'6rem'}>
          <FormLabel> رابط خارجي للمشروع يحتوي على https او http</FormLabel>
          <Input
            placeholder="   رابط خارجي للمشروع  "
            onChange={(e) => {
              setProjectURL(e.target.value);
            }}
          />
          {error&&projectURL.length<=0?<Box  ><Text  color={'red'} fontSize={15}   >هذا الحقل لا يجب ان يكون فارغا</Text></Box>:''}
          {error&&projectURL&&!(projectURL.startsWith('http://')|| projectURL.startsWith('https://'))?<Box  ><Text  color={'red'} fontSize={15}   >هذا الرابط غير صالح</Text></Box>:''}

        </FormControl>

        <FormControl mt={4} h={'6rem'}>
          <FormLabel>صورة للمشروع</FormLabel>
          <Input
          p={0}
          className="custom-file-input"
            type={'File'}
            placeholder=" رابط الصوره"
            onChange={(e) => {
              uploadFileHandler(e);
            }}
          />
          {error&&img.length<=0?<Box  ><Text  color={'red'} fontSize={15}   >هذا الحقل لا يجب ان يكون فارغا</Text></Box>:''}

        </FormControl>

        <SimpleGrid columns={2} mt={4}>
          <Button
            bg="#00ADBB"
            color={"#fff"}
            _hover={{ opacity: "0.8" }}
            onClick={ addproject}
          >
            اضافة
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
