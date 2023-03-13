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
  CardBody,
  Heading,
  Text,
  Stack,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import React from "react";

function CompanyProjects() {
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
      <Button
        onClick={addOnOpen}
        bg={"#159741"}
        _hover={{ opacity: 0.8 }}
        color="#fff"
        m="10px"
      >
        انشاء فكرة
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
          <ModalHeader mr={4}>انشاء فكرة</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel> عنوان الفكرة</FormLabel>
              <Input ref={initialRef} placeholder=" عنوان الفكرة" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>وصف عن الفكرة</FormLabel>
              <Textarea placeholder=" وصف عن الفكرة  " />
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
          <ModalHeader mr={4}> تعديل الفكرة </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel> عنوان الفكرة</FormLabel>
              <Input ref={initialRef} placeholder=" عنوان الفكرة" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>وصف عن الفكرة</FormLabel>
              <Textarea placeholder=" وصف عن الفكرة  " />
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
        columns={{ base: 1, md: 2, lg: 3 }}
      >
        <Stack spacing="4">
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
    </>
  );
}

export default CompanyProjects;
