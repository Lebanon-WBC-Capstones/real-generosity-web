import { Box, Container, Flex, Skeleton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import Filters from '../../components/Filters';
import Header from '../../components/Header';
import ItemsList from '../../components/ItemsList';
import ItemsMap from '../../components/ItemsMap/ItemsMap';
import { firestore } from '../../services/firebase';

const itemsRef = firestore.collection('items');

const ItemsPage = () => {
  const [categoryName, setCategoryName] = useState('All');
  const [items, loading, error] = useCollectionOnce(itemsRef);

  const query = itemsRef.where('category', '==', categoryName.toLowerCase());
  const [filteredItems, catLoading] = useCollectionOnce(query);

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
    <Container my="45px" maxW="1080px" fontFamily="Montserrat">
      <Box mb="45px">
        <Header categoryName={categoryName} />
      </Box>

      <Box mb="45px">
        <Filters setCategoryName={setCategoryName} />
      </Box>

      <Flex justify="space-between">
        <Box w="50%">
          {/* non filtered categories */}
          {categoryName === 'All' && <ItemsList items={items.docs} />}

          {/* filtered categories  */}
          {filteredItems && <ItemsList items={filteredItems.docs} />}
          {catLoading && `loading category: ${categoryName}`}
        </Box>
        <Box w="50%" ml={30}>
          {/* non filtered categories */}
          {categoryName === 'All' && <ItemsMap items={items.docs} />}

          {/* filtered categories  */}
          {filteredItems && categoryName !== 'All' && (
            <ItemsMap items={filteredItems.docs} />
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default ItemsPage;
