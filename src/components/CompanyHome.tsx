import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Show from "./Show";
import ShowCards from "./ShowCards";
import NavCompany from "./NavCompany";
import FooterHome from "./FooterHome";
import { BiAddToQueue } from "react-icons/bi";
import NavHomeCom from "./NavHomeCom";

function CompanyHome() {
    const[data, setData]= React.useState<any>([])
     
    const navigate = useNavigate();

  function getAndNavigate() {
    navigate("/add");

    // React.useEffect(() => {
    //   axios
    //     .get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB")
    //     .then((res) => {
    //       setData(res.data);
    //       console.log(data);
    //     });
    // }, []);
  }

  return (
    <>
    <NavHomeCom/>
      <Box  mr={5} float='right'>
        <Button
        fontSize='2xl'
        rightIcon={<BiAddToQueue />}
        colorScheme={'red'}
        bg={'#48BB78'}
        _hover={{ bg: 'green.500' }}
          flex={1}
          p={5}
          
          color="#fff"
          onClick={() => getAndNavigate()}
        >
 New      
 

 </Button>
      </Box>

      <Show/>
      {/* this how */}
      
      
      {/* <FooterHome /> */}

    </>
  );
}

export default CompanyHome;
