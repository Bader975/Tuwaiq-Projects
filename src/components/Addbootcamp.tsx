import {
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    Input,
    FormLabel,
    ModalFooter,
    Modal,
    Card,
    Textarea,
    CardHeader,
    SimpleGrid,
    Box,
    CardBody,
    Heading,
    Text,
    Stack,
    Button,
    CardFooter,
    Image,
    Link,
  } from "@chakra-ui/react";
  import React from "react";
  
  function Addbootcamp() {
    let {
      isOpen: addIsOpen,
      onOpen: addOnOpen,
      onClose: addOnClose,
    } = useDisclosure();
    let {
      isOpen: modIsOpen,
      onOpen: modOnOpen,
      onClose: modOnClose,
    } = useDisclosure();
  
    let {
      isOpen: modIsOpen2,
      onOpen: modOnOpen2,
      onClose: modOnClose2,
    } = useDisclosure();
  
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
  
    return (
      <>
      <Box margin={"auto"}w={1200}>
        <Button
          onClick={addOnOpen}
          bg={"#159741"}
          _hover={{ opacity: 0.8 }}
          color="#fff"
          m="10px"
        >
          انشاء معسكر
        </Button>
        {/* موديل لاضافه مشروع جديد */}
        <Modal
          size={"4xl"}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={addIsOpen}
          onClose={addOnClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>انشاء معسكر</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel> اسم المعسكر</FormLabel>
                <Input ref={initialRef} placeholder=" اسم المعسكر" />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>  التاريخ  </FormLabel>
                <Input placeholder="     2023  " />
              </FormControl>
            </ModalBody>

  
            <ModalFooter
              justifyContent={"center"}
              width={"500px"}
              margin={"auto"}
            >
              <Button bg="#159741" color={"#fff"} width={"50%"}>
                حفظ
              </Button>
              <Button
                onClick={addOnClose}
                mr={2}
                width={"50%"}
                bg={"#97151D"}
                color={"#fff"}
              >
                إلغاء
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
  
        {/* موديل للتعديل على مشروع */}
  
        <Modal
          size={"4xl"}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={modIsOpen}
          onClose={modOnClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>     تعديل </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
                <FormLabel> اسم المعسكر  </FormLabel>
                <Input ref={initialRef} placeholder=" عنوان المشروع" />
              </FormControl>
              <FormControl>
                <FormLabel> التاريخ  </FormLabel>
                <Input ref={initialRef} placeholder=" عنوان المشروع" />
              </FormControl>
  
              
            </ModalBody>
  
            <ModalFooter width={"500px"} margin={"auto"}>
              <Button bg="#159741" color={"#fff"} width={"50%"}>
                حفظ
              </Button>
              <Button
                onClick={modOnClose}
                mr={2}
                width={"50%"}
                bg={"#97151D"}
                color={"#fff"}
              >
                إلغاء
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* الافكار */}
        <SimpleGrid
          spacingX={5}
          spacingY={5}
          mx="auto"
          m={100}
          mt={10}
       
         >
          {/* <Stack spacing="4" width={'100%'} >
            <Card>
              <CardHeader>
                <Heading size="md"> فكرة</Heading>
              </CardHeader>
              <CardBody>
                <Text
                  color={"#4299E1"}
                  fontSize={20}
                  _hover={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={modOnOpen2}
                >
                  للمزيد...
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  bg="#159741"
                  color={"#fff"}
                  width={"50%"}
                  _hover={{ opacity: 0.8 }}
                  onClick={modOnOpen}
                >
                  تعديل
                </Button>
                <Button
                  onClick={modOnClose}
                  mr={2}
                  width={"50%"}
                  bg={"#97151D"}
                  color={"#fff"}
                  _hover={{ opacity: 0.8 }}
                >
                  حذف
                </Button>
              </CardFooter>
            </Card>
          </Stack> */}
           <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            padding={"1vh"}
            variant='outline'
            bg={'#193547'}
            mt={1}
            >
       
            
            <CardBody>
                <SimpleGrid columns={3} alignItems={"center"}>
                    <Heading color={'white'}textAlign="center" size="md">Javascript</Heading>

                    <Text color={'white'} fontWeight={"bold"}>
                    2020
                    </Text>
                   
                  <Box margin={'auto'} >
                  <Button

                  bg="#159741"
                  color={"#fff"}
                 
                  _hover={{ opacity: 0.8 }}
                  onClick={modOnOpen}
                >
                  تعديل
                </Button>
                     <Button
                  onClick={modOnClose}
                  mr={2}
                   bg={"#97151D"}
                  color={"#fff"}
                  _hover={{ opacity: 0.8 }}
                >
                  حذف
                </Button>
                  </Box>
                 </SimpleGrid>
            </CardBody>
        </Card>
          <Modal onClose={modOnClose2}   isOpen={modIsOpen2}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis, adipisci laudantium mollitia maiores itaque!
            </ModalBody>
            <ModalFooter>
              <Button onClick={modOnClose2}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal onClose={modOnClose2}   isOpen={modIsOpen2}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis, adipisci laudantium mollitia maiores itaque!
            </ModalBody>
            <ModalFooter>
              <Button onClick={modOnClose2}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </SimpleGrid>
        </Box>
      </>
    );
  }
  
  export default Addbootcamp;
  