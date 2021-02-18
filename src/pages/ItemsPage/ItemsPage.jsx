import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import ItemsMap from '../../components/ItemsMap/ItemsMap';

const ItemsPage = () => {
  return (
    <Container maxwidth="1080px">
      <Flex justify="space-between">
        <ItemsMap />
      </Flex>
    </Container>
  );
};

export default ItemsPage;
