import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from '../components/HeroSection';
import CategoryCardLayout from '../components/CategoryCardsLayout';
import CardList from '../components/CardList';
function HomePage() {
  return (
    <div>
      <Box maxWidth="1080px" mx="auto">
        <Box>
          <HeroSection />
        </Box>
        <Box marginBottom="30px">
          <CategoryCardLayout />
        </Box>
        <Box marginBottom="40px">
          <CardList />
        </Box>
      </Box>
    </div>
  );
}

export default HomePage;
