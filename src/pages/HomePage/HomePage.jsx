import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import HeroSection from '../../components/HeroSection';
import CategoryCardLayout from '../../components/CategoryCardsLayout';
import CardList from '../../components/CardList';
function HomePage({ setQuery }) {
  return (

    <Flex direction="column" justify="space-evenly">
      <HeroSection />

      <Box my="24" justify="center" mx="auto">
        <CategoryCardLayout setQuery={setQuery} />
      </Box>

      <Box mb="14" justify="center" mx="auto">
        <CardList />
      </Box>

    </Flex>

  );
}

export default HomePage;
