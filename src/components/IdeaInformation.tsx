import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function IdeaInformation() {
  return (
     <>
      {/* Navbar */}
      <Box mb={10} >
        <Nav />
      </Box>
       {/* Navbar */}
    <Box minH='60vh' w={1000} m={'auto'}>
    <Box >
       
       <Text textAlign={'center'} fontSize={20} mb={10}>عنوان الفكرة</Text>
       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga consequatur, officia architecto incidunt quis rerum eius omnis cum consequuntur blanditiis voluptatum alias ullam molestiae ratione exercitationem? Recusandae, provident molestiae?</Text>
      
   </Box>
    </Box>
     {/* Footer */}
     <Box mt={10}>
     <Footer />
   </Box>
    {/* Footer */}
     </>
  )
}

export default IdeaInformation
