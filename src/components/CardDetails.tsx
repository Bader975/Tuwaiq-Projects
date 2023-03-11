import React from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import {
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Box,
} from '@chakra-ui/react';

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { MDBIcon } from 'mdb-react-ui-kit';
import FooterHome from './FooterHome';
import NavCompany from './NavCompany';
import { IoMdArrowRoundBack } from 'react-icons/Io';

function CardDetails(props:any) {
  // (window as Window).location = 'abc'
  const[data, setData]= React.useState<any>([])
    const[firstName, setFirstName]= React.useState('')
    const[jog, setjob]= React.useState('')
    const[email, setEmail]= React.useState('')
    const[companyName, setCompanyName]= React.useState("")
    const[photo, setPhoto]= React.useState('')
    // const[photo, setPhoto]= React.useState('')
    const[annualIncome, setAnnualIncome]= React.useState('')
    const[description, setDescription]= React.useState('')
    const[location, setLocation]= React.useState('')
    const[business, setBusiness]= React.useState('')
    const[sharePrice, setSharePrice]= React.useState('')
    const[investmentPrice, setInvestmentPrice]= React.useState('')
    const[conference, setConference]= React.useState('')
    
  const {id}= useParams() 
  console.log(id)
  React.useEffect(() => {
    axios.get(`https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB/${id}`)
       .then((res) => {
         setData(res.data); 
      
         console.log(res)
      });
  }, []);

  return (
     <>
    <NavCompany/>
    <Link to='/show'>
    <Box  ml={20} >
          <IoMdArrowRoundBack size={40}  />
          </Box>
          </Link>
    <Container maxW={'7xl'}>
      <SimpleGrid
      
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 5 }}>
        <Flex>
          
          <Image
            rounded={'lg'}
            alt={' image'}
            src={data.photo}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
             {data.companyName}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
           annual Income   {data.annualIncome} SAR
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              {/* <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text> */}
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '25px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
               About The Company
              </Text>
              <MDBIcon fas icon="book-open"  size='lg'/>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2} fontSize={'xl'}>
                  <ListItem>  {data.description}</ListItem>
                  
                </List>
                
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '25px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Location
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2} fontSize={'lg'}>
                  <ListItem>  <MDBIcon fas icon="globe-americas"  size='lg'/> {data.location}</ListItem>
                  
                </List>
                
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '25px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
               Business Field
              </Text>

              <List spacing={2} fontSize={'lg'}>
                <ListItem >
                  <Text as={'span'}  fontWeight={'bold'} >
                  <MDBIcon fas icon="building" size='lg' />   Main Field: 
                  
                  </Text>{'  '}
                   {data.business}
                </ListItem>
              
              </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '25px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
              Investment 
              </Text>

              <List spacing={2} fontSize={'lg'}>
                <ListItem >
                  <Text as={'span'}  fontWeight={'bold'} >
                  <MDBIcon fas icon="hand-holding-usd" size='lg' />  Investment Price: 
                  
                  </Text>{'  '}
                   {data.investmentPrice} SAR
                </ListItem>
              
              </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '25px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
             Share Price 
              </Text>

              <List spacing={2} fontSize={'lg'}>
                <ListItem >
                  <Text as={'span'}  fontWeight={'bold'} >
                  <MDBIcon fas icon="money-bill-alt" size='lg' /> Share Price: 
                  
                  </Text>{'  '}
                   {data.sharePrice} SAR
                </ListItem>
              
              </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '25px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Conference
              </Text>

              <List spacing={2} fontSize={'lg'}>
                <ListItem  >
                  <Text as={'span'}  fontWeight={'bold'} >
                  <MDBIcon fas icon="home" size='lg' /> Conference: 
                  </Text>{'  '}
                  
                   {data. conference}
                </ListItem>
                
              
              </List>
            </Box>
          </Stack>

          <Button onClick={(e) => window.location= `mailto:${data.email}`}
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.500', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
              
            }}>
              <div className="me-4"><MDBIcon fas icon="envelope" me-5 size="xl"/> </div>
            Contact  { data.companyName} For more information 
          </Button>

        
        </Stack>
      </SimpleGrid>
    </Container>
    <FooterHome/>
    </>
  )
}

export default CardDetails
