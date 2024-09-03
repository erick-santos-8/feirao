/* eslint-disable react/prop-types */
import { Box, Button, FormControl, FormLabel, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from "@chakra-ui/react"
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"

import { useProductStore } from "../store/product"
import { useState } from "react";

export const ProductCard = ({ product }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);
    
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { deleteProduct, updateProduct } = useProductStore();

    const toast = useToast();

    const handleUpdateProduct = async (productId, updatedProduct) => {
        const {success, message} = await updateProduct(productId, updatedProduct);
        onClose();

        if(!success){
            toast({
                title: "Erro",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
            })
        }
        else{
            toast({
                title: "Sucesso",
				description: "Produto atualizado",
				status: "success",
				duration: 3000,
				isClosable: true,
            })
        }
    }

    const handleDeleteProduct = async (productId) => {
        const { success, message } = await deleteProduct(productId);
        if (!success) {
            toast({ title: "Erro", description: message, status: "error", duration: 3000, isClosable: true })
        } else {
            toast({ title: "Sucesso", description: message, status: "success", duration: 3000, isClosable: true })
        }
    }

    const bgColor = useColorModeValue("whiteAlpha.900", "gray.900")
    return (
        <Box shadow={"lg"} rounded={"lg"} overflow={"hidden"} transition={"all 0.3s"} bg={bgColor} _hover={{ transform: "translateY(-5px)", shadow: "xl" }}>
            <Image src={product.image} alt={product.name} h={48} w="full" objectFit={"cover"} />
            <Box p={4}>
                <Heading>
                    {product.name}
                </Heading>
                <Text fontWeight={"bold"} fontSize={"xl"} mb={4}>
                    ${product.price}
                </Text>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='teal' />
                    <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme="red" />
                </HStack>
            </Box>


            <Modal isOpen={isOpen} onClose={onClose}  >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Editar produto</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <VStack spacing={4}>
                            <Input focusBorderColor='yellow.400' placeholder='Nome do produto' _placeholder={{ opacity: .5, color: 'yellow.500' }} name='name' value={updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                            />
                            <Input focusBorderColor='yellow.400' placeholder='Preço do produto' _placeholder={{ opacity: .5, color: 'yellow.500' }} name='price' type={"number"} value={updatedProduct.price}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value})}
                            />
                            <Input focusBorderColor='yellow.400' placeholder='Imagem do produto' _placeholder={{ opacity: .5, color: 'yellow.500' }} name='image' value={updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value})}
                            />
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='yellow' mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                            Atualizar
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>


    )
}

export default ProductCard;