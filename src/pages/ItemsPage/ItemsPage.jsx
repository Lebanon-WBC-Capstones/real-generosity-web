import React from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';
import ItemsMap from '../../components/ItemsMap/ItemsMap';
import ItemsList from '../../components/ItemsList/ItemsList';

const ItemsPage = () => {
  return (
    <Container my="45px" maxW="1080px">
      <Box mb="45px"></Box>
      <Box mb="45px"></Box>

      <Flex justify="space-between">
        <Box w="50%"></Box>
        <Box w="50%">
          <ItemsList />
          <ItemsMap />
        </Box>
      </Flex>
    </Container>
  );
};

export default ItemsPage;
