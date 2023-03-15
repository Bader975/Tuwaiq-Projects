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
  return (
    <>
      <Box margin={"auto"} w={1200}>
        <Button bg={"#159741"} _hover={{ opacity: 0.8 }} color="#fff" m="10px">
          انشاء معسكر
        </Button>
        {/* موديل لاضافه مشروع جديد */}

        {/* الافكار */}
        <SimpleGrid spacingX={5} spacingY={5} mx="auto" m={100} mt={10}>
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
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            padding={"1vh"}
            variant="outline"
            bg={"#193547"}
            mt={1}
          >
            <CardBody>
              <SimpleGrid columns={3} alignItems={"center"}>
                <Heading color={"white"} textAlign="center" size="md">
                  Javascript
                </Heading>

                <Text color={"white"} fontWeight={"bold"}>
                  2020
                </Text>

                <Box margin={"auto"}>
                  <Button bg="#159741" color={"#fff"} _hover={{ opacity: 0.8 }}>
                    تعديل
                  </Button>
                  <Button
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
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Addbootcamp;
