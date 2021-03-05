import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import Category from '../../components/Category';
import Header from '../../components/Header';
import ItemsList from '../../components/ItemsList';
import ItemsMap from '../../components/ItemsMap/ItemsMap';
import { firestore } from '../../services/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const ItemsPage = () => {
  const query = firestore.collection('items');
  const [items, loading, error] = useCollection(query);

  if (error) return 'an error has occured...';

  return (
    <Container my="45px" maxW="1080px">
      <Box mb="45px">
        <Header />
      </Box>

      <Box mb="45px">
        <Category />
      </Box>

      <Flex justify="space-between">
        <Box w="50%">
          {loading && 'loading...'}
          {items && <ItemsList items={items.docs} />}
        </Box>
        <Box w="50%" ml={30}>
          <ItemsMap />
        </Box>
      </Flex>
    </Container>
  );
};

export default ItemsPage;
