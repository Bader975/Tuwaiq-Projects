import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,Text, Center } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

function SingUp() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <Button  
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'green.400'}
            _hover={{
              bg: 'green.500',
            }}
              onClick={onOpen}>Sign Up</Button>

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

export default SingUp;