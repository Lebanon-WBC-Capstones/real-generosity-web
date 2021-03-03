import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from '../../components/HeroSection';
import CategoryCardLayout from '../../components/CategoryCardsLayout';
import CardList from '../../components/CardList';
function HomePage({ setQuery }) {
  return (
    
      <Box>
          <HeroSection />

        <Box mx="auto" my="36">
          <CategoryCardLayout setQuery={setQuery} />
        </Box>

        <Box mb="20" mx="56">
          <CardList />
        </Box>
        
      </Box>
    
  );
}

export default HomePage;
