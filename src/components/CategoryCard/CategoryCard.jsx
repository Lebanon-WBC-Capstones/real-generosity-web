import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Text, Image } from '@chakra-ui/react';

const CategoryCard = ({ categoryPic, categoryName, bgColor }) => {
  return (
    <Link to={`/items?category=${categoryName.toLowerCase()}`}>
      <Flex
        direction="column"
        justifyContent="space-between"
        align="center"
        borderRadius="xl"
        w="32"
        h="48"
        py="8"
        boxShadow="lg"
        fontFamily="Montserrat"
      >
        <Image src={categoryPic} maxW="10" />
        <Text m="auto" fontWeight="bold">{categoryName}</Text>
        <Box
          bgColor={bgColor}
          w="10"
          h="10"
          align="center"
          justifyContent="center"
          m="auto"
          borderRadius="lg" >
          <Text fontSize="xs" my="25%" textAlign="center" >56+</Text>
        </Box>

      </Flex>
      {/* <Flex
        mb="4"
        fontSize="md"
        Width="100%"
        height="100%"
        justifyContent="center"
        _hover={{ cursor: 'pointer' }}
      >
        <Stack direction={direction} mb="4">
          <Image src={categoryPic} maxW="90%" maxH="90%" m="auto" />

          <Flex mt={mt} justify="left" spacing="2">
            <Text fontWeight={600} ml={ml} mr="2">
              {categoryName}
            </Text>
            <Text mr="1" color="gray.400">
              55
            </Text>
          </Flex>
        </Stack>
      </Flex> */}
    </Link>
  );
};

export default CategoryCard;