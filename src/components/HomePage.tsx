import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import HomeImg from "../img/Homeimg.svg";


function HomePage() {
  return (
    <div>

<Box>
<Image
 w="full"
 fit="cover"
 src={HomeImg}
 alt="HomeImg"/>


</Box>
    
    
    
    </div>
  )
}


export default HomePage