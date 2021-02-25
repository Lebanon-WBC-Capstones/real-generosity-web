import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import React from 'react';
import Card from '../Card';
import { Link } from 'react-router-dom';

const CardList = () => {
  return (
    <Box maxWidth="1080px" mx="auto">
      <Box d="flex" justifyContent="space-between" fontSize="md" mb="5px">
        <Box>
          <Heading size="md">latest donations</Heading>
        </Box>
        <Box>
          <Link to="/items">
            <Heading size="md" color="blue.400" textDecoration="underline">
              See more
            </Heading>
          </Link>
        </Box>
      </Box>
      <SimpleGrid spacing={2} bg="white" columns={[1, 2, 3, 4]}>
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Box>
  );
};

export default CardList;
