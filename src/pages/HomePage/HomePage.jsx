import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import HeroSection from '../../components/HeroSection';
import CategoryCardLayout from '../../components/CategoryCardsLayout';
import CardList from '../../components/CardList';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import { firestore } from '../../services/firebase';

function HomePage() {
  const query = firestore.collection('items')
                         .where('status', '==','active')
                         .orderBy('createdAt', 'desc')
                         .limit(4);
  const [items, loading, error] = useCollectionOnce(query);

  if (error) return 'an error has occured...';

  return (
    <Flex direction="column" justify="space-evenly">
      <HeroSection />

      <Box my="24" justify="center" mx="auto">
        <CategoryCardLayout />
      </Box>

      <Box mb="14" justify="center" mx="auto">
        {loading && 'items list is loading...'}
        {items && <CardList items={items.docs} />}
      </Box>
    </Flex>
  );
}

export default HomePage;
