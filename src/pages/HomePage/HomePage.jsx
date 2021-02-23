import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from '../../components/HeroSection';
import CategoryCardLayout from '../../components/CategoryCardsLayout';
import CardList from '../../components/CardList';

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <CategoryCardLayout />
      <CardList />
    </Box>
  );
};

export default HomePage;
