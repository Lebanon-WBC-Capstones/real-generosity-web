import { Box, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Card from '../Card';
const CardList = () => {
  return (
    <Box maxWidth="1400px" mx="auto">
      <Box d="flex" justifyContent="space-between" fontSize="md" mb="5">
        <Box>
          <Text color="blue.400">latest donations</Text>
        </Box>
        <Box>
          <Link color="blue.400">See more</Link>
        </Box>
      </Box>
      <SimpleGrid spacing={2} bg="white" mx="auto" columns={[1, 2, 3, 4]}>
        {/* card component goes here  */}
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Box>
  );
};

export default CardList;
