import React from 'react';
import { Box, HStack, Text, Image } from '@chakra-ui/react';
import sofa from '../../assets/images/sofa.png';
const CategoryCard = () => {
  return (
    <Box
      fontSize="18px"
      height="100%"
      Width="100%"
      objectFit="cover"
      borderRadius="lg"
      bg="gray.200"
      _hover={{ cursor: 'pointer' }}
      centerContent
    >
      <Image
        src={sofa}
        alt="Furniture"
        maxW="80%"
        maxH="80%"
        objectFit="cover"
        mb="20px"
        align="center"
      ></Image>
      <HStack spacing="12px" mb="20px" ml="22px" justify="left">
        <Text fontWeight={600}>Furniture</Text>
        <Text color="gray.500">55</Text>
      </HStack>
    </Box>
  );
};

export default CategoryCard;
