import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {MoonIcon, PlusSquareIcon, SunIcon} from "@chakra-ui/icons"

const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{base:"column", sm:"row" }}>
            <Text
                bgGradient='linear(to-l, #FAC601, #FAA600)'
                bgClip='text'
                fontSize={{base: "22", sm:"26"}}
                fontWeight='extrabold'
                textAlign={"center"}
                textTransform={"uppercase"}
                _hover={{bgGradient:"linear(to-l,#FAA600, #FAC601)"}}
                >
                    <Link to={"/"}>
                        Feirão
                    </Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                <Button fontSize={20}>
                    <PlusSquareIcon/>
                </Button>
                </Link>
                <Button onClick={toggleColorMode} fontSize={20}>
                    {colorMode === "light"? <MoonIcon/> : <SunIcon/>}
                </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar