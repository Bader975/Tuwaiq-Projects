import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function IdeaInformation() {
  return (
     <>
      {/* Navbar */}
      <Box   >
        <Nav />
      </Box>
       {/* Navbar */}
         <Box bg='#E1EAF5'  p={50} minH='80vh'>
         <Box minH='30vh' w={1000} m={'auto'} bg='white' borderRadius={10} pr={10}>
    <Box >
       
       <Text textAlign={'center'} fontSize={'35px'} mb={10}>عنوان الفكرة</Text>
       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga consequatur, officia architecto incidunt quis rerum eius omnis cum consequuntur blanditiis voluptatum alias ullam molestiae ratione exercitationem? Recusandae, provident molestiae?</Text>
      
   </Box>
     </Box>
         </Box>
     {/* Footer */}
     <Box >
     <Footer />
   </Box>
    {/* Footer */}
     </>
  )
}

export default IdeaInformation
