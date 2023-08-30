import React, { useState } from "react";
// import { DatePicker } from 'chakra-ui-date-input'
import Footer from ".././Footer";
import Nav from ".././Nav";
import { Link as RouteLnk } from "@chakra-ui/react";
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
// import { SingleDatepicker } from "chakra-dayzed-datepicker";

function AddNewProject() {
  const [title, setTitle] = React.useState<any>("");
  const [nameOfCamp, setNameOfCamp] = React.useState<any>("");
  const [discription, setDiscription] = React.useState<any>("");
  const [projectURL, setProjectURL] = React.useState<any>("");
  const [img, setImg] = React.useState<any>("");
  // const [date, setDate] = React.useState<any>("");
  const [data, setData] = React.useState<any[]>([]);
  const [date, setDate] = useState<any>();
  const navigate = useNavigate();
  const [error, setError] = React.useState(false);

  const validation = () => {
    if (title.length == 0 || discription.length == 0 || projectURL.length == 0 || img.length == 0) {
      setError(true);
    }
  };

  const addproject = async () => {
    validation()
    const data = await (
      await fetch(" https://tuwaiq-api.onrender.com/project/", {
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
          date
        }),
      })
    ).json();
    navigate("/MyProjects");
    // set state when the data received
  };

  let fileAsBase64 = React.useCallback((file: File) => {
    return new Promise((resolve: any, reject: any) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result)
      reader.onerror = err => reject(err)
    })
  }, [])

  const uploadFileHandler = async (e: any) => {
    let file = e.target.files[0];
    let image = await fileAsBase64(file).then(img => img).then(img => img)
    setImg(image);
  }

  React.useEffect(() => {
    // fetch data
    const getallcamp = async () => {
      const data = await (await fetch(" https://tuwaiq-api.onrender.com/camp")).json();


      // set state when the data received
      setData(data && data.Camp);
    };

    getallcamp();
  }, []);

  return (
    <>
      {/* Navbar */}
      <Box mb={10}>
        <Nav />
      </Box>
      {/* Navbar */}

      <Box m={"auto"} w={{ base: 300, md: 500, lg: 800 }} boxShadow={'dark-lg'} rounded={'xl'} p={10}>
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
          {error && title.length <= 0 ? <Box  ><Text color={'red'} fontSize={15}   >هذا الحقل لا يجب ان يكون فارغا</Text></Box> : ''}

        </FormControl>

        <FormControl mt={4}>
          <FormLabel>اسم المعسكر</FormLabel>

          <Select w={100}
            onChange={(e) => {
              setNameOfCamp(e.target.value);
            }}
          >
            <option></option>
            {data.map((index: any) => (
              <option key={index.id}>{index.name}</option>

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
          {error && discription.length <= 0 ? <Box  ><Text color={'red'} fontSize={15}   >هذا الحقل لا يجب ان يكون فارغا</Text></Box> : ''}
          {error && discription && discription.split(' ').length <= 10 ? <Box  ><Text color={'red'} fontSize={15}   > الوصف يجب أن يحتوي على عشر كلمات على الأقل </Text></Box> : ''}

        </FormControl>

        <FormControl mt={4} h={'6rem'}>
          <FormLabel> رابط خارجي للمشروع يحتوي على https او http</FormLabel>
          <Input
            placeholder="   رابط خارجي للمشروع  "
            onChange={(e) => {
              setProjectURL(e.target.value);
            }}
          />
          {error && projectURL.length <= 0 ? <Box  ><Text color={'red'} fontSize={15}   >هذا الحقل لا يجب ان يكون فارغا</Text></Box> : ''}
          {error && projectURL && !(projectURL.startsWith('http://') || projectURL.startsWith('https://')) ? <Box  ><Text color={'red'} fontSize={15}   >هذا الرابط غير صالح</Text></Box> : ''}

        </FormControl>

        <FormControl>
          <FormLabel> تاريخ المشروع</FormLabel>
          <Input
            placeholder=" 2/02/2023 "
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          {/* <SingleDatepicker
            name="date-input"

            date={date}
            onDateChange={setDate}
          /> */}

        </FormControl>

        <FormControl mt={4} p={0}>
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
          {error && img.length <= 0 ? <Box  ><Text color={'red'} fontSize={15}   >هذا الحقل لا يجب ان يكون فارغا</Text></Box> : ''}

        </FormControl>

        <SimpleGrid columns={2} mt={4}>
          <Button
            bg="#00ADBB"
            color={"#fff"}
            _hover={{ opacity: "0.8" }}
            onClick={addproject}
          >
            اضافة
          </Button>
          <Button mr={2} bg={"red"} color={"#fff"} border="solid 1px lightgray" onClick={() => { navigate("/MyProjects"); }}>
            إلغاء
          </Button>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box mt={20}>
        <Footer />
      </Box>
      {/* Footer */}
    </>
  );
}

export default AddNewProject;
