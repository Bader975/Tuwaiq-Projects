import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import {
  FormControl,
  Input,
  FormLabel,
  Text,
  Box,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

function ModifyBootcamp() {
  const [data, setData] = React.useState<any>([]);
  const [name, setName] = React.useState<any>("");
  const [date, setDate] = React.useState<any>("");
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    // fetch data
    const getCampByid = async () => {
      const data = await (
        await fetch(`http://localhost:3008/camp/${id}`)
      ).json();

      // set state when the data received
      setData(data && data.Camp);
    };

    getCampByid();
  }, []);


  const validation = () => {
    if (name.length == 0 || date.length == 0) {
      setError(true);
    }
  };
  //update boot camp

  const updateCamp = async () => {
    validation();
    const data = await (
      await fetch(`http://localhost:3008/admin/camp/${id}`, {
        method: "PUT",
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
     (data.message);

    // set state when the data received
  };

  return (
    <div>
      {/* Navbar */}
      <Box mb={10}>
        <Nav />
      </Box>
      {/* Navbar */}

      <Box
        m={"auto"}
        w={800}
        minH={"60vh"}
        boxShadow={"dark-lg"}
        rounded={"xl"}
        p={10}
      >
        <Text textAlign={"center"} fontSize={30}>
          {" "}
          تعديل{" "}
        </Text>
        <FormControl h={"5rem"}>
          <FormLabel> اسم المعسكر</FormLabel>
          <Input
            placeholder={`${data.name}`}
            contentEditable={true}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></Input>
          {error && name.length <= 0 ? (
            <Box>
              <Text color={"red"} fontSize={15}>
                هذا الحقل لا يجب ان يكون فارغا
              </Text>
            </Box>
          ) : (
            ""
          )}
        </FormControl>
        {/* {data.name} */}

        <FormControl mt={4} h={"5rem"}>
          <FormLabel> التاريخ </FormLabel>

          <Input
            placeholder={`${data.date}`}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></Input>
          {error && date.length <= 0 ? (
            <Box>
              <Text color={"red"} fontSize={15}>
                هذا الحقل لا يجب ان يكون فارغا
              </Text>
            </Box>
          ) : (
            ""
          )}
        </FormControl>

        <SimpleGrid columns={2} mt={6}>
          <Button
            bg="#00ADBB"
            color={"#fff"}
            _hover={{ opacity: "0.8" }}
            onClick={updateCamp}
          >
            حفظ
          </Button>
          <Button
            mr={2}
            bg={"red"}
            color={"#fff"}
            border="solid 1px lightgray"
            onClick={() => navigate("/Bootcamp")}
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

export default ModifyBootcamp;
function toast(arg0: {
  title: string;
  description: any;
  status: string;
  duration: number;
  isClosable: boolean;
}) {
  throw new Error("Function not implemented.");
}
