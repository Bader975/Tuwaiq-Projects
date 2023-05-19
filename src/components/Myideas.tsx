import {
  ChevronLeftIcon,
  DeleteIcon,
  EditIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Text,
  Box,
  SimpleGrid,
  Flex,
  Button,
  IconButton,
  Spacer,
  GridItem,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { useNavigate, Link } from "react-router-dom";

function Myideas() {
  const [data, setData] = React.useState<any[]>([]);
  const navigate = useNavigate();

  // fetch data
  const getallproject = async () => {
    const data = await (
      await fetch("http://localhost:3008/idea/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") as string,
        },
      })
    ).json();

    // set state when the data received
    setData(data && data.Idea);
  };

  React.useEffect(() => {
    getallproject();
  }, []);

  const deletIdea = async (id: string) => {
    let result = confirm("هل انت متاكد؟؟!");
    if (result == true) {
      const data = await (
        await fetch(`http://localhost:3008/idea/${id}`, {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token") as string,
          },
        })
      ).json();
    }
    getallproject();
    navigate("/Myideas");
  };

  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <Flex ml={40} mb={5} mt={20}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" textAlign={"right"} mr={40}>
            الافكار الخاصة بك
          </Text>{" "}
        </Box>
        <Spacer />
        <Box>
          <Button
            onClick={() => navigate("/AddNewIdea")}
            m="10px"
            _hover={{ color: "white", backgroundColor: "#00ADBB" }}
            color={"#00ADBB"}
            bg={"none"}
            border="1px solid #00ADBB"
          >
            إضافة فكرة جديد
          </Button>
        </Box>
      </Flex>
      {/* ------- this is where to code */}

      <SimpleGrid
        borderColor={"blackAlpha.200"}
        minH={"60vh"}
        p={20}
        borderRadius={"2xl"}
        mx="auto"
        spacingX={10}
        spacingY={20}
        columns={{ base: 1, md: 2, lg: 3 }}
      >
        {/* {data== "" || "" ? "لا توجد لديك افكار " :""} */}
        {data.map((index) => (

          <GridItem key={index.id}>
            <Card h={320}>
              <CardHeader>
                <Text fontSize={30} mb={4}>
                  {index.title}
                </Text>
                <hr />
                <Text> </Text>
              </CardHeader>

              <CardBody h={20}>
                <Text>{index.discription}</Text>
              </CardBody>

              <CardFooter>
                <Box>
                  <IconButton
                    color={"red"}
                    aria-label="delete"
                    icon={<DeleteIcon />}
                    onClick={() => deletIdea(index.id)}
                  />
                  <Link to={`/ModifyIdea/${index.id}`}>
                    <IconButton
                      mr={10}
                      color={"green"}
                      aria-label="edit"
                      icon={<EditIcon />}
                    />
                  </Link>
                </Box>
              </CardFooter>
            </Card>
          </GridItem>

        ))}
      </SimpleGrid>

      {/* -------------------------------------------------------- */}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Myideas;
