import { Box,IconButton,Text } from '@chakra-ui/react'
import React from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import { MdContactPhone } from 'react-icons/md'
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
         <Box minH='30vh' w={1000} m={'auto'} p={20}pt={5} bg='white' borderRadius={10} pr={10}>
    <Box >
       
    <Box alignContent={'center'}  >
  <Box  float={'right'} ><IconButton
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
                    
                  /></Box>

             <Text  mt={4}  mr={4} color={'#00ADBB'}  fontSize={'2xl'} fontWeight={'bold'} float={'right'} 
>عنوان الفكرة</Text> 
<p className="ayaa"> </p>  
</Box>       <Text mt={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum nulla quo maiores quod aut corrupti provident. Et aliquid, molestiae illo inventore possimus, dolor quam voluptatem debitis suscipit eligendi tenetur. Molestiae sapiente earum assumenda ad neque. Delectus deserunt rem esse eum voluptatibus optio repudiandae illo officia eaque, in est? Ipsam pariatur maxime nisi voluptatibus, dolorem soluta eum autem nobis et dolores illum totam obcaecati consequatur molestiae rerum voluptates placeat corporis nesciunt exercitationem? Quo veritatis facilis magnam explicabo qui nobis, dolores, deleniti rerum excepturi omnis delectus! Aliquam sequi tempore architecto aperiam necessitatibus, exercitationem minima ipsam cum? Quo ipsam quas atque temporibus.</Text>
      
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
