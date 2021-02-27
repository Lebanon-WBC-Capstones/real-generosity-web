import React from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';
import ItemsMap from '../../components/ItemsMap/ItemsMap';
// import Header from '../../components/Header';
// import Category from '../../components/Category';
import ItemsList from '../../components/ItemsList';

const ItemsPage = () => {
  return (
    <Container my="45px" maxW="1080px">
      <Box mb="45px"></Box>
      <Box mb="45px"></Box>
      <Flex justify="space-between">
        <Box w="50%">
          <ItemsList />
        </Box>
        <Box w="50%">
          <ItemsMap />
        </Box>
      </Flex>
    </Container>
  );
};

export default ItemsPage;
