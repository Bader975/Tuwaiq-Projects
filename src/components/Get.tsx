import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,Text, Center } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

function Get() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <Button mt={35}
   
   rightIcon={<ArrowForwardIcon />}
   rounded={'full'}
   size={'lg'}
   fontWeight={'normal'}
   px={6}
   colorScheme={'red'}
   bg={'#48BB78'}
   _hover={{ bg: 'green.500' }}onClick={onOpen}>
    <Text as='b'>Get Started</Text>
    </Button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent w={'full'} h={'lg'}  >
          <ModalHeader mx={'auto'} my={'25'}>Do you want to Sign Up as ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
          <img
        src='https://a.top4top.io/p_26012ivly1.png'
        className='img-fluid rounded'
        alt='example'
      />
      
          </ModalBody>

          <ModalFooter mx={'auto'} >
          <Link to='/SingUp'>  <Button bg={"green.400"} color='#fff'_hover={{ bg: 'green.500' }} >
          Company
            </Button>
            
            </Link>
           
<Text m={5} as='b'>
  OR
</Text>


            <Link to='/InvestorSingUp'>  <Button textColor={"white"} bg={"#2F2E41"} _hover={{ bg: 'black' }}>Investor</Button>
            </Link>
            
          </ModalFooter>
        </ModalContent>
      </Modal>

        
    </div>
  )
}

export default Get;