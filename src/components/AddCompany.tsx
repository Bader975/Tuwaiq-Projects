import { GrClose } from 'react-icons/Gr';

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
  Heading,
  Divider,
} from "@chakra-ui/react";
import { CloseIcon, StarIcon } from "@chakra-ui/icons";
import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavCompany from "./NavCompany";
import FooterHome from "./FooterHome";

function AddCompany() {
  const [data, setData] = React.useState<any>([]);
  const [id, setId] = React.useState<any>("");
  const [firstName, setFirstName] = React.useState("");
  const [jog, setjob] = React.useState("");
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
const[error, setError] = React.useState(false)
  
  
    
  // const[description, setDescription]= React.useState('')
  // const [photo, setPhoto] = React.useState<any>();
  // const [file, setFile] = useState();

  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB")
      .then((res) => {
        setData(res.data);
        console.log(data);
      });
  }, []);
  console.log(data);

  const show = (id: any) => {
    console.log(id);
    axios
      .get(`https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB/${id}`)
      .then((res) => {
        setData(
          data.filter((show: { id: any }) => {
            console.log(res);
            return show.id == id;
          })
        );
      });
  };

  function post() {
    // localStorage.setItem('')
    // localStorage.setItem('')
    // localStorage.setItem('')
    if( 
      firstName.length == 0 ||
      jog.length == 0 ||
      email.length == 0 || 
      companyName.length == 0 ||
      photo.length == 0 ||
      annualIncome.length == 0 ||
      description.length == 0 ||
      location.length == 0 ||
      business.length == 0 ||
      sharePrice.length == 0 ||
      investmentPrice.length == 0 ||
      conference.length == 0
  ){
    setError(true);
       
    }
    else{
       
      // axios.post("http://localhost:3008/user", {
      axios.post("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB", {
        id,
        firstName,
        jog,
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
      });
      localStorage.setItem("id", id);
      localStorage.setItem("companyName", companyName);
      localStorage.setItem("photo", photo);
      localStorage.setItem("conference", conference);
      localStorage.setItem("annualIncome", annualIncome);
      localStorage.setItem("investmentPrice", investmentPrice);
      localStorage.setItem("business", business);
      localStorage.setItem("location", location);
  
      axios.get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB");
  
      navigate("/companies", {});
    }
   
  }

  /*const DeleteItems = (id: string) => {
        axios
          .delete(`https://62d3e34acd960e45d44f7ccf.mockapi.io/Test/${id}`)
          .then((res) => {
            setData(
              data.filter((dele) => {
                return dele.id != id;
              })
            );
          });
      };*/

  return (
    <Box>
      <NavCompany />

      <Box w="full" h="full" my={"auto"} p={5}>

        <Grid
          w={"full"}
          p={10}
          border="1px"
          borderColor={"blackAlpha.200"}
          borderRadius={"2xl"}
          mx={"auto"}
          shadow={"xl"}
          rounded={"xl"}
          h="auto"
          templateColumns="repeat(1, 2fr)"
        >
                {/* <CloseIcon/> */}

          <FormControl
            isRequired
            display={"grid"}
            gap={"50"}
            gridTemplateColumns="45% 45% "
            justifyContent={"space-around"}
          >
            {/** start company info */}
            <Box>
              <Heading as="h2" size="md" mb={3} color={"gray.400"}>
                Company Information:
              </Heading>

              <GridItem>
                <FormLabel>Company Name</FormLabel>
                <Input
                  placeholder="Tuwaiq Academy"
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                />
               {error&&companyName.length<=0?<p  className= ' text-danger fs-6'>Company field cannot be empty</p>:''}

              </GridItem>
              <GridItem>
                <FormLabel>Conference</FormLabel>
                <Input
                  placeholder="LAEP or Apple"
                  onChange={(e) => {
                    setConference(e.target.value);
                  }}
                />
                  {error&&conference.length<=0?<p  className= ' text-danger fs-6'>Conference field cannot be empty</p>:''}
              </GridItem>
              <GridItem>
                <FormLabel>Photo URL Of The Company</FormLabel>
                <Input
                  placeholder="www.Photo.png"
                  onChange={(e) => {
                    setPhoto(e.target.value);
                  }}
                />
                {error&&photo.length<=0?<p  className= ' text-danger fs-6'>photo field cannot be empty</p>:''}
              </GridItem>
              <GridItem>
                <FormLabel>Annual Income</FormLabel>
                <Input
                  placeholder="1 B SAR "
                  onChange={(e) => {
                    setAnnualIncome(e.target.value);
                  }}
                />
                  {error&&annualIncome.length<=0?<p  className= ' text-danger fs-6'>Annual field cannot be empty</p>:''}
              </GridItem>
              <GridItem>
                <FormLabel>Share Price</FormLabel>
                <Input
                  placeholder="Share Price"
                  onChange={(e) => {
                    setSharePrice(e.target.value);
                  }}
                />
                    {error&&sharePrice.length<=0?<p  className= ' text-danger fs-6'>Share Price field cannot be empty</p>:''}
              </GridItem>
              <GridItem>
                <FormLabel>Location</FormLabel>
                <Input
                  placeholder=" Riyadh"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
                {error&&location.length<=0?<p  className= ' text-danger fs-6'>Location field cannot be empty</p>:''}

              </GridItem>
              <GridItem>
                <FormLabel>Business Field </FormLabel>
                <Input
                  placeholder="Oil and Gas or IT "
                  onChange={(e) => {
                    setBusiness(e.target.value);
                  }}
                />
                {error&&business.length<=0?<p  className= ' text-danger fs-6'>Business field cannot be empty</p>:''}

              </GridItem>
              <GridItem>
                <FormLabel>Investment Price</FormLabel>
                <Input
                  placeholder="Investment Price"
                  onChange={(e) => {
                    setInvestmentPrice(e.target.value);
                  }}
                />
                {error&&investmentPrice.length<=0?<p  className= ' text-danger fs-6'>Investment field cannot be empty</p>:''}

              </GridItem>
              <Box>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Description About Your Work"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                {error&&description.length<=0?<p  className= ' text-danger fs-6'>Description field cannot be empty</p>:''}
              </Box>
            </Box>

            {/** End company info */}

            {/** start Hr info */}

            <Box>
              <Heading as="h2" size="md" mb={3} color={"gray.400"}>
                Employee Information:
              </Heading>

              <GridItem>
                <FormLabel>Full name</FormLabel>
                <Input
                  placeholder="Mohammad"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                {error&&firstName.length<=0?<p  className= ' text-danger fs-6'>Full name field cannot be empty</p>:''}
                {error&&firstName.length>=1 && firstName.length<=2?<p  className= ' text-danger fs-6'>Name cannot be less than 2 character</p>:''}
              </GridItem>

              <GridItem>
                <FormLabel>Job Title</FormLabel>
                <Input
                  placeholder="HR or it member"
                  onChange={(e) => {
                    setjob(e.target.value);
                  }}
                />
                {error&&jog.length<=0?<p  className= ' text-danger fs-6'>Job title field cannot be empty</p>:''}
              </GridItem>

              <GridItem>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="email@email.com "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {error&&email.length<=0?<p  className= ' text-danger fs-6'>Email field cannot be empty</p>:''}
                {error&&!email.includes('@')?<p  className= ' text-danger fs-6  '>Email Should include @</p>:''}

              </GridItem>
            </Box>
            {/** End info */}

            {/* <input type="file"onChange={e => setFile(URL.createObjectURL(e.target.files[0]))} />
            <img src={file} /> */}
          </FormControl>
          {/* <Box   >
        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Description About Your Work" onChange={e =>{setDescription(e.target.value)}} />
        </Box>
      */}
      <Box   w={'300px'} margin='auto'>


      <Button
           mt={5}
           mx="auto"
            colorScheme="teal"
             bg={"gray.400"}
            color={"white"}
            fontSize={25}
             _hover={{ bg: 'gray.500' }}
             onClick={()=> {navigate('/companies')}}


 
          >
            Cancel
          </Button>
          

      <Button
           w = '100px'
           mt={5}
           ml='10px'
            colorScheme="teal"
           
            
            bg={"green.500"}
            color={"white"}
            fontSize={25}
            onClick={post}
            _hover={{ bg: 'green.600' }}

          >
            Create
          </Button>
          
      </Box>
          
          {/* <Button bg={"lightgreen"} onClick={()=>{DeleteItems}}>delete</Button> */}
        </Grid>
      </Box>
      <FooterHome />
    </Box>
  );
}

export default AddCompany;
function useState(): [any, any] {
  throw new Error("Function not implemented.");
}
