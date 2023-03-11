import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { FaTwitter, FaInstagram } from 'react-icons/fa';

  import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Send from './Send';
  
  export default function contact() {
    return (
<Box>
      <Container bg="#fff" maxW="full" mt={100}  centerContent overflow="hidden">
        <Flex>
            
          <Box
           
            color="Black"
            border= '2px'  borderColor={"blackAlpha.200"} borderRadius={'2xl'} mx={'auto'} shadow={'xl'} rounded={'lg'}
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Link to ={"/"}>
            <div className="me-5" style={{color:"#48BB78"}}>
            <i className="fa-solid fa-circle-arrow-left fa-3x me-5"></i>
             </div>
             </Link> 
            <Box p={10}>
                
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
         
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.800">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="black"
                          _hover={{ border: '2px solid #48BB78' }}
                          leftIcon={<MdPhone color="#48BB78" size="20px" />}>
                          +966-988888888
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="black"
                          _hover={{ border: '2px solid #48BB78' }}
                          leftIcon={<MdEmail color="#48BB78" size="20px" />}>
                          INCO@email.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="black"
                          _hover={{ border: '2px solid #48BB78' }}
                          leftIcon={<MdLocationOn color="#48BB78" size="20px" />}>
                          Riyadh, Saudi Arabia
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="Twitter"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#48BB78' }}
                        icon={<FaTwitter size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#48BB78' }}
                        icon={<FaInstagram size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#48BB78' }}
                        icon={<BsLinkedin size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">


                        <Button
                rounded={'full'}
                size={'md'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'#48BB78'}
                _hover={{ bg: 'green.500' }}>
                  <Text as='b'>
                    <Send/>
                  
                </Text>
              </Button>
                         
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      </Box>
    );
  }