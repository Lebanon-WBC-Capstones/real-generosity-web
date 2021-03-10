import { Box, Container, Flex, Skeleton, Button } from '@chakra-ui/react';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import Filters from '../../components/Filters';
import Header from '../../components/Header';
import ItemsMap from '../../components/ItemsMap';
import ItemsList from '../../components/ItemsList';
import { firestore } from '../../services/firebase';
import { usePagination } from 'use-pagination-firestore';
import firebase from 'firebase/app';

const ItemsPage = () => {
  const [search, setSearch] = React.useState('');

  const { items, isLoading, isStart, isEnd, getPrev, getNext } = usePagination(
    firebase.firestore().collection('items').orderBy('createdAt', 'desc'),
    {
      limit: 4,
    }
  );
  console.log(items);
  // let itemsRef = firestore
  //   .collection('items')
  //   // TODO: uncomment after fixing old items
  //   // .where('status', '==', 'active')
  //   .orderBy('createdAt', 'desc');
  //   // .limit(3)

  // if (search) {
  //   itemsRef = itemsRef.where('title', '==', search);
  // }

  // const [items, loading, error] = useCollection(itemsRef);

  // const renders = React.useRef(0);
  // console.log('ItemsPage.jsx render... ', renders.current++);

  // if (error) return 'an error has occured...';

  // const nextBatch = () => {
  //   itemsRef = itemsRef.offset(3);
  // };

  if (isLoading)
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
        <Header items={items.length} />
      </Box>

      <Box mb="45px">
        <Filters setSearch={setSearch} />
      </Box>

      <Flex justify="space-between">
        <Box w="50%">
          <ItemsList items={items} />
          <Button onClick={getPrev} disabled={isStart}>
            Prev
          </Button>
          <Button onClick={getNext} disabled={isEnd}>
            Next
          </Button>
        </Box>

        <Box w="50%" ml={30}>
          <ItemsMap items={items} />
        </Box>
      </Flex>
    </Container>
  );
};

export default ItemsPage;
