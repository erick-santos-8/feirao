import React, { useEffect } from 'react'
import {Container, SimpleGrid, Text, VStack} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { useProductStore } from '../store/product'

import { ProductCard } from "../components/ProductCard"

const Home = () => {
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("Produtos: ", products)
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text fontSize={"30"} fontWeight={"bold"} bgGradient={"linear(to-r, yellow.400, orange.500)"} bgClip={"text"} textAlign={"center"} >
          Produtos
        </Text>

        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"}>
          Nenhum produto encontrado...{" "}
          <Text as="span" color={"yellow.500"} _hover={{textDecoration:"underline"}}>
            <Link to={"/create"}>
              Adicione um produto!
            </Link>
          </Text>
        </Text>
        )
        
        }
      </VStack>

    </Container>

  )
}

export default Home