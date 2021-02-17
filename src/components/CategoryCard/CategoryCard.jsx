import React from "react";
import { Box, HStack, Text, Image } from "@chakra-ui/react";

const CategoryCard = () => {
  return (
    <Box
      margin="10px"
      py="10px"
      fontSize="18px"
      maxW="xs"
      maxBlockSize="xs"
      borderRadius="lg"
      bg="gray.200"
      _hover={{ cursor: "pointer" }}
    >
      <Image
        src="./sofa.png"
        maxW="241px"
        maxH="233px"
        mb="20px"
        ml="22px"
      ></Image>
      <HStack
        spacing="12px"
        mb="20px"
        ml="22px"
        justify="left"

      >
        <Text fontWeight={600}>Furniture</Text>
        <Text color="gray.500">55</Text>
      </HStack>
    </Box>
  );
};

export default CategoryCard;