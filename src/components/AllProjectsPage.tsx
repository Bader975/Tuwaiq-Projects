import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, SimpleGrid } from '@chakra-ui/react'
import { Text, Flex, Image, Link, chakra,Divider } from "@chakra-ui/react";

import React from 'react'
import Footer from './Footer';
import Nav from './Nav';

function AllProjectsPage() {
  return (
    <div >

<nav>
      <Nav/>
      </nav>

<Box mr={150} mt={20}>
<Text fontSize='3xl'
      textAlign={'right'}

>جميع المشاريع</Text>

</Box>

<SimpleGrid spacingX={5} spacingY={5} mx="auto"  m={100} mt={10} columns={{ base: 1, md: 2, lg: 3 }}
>
  
  <Box   textAlign={'right'}
 >
  <Flex
     
      _dark={{ bg: "#3e3e3e" }}
     
      w="full"
      alignItems="center"
      justifyContent="center"
      textAlign={'right'}
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color="brand.600"
              _dark={{ color: "brand.400" }}
            >
              المعسكر
            </chakra.span>
            
            <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
اسم المشروع            </Link>
           
          </Box>
          <Divider borderColor={'blackAlpha.500'} mt={5} />

          <Box mt={4} >
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <Link
                  mx={2}
                  fontWeight="bold"
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                >
                  Ali fahad
                </Link>
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.300" }}
              >
                21 SEP 2015
              </chakra.span>
              <Link
                  mx={2}
                  mr={20}
                  fontWeight="bold"
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                >
التفاصيل<ChevronLeftIcon/>                
                
</Link>
            </Flex>

            
          </Box>
          
        </Box>
      </Box>
    </Flex>
  </Box>
  <Box >
  <Flex
      _dark={{ bg: "#3e3e3e" }}
      w="full"
      alignItems="center"
      justifyContent="center"
      textAlign={'right'}

    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color="brand.600"
              _dark={{ color: "brand.400" }}
            >
              المعسكر
            </chakra.span>
            <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
اسم المشروع            </Link>
            
          </Box>
     
          <Divider borderColor={'blackAlpha.500'} mt={5} />

          <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <Link
                  mx={2}
                  fontWeight="bold"
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                >
                  Ahmad Doe
                </Link>
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.300" }}
              >
                21 SEP 2015
              </chakra.span>
                     <Link
                  mx={2}
                  mr={20}
                  fontWeight="bold"
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                >
التفاصيل<ChevronLeftIcon/>                
                
</Link>
            </Flex>
         
          </Box>

        </Box>
      </Box>
    </Flex>
  </Box>
  <Box >
  <Flex
      _dark={{ bg: "#3e3e3e" }}
      w="full"
      alignItems="center"
      justifyContent="center"
      textAlign={'right'}

    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color="brand.600"
              _dark={{ color: "brand.400" }}
            >
              المعسكر
            </chakra.span>
            <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
اسم المشروع            </Link>
          
          </Box>
           <Divider borderColor={'blackAlpha.500'} mt={5} />

        
          <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <Link
                  mx={2}
                  fontWeight="bold"
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                >
                  Mohammed
                </Link>
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.300" }}
              >
                21 SEP 2015
              </chakra.span>
              <Link
                  mx={2}
                  mr={20}
                  fontWeight="bold"
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                >
التفاصيل<ChevronLeftIcon/>                
</Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  </Box>
  
</SimpleGrid>











<footer>
        <Footer/>
       </footer>

    </div>

  )
}

export default AllProjectsPage