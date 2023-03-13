import { ChevronLeftIcon } from "@chakra-ui/icons";
import {useDisclosure, Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack } from "@chakra-ui/react";
import { Text, Flex, Image, Link, chakra, Divider } from "@chakra-ui/react";

import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function AllIdeas() {
    
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
    <div>
      <nav>
        <Nav />
      </nav>

      <Box mr={150} mt={20}>
        <Text fontSize="3xl" textAlign={"right"}>
          جميع الافكار
        </Text>
      </Box>

      <SimpleGrid
        spacingX={5}
        spacingY={5}
        mx="auto"
        m={100}
        mt={10}
        columns={{ base: 1, md: 2, lg: 3 }}
      >
        <Stack spacing="4">
          <Card  >
            <CardHeader>
              <Heading size="md"> فكرة</Heading>
            </CardHeader>
            <CardBody>
              
            </CardBody>
            <CardFooter>
            <Text
                 
                color={"#4299E1"}
                fontSize={20}
                _hover={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={modOnOpen2}
              >
                للمزيد...
              </Text>
            </CardFooter>
          </Card>
        </Stack>
        
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AllIdeas;
