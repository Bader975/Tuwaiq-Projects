import {
  Card,
  SimpleGrid,
  Box,
  CardBody,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
function Bootcamp() {
  const [data, setData] = React.useState<any[]>([]);

  
    // fetch data
    const getallproject = async () => {
      const data = await (await fetch(" https://tuwaiq-api.onrender.com/camp")).json();

      // set state when the data received
      setData(data && data.Camp);
    };

    
    React.useEffect(() => {
    getallproject();
  }, []);

  // -----------
  //delete camp
  const deletCamp = async (id: string) => {
    let result = confirm("هل انت متاكد؟؟!");
    if (result == true) {
      const data = await (
        await fetch(` https://tuwaiq-api.onrender.com/admin/camp/${id}`, {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
            authorization:  localStorage.getItem("token") as string,
          },
        })
      ).json();
    }
    getallproject();
    // we will come back to this to fix it!!!!!
    // window.location.reload();
    // // navigate("/MyProjects")
  };

  return (
    <>
      {/* Navbar */}
      <Box mb={10}>
        <Nav />
      </Box>
      {/* Navbar */}

      <Box mx={"auto"}>
        <Link to="/AddNewBootcamp">
          <Button
            bg={"#159741"}
            _hover={{ opacity: 0.8 }}
            color="#fff"
            m="10px"
            mr={5}
          >
            انشاء معسكر
          </Button>
        </Link>

        <Box minH={"30vh"}>
          {data.map((index: any) => (
            <li key={index.id}>
              <Card
                mx={"auto"}
                overflow="hidden"
                padding={"1vh"}
                variant="outline"
                w={"70%"}
                bg={"#193547"}
                mt={3}
              >
                <CardBody>
                  <SimpleGrid columns={3} alignItems={"center"}>
                    <Heading color={"white"} textAlign="center" size="md">
                      {index.name}
                    </Heading>

                    <Text color={"white"} fontWeight={"bold"}>
                      {index.date}
                    </Text>

                    <Box margin={"auto"}>
                      <Link to={`/ModifyBootcamp/${index.id}`}>
                        <Button
                          bg="#159741"
                          color={"#fff"}
                          _hover={{ opacity: 0.8 }}
                        >
                          تعديل
                        </Button>
                      </Link>
                      <Button
                        mr={2}
                        bg={"#97151D"}
                        color={"#fff"}
                        _hover={{ opacity: 0.8 }}
                        onClick={() => deletCamp(index.id)}
                      >
                        حذف
                      </Button>
                    </Box>
                  </SimpleGrid>
                </CardBody>
              </Card>
            </li>
          ))}
        </Box>
        {/* </SimpleGrid> */}
      </Box>
      {/* Footer */}
      <Box mt={20}>
        <Footer />
      </Box>
      {/* Footer */}
    </>
  );
}

export default Bootcamp;
