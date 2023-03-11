import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Grid,
  GridItem,
  chakra,
  Image,
  Flex,
  Icon,
  Button,
} from "@chakra-ui/react";

import Show from "./Show";

function Update() {
  const [data, setData] = React.useState<any>([]);
  const [firstName, setFirstName] = React.useState("");
  const [lasttName, setlasttName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  // const[photo, setPhoto]= React.useState('')
  const [annualIncome, setAnnualIncome] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [business, setBusiness] = React.useState("");
  const [sharePrice, setSharePrice] = React.useState("");
  const [investmentPrice, setInvestmentPrice] = React.useState("");
  const [conference, setConference] = React.useState("");
  const [id, setId] = React.useState<any>();
  const api = `https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB/${id}`;

  React.useEffect(() => {
    setId(localStorage.getItem("id"));
  }, []);
  const navigate = useNavigate();
  const Update = async () => {
    // if(firestName.length >=3 &&lastName.length>=3 ){

    axios
      .put(api, {
        firstName,
        lasttName,
        email,
        companyName,
        photo,
        annualIncome,
        location,
        business,
        sharePrice,
        description,
        investmentPrice,
        conference,
      })
      .then((res) => {
        console.log(res);
      });
    await axios.get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB");

    navigate("/companies", {});
    // }else{
    //     alert("Please write correct information")
    // }
  };
  return (
    <div className="login">
      {/* <h1>Update Your Company Information</h1>
         

        <input placeholder='Add list' onChange={e =>{setTask(e.target.value)}}></input> */}

      <Box w="full" h="full" my={"auto"}>
        <Grid
          w={"35rem"}
          p={50}
          border="1px"
          borderColor={"blackAlpha.200"}
          borderRadius={"xl"}
          m={"auto"}
          shadow={"lg"}
          rounded={"lg"}
          h="full"
          templateColumns="repeat(1, 2fr)"
        >
          <FormControl
            isRequired
            display={"grid"}
            gridTemplateColumns="45% 45% "
            justifyContent={"space-around"}
          >
            {/** start company info */}
            <Box>
              <GridItem>
                <FormLabel>Company Name</FormLabel>
                <Input
                  placeholder="Tuwaiq Academy"
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                />
              </GridItem>

              <GridItem>
                <FormLabel>Photo URL</FormLabel>
                <Input
                  placeholder="www.Photo.png"
                  onChange={(e) => {
                    setPhoto(e.target.value);
                  }}
                />
              </GridItem>
              <GridItem>
                <FormLabel>Annual Income</FormLabel>
                <Input
                  placeholder="1B SAR "
                  onChange={(e) => {
                    setAnnualIncome(e.target.value);
                  }}
                />
              </GridItem>
              <GridItem>
                <FormLabel>Share Price</FormLabel>
                <Input
                  placeholder="Share Price"
                  onChange={(e) => {
                    setSharePrice(e.target.value);
                  }}
                />
              </GridItem>
              <GridItem>
                <FormLabel>Location</FormLabel>
                <Input
                  placeholder=" Riyadh"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </GridItem>
              <GridItem>
                <FormLabel>Business Field </FormLabel>
                <Input
                  placeholder="Oil and Gas or IT "
                  onChange={(e) => {
                    setBusiness(e.target.value);
                  }}
                />
              </GridItem>
              <GridItem>
                <FormLabel>Investment Price</FormLabel>
                <Input
                  placeholder="Investment Price"
                  onChange={(e) => {
                    setInvestmentPrice(e.target.value);
                  }}
                />
              </GridItem>
              <GridItem>
                <FormLabel>Conference</FormLabel>
                <Input
                  placeholder="LAEP or Apple"
                  onChange={(e) => {
                    setConference(e.target.value);
                  }}
                />
              </GridItem>
            </Box>

            {/** End company info */}
            {/** start Hr info */}

            <Box>
              <GridItem>
                <FormLabel>First name</FormLabel>
                <Input
                  placeholder="Mohammad"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </GridItem>

              <GridItem>
                <FormLabel>Last name</FormLabel>
                <Input
                  placeholder="Ali"
                  onChange={(e) => {
                    setlasttName(e.target.value);
                  }}
                />
              </GridItem>

              <GridItem>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="email@email.com "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </GridItem>
              <Box>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Description About Your Work"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Box>
            </Box>
            {/** End info */}

            {/* <input type="file"onChange={e => setFile(URL.createObjectURL(e.target.files[0]))} />
           <img src={file} /> */}
          </FormControl>
          <Box>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Description About Your Work"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Box>

          <Button
            mt={5}
            w={100}
            mx="auto"
            bg={"lightgreen"}
            color={"white"}
            fontSize={25}
            onClick={Update}
          >
            Update
          </Button>
        </Grid>
      </Box>
      {/* <button onClick={Update}> Update</button> */}
    </div>
  );
}

export default Update;
