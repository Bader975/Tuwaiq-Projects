import React from 'react'
import { ChevronLeftIcon, Search2Icon } from "@chakra-ui/icons";

import {
    Box,
    GridItem,
    Input,
    InputGroup,
    InputLeftElement,
    SimpleGrid,
    Spacer,
    Link,
    Avatar,
    Progress,
    VStack,
    HStack,
    CircularProgress,
    CircularProgressLabel,
    Spinner,
} from "@chakra-ui/react";
import { Text, Flex, Image, chakra, Divider } from "@chakra-ui/react";
import { Link as RouteLnk } from "react-router-dom";
import { format, isValid } from 'date-fns';

interface ProjectsProps {
    id: string;
    workrs?: number;
    date: string;
    img?: string;
    title?: string;
    nameOfCamp?: string;
    userProfillimg?: string;
    user_id?: string;
    user_name?: string;
}

function OnePorject({ id, img, title, nameOfCamp, date, userProfillimg, user_id, user_name }: ProjectsProps) {
    return (
        <>
            <GridItem key={id}>
                <Flex
                    _dark={{ bg: "#3e3e3e" }}
                    alignItems="center"
                    justifyContent="center"
                    textAlign={"right"}
                >
                    <Box
                        mx="auto"
                        rounded="lg"
                        shadow="xl"
                        bg="white"
                        _dark={{ bg: "gray.800" }}
                        w={500}
                    >
                        <Image
                            mx={"auto"}
                            roundedTop="lg"
                            w={"auto"}
                            h={64}
                            fit="cover"
                            src={img}
                            alt="Article"
                        />

                        <Box p={6}>
                            <Box>
                                <Link
                                    href={`/ProjectPage/${id}`}
                                    display="block"
                                    color="gray.800"
                                    _dark={{ color: "white" }}
                                    fontWeight="bold"
                                    fontSize="2xl"
                                    mt={2}
                                    _hover={{ color: "gray.600", textDecor: "underline" }}
                                >
                                    {title}{" "}
                                </Link>
                                <chakra.span
                                    fontSize="sm"
                                    textTransform="uppercase"
                                    color="brand.600"
                                    _dark={{ color: "brand.400" }}
                                    m={2}
                                >
                                    المعسكر : {nameOfCamp}
                                </chakra.span>

                                <chakra.span
                                    fontSize="sm"
                                    textTransform="uppercase"
                                    color="brand.600"
                                    _dark={{ color: "brand.400" }}
                                >

                        التاريخ:{" "}
                        {date && isValid(new Date(date)) // Check if it's a valid date object
                          ? format(new Date(date), "yyyy/MM/dd") // Format it
                          : "No date available"}
                                </chakra.span>
                            </Box>
                            <Divider borderColor={"blackAlpha.500"} mt={5} />

                            <Box mt={4}>
                                <Flex alignItems="center">
                                    <Flex alignItems="center">
                                        <Avatar
                                            src={userProfillimg}
                                            ml={2}
                                        />
                                        <RouteLnk to={`/UserProfile/${user_id}`}>
                                            {user_name}
                                            <ChevronLeftIcon />
                                        </RouteLnk>
                                    </Flex>

                                    <Spacer />

                                    <RouteLnk to={`/ProjectPage/${id}`}>
                                        التفاصيل
                                        <ChevronLeftIcon />
                                    </RouteLnk>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </GridItem>
        </>
    )
}

export default OnePorject