import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {PlusSquareIcon} from "@chakra-ui/icons"

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
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
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar