import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { ArrowRight } from 'react-feather';

const CategoryCard = ({ categoryPic, categoryName, bgColor }) => {
  return (
    <Link to={`/items?category=${categoryName.toLowerCase()}`}>
      <Flex
        direction="column"
        justifyContent="space-between"
        align="center"
        borderRadius="xl"
        w={["28","36","44","44"]}
        h={["32","40","48","48"]}
        py={["2","4","8","8"]}
        boxShadow="md"
        fontFamily="Montserrat"
      >
        <Image src={categoryPic} maxW="10" />
        <Text m="auto" fontWeight="bold">{categoryName}</Text>
        <Box
          bgColor={bgColor}
          w="10"
          h="10"
          align="center"
          m="auto"
          borderRadius="lg" >
          <Flex m="2"><ArrowRight /></Flex>
        </Box>

      </Flex>
    </Link>
  );
};

export default CategoryCard;