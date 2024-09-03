import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react'
import { useState } from 'react'

import {useProductStore} from "../store/product"

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    image:"",
  })
  const toast = useToast();

  const {createProduct} = useProductStore();
  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct)
    if(!success){
      toast({
        title:"Erro",
        description: message,
        status:"error",
        duration: 5000,
        isClosable: true
      })
    }else{
      toast({
        title:"Sucesso!",
        description: message,
        status:"success",
        isClosable:true
      })
    }
    setNewProduct({name:"", price:"", image:""})
  }
  return (
    <Container maxW={"container.sm"} my={"2rem"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Adicione um novo produto!</Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input focusBorderColor='yellow.400' placeholder='Nome do produto' _placeholder={{ opacity: .5, color: 'yellow.500' }} name='name' value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />

            <Input focusBorderColor='yellow.400' placeholder='Preço do produto'  _placeholder={{ opacity: .5, color: 'yellow.500' }} name='price' type={"number"} value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />

            <Input focusBorderColor='yellow.400' placeholder='Imagem do produto' _placeholder={{ opacity: .5, color: 'yellow.500' }} name='image' value={newProduct.image}
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            />

            <Button colorScheme='yellow' onClick={handleAddProduct} w="full">
              Adicionar produto
            </Button>

          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage