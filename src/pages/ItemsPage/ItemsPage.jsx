import { Box, Container, Flex, Skeleton } from '@chakra-ui/react';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import Filters from '../../components/Filters';
import Header from '../../components/Header';
import ItemsMap from '../../components/ItemsMap';
import ItemsList from '../../components/ItemsList';
import { firestore } from '../../services/firebase';

const ItemsPage = () => {
  const [search, setSearch] = React.useState('');

  let itemsRef = firestore
    .collection('items')
    // TODO: uncomment after fixing old items
    // .where('status', '==', 'active')
    .orderBy('createdAt', 'desc');

  if (search) {
    itemsRef = itemsRef.where('title', '==', search);
  }

  const [items, loading, error] = useCollection(itemsRef);

  const renders = React.useRef(0);
  console.log('ItemsPage.jsx render... ', renders.current++);

  if (error) return 'an error has occured...';

  if (loading)
    return (
      <Container centerContent minH="100vh">
        <Skeleton w={1080} my={50} h={200} />
        <Skeleton w={1080} mb={50} h={50} />
        <Flex>
          <Skeleton mr={30} w={500} h="80vh" />
          <Skeleton w={500} h="80vh" />
        </Flex>
      </Container>
    );

  return (
    <Container my="45px" maxW="1080px">
      <Box mb="45px">
        <Header items={items.docs.length} />
      </Box>

      <Box mb="45px">
        <Filters setSearch={setSearch} />
      </Box>

      <Flex justify="space-between">
        <Box w="50%">
          <ItemsList items={items.docs} />
        </Box>

        <Box w="50%" ml={30}>
          <ItemsMap items={items.docs} />
        </Box>
      </Flex>
    </Container>
  );
};

export default ItemsPage;
