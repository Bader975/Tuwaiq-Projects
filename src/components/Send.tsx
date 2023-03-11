import { CheckCircleIcon } from '@chakra-ui/icons';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,Text, Center, Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

function Send() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <Button colorScheme='teal' bg={"green.400"} color={'#fff'}onClick={onOpen}
      _hover={{ bg: 'green.500' }}
      
      >Send Message</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={'500px'} h={'md'}  >
        
          <ModalBody >
          <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
      Thank you for contacting us
      </Heading>
      <Text color={'gray.500'}>
      The message has been sent to us and we will contact you soon.
      </Text>
    </Box>
      
          </ModalBody>

          <ModalFooter mx={'auto'} >
          <Link to='/'>  <Button bg={"green.400"} color='#fff' 
          _hover={{ bg: 'green.500' }}
          
          >
          Done
            </Button>
            
            </Link>
           


            
          </ModalFooter>
        </ModalContent>
      </Modal>

        
    </div>
  )
}

export default Send;