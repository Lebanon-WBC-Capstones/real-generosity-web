import { Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const CategoryCard = ({ categoryPic, direction, categoryName, ml, mt }) => {
  return (
    <Flex
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
    </Flex>
  );
};

export default CategoryCard;
