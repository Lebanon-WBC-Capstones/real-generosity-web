import { Box, Flex, Grid, Image, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useParams } from 'react-router-dom';
import Filters from '../../components/Filters';
import ItemsList from '../../components/ItemsList';
import ItemsMap from '../../components/ItemsMap';
import { firestore } from '../../services/firebase';

const ItemsPage = () => {
  const { category } = useParams();

  const mapStyles = {
    height: '850px',
    width: '800px',
    borderRadius: '2%',
  };

  let itemsRef;
  if (category) {
    itemsRef = firestore
      .collection('items')
      .where('category', '==', category)
      .where('status', '==', 'active')
      .orderBy('createdAt', 'desc');
  } else {
    itemsRef = firestore
      .collection('items')
      .where('status', '==', 'active')
      .orderBy('createdAt', 'desc');
  }

  const [items, loading, error] = useCollection(itemsRef);

  const renders = React.useRef(0);
  console.log('ItemsPage.jsx render... ', renders.current++);

  if (error) return 'an error has occured...';

  if (loading)
    return (
      <Box mx={36} mb="36px" mt={'44'}>
        <Flex justify="space-between">
          <Box h={800}>
            <Filters />

            <Grid templateColumns="repeat(3, 1fr)" gap={4} p={4}>
              {['', '', '', '', '', ''].map(() => (
                <Skeleton borderRadius="md" width="2xs" height="200px" />
              ))}
            </Grid>
          </Box>
          <Box ml={30}>
            <Skeleton borderRadius="md" h="850px" w="800px" />
          </Box>
        </Flex>
      </Box>
    );

  return (
    <Box mx={36} mb="36px" mt={'44'}>
      <Flex justify="space-between">
        <Box h={800}>
          <Filters />
          {items.docs.length ? (
            <ItemsList items={items.docs} />
          ) : (
            <Grid gap="4" h={800} placeContent="center">
              <Text fontSize="5xl">no match found...</Text>
              <Image
                mx="auto"
                src="https://img.icons8.com/fluent/120/000000/nothing-found.png"
                alt="not found"
              />
            </Grid>
          )}
        </Box>

        <Box ml={30}>
          <ItemsMap {...mapStyles} items={items.docs} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ItemsPage;
