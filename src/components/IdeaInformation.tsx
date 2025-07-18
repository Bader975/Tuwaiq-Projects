import { Box, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import Footer from "./Footer";
import Nav from "./Nav";
import { useNavigate, useParams } from "react-router-dom";
import { Environment } from "../../api/shared";

function IdeaInformation() {
  const [data, setData] = React.useState<any>([]);

  const navigate = useNavigate();
  const { id } = useParams();
  React.useEffect(() => {
    // fetch data
    const getIdeaByid = async () => {
      const data = await (
        await fetch(`${Environment.api}/idea/company/${id}`)
      ).json();

      setData(data && data.Idea && data.Idea[0]);
    };

    getIdeaByid();
  }, []);
  return (
    <>
      {/* Navbar */}
      <Box>
        <Nav />
      </Box>
      {/* Navbar */}
      <Box bg="#E1EAF5" p={50} minH="80vh">
        <Box
          minH="30vh"
          w={{base:300,md:500,lg:800}}
          m={"auto"}
          p={20}
          pt={5}
          bg="white"
          borderRadius={10}
          pr={10}
        >
          <Box>
            <Box alignContent={"center"}>
              <Box float={"right"}>
                <IconButton
                  fontSize={"3xl"}
                  borderRadius={"50%"}
                  color={"#00ADBB"}
                  p={5}
                  px={"17px"}
                  py={8}
                  _hover={{ color: "none", backgroundColor: "none" }}
                  bg={"#DBF0F7"}
                  aria-label=""
                  icon={<FaRegLightbulb />}
                />
              </Box>

              <Text
                mt={4}
                mr={4}
                color={"#00ADBB"}
                fontSize={"2xl"}
                fontWeight={"bold"}
                float={"right"}
              >
                {" "}
                {data.title}
              </Text>
              <p className="ayaa"> </p>
            </Box>{" "}
            <Text mt={5}>{data.discription}</Text>
          </Box>
        </Box>
      </Box>
      {/* Footer */}
      <Box>
        <Footer />
      </Box>
      {/* Footer */}
    </>
  );
}

export default IdeaInformation;
