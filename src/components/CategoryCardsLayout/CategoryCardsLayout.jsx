import React from 'react';
import { Grid, GridItem, Box, Text } from '@chakra-ui/react';
import CategoryCard from '../CategoryCard';

const CategoryCardsLayout = () => {
  return (
    <Box p={[2, 4, 6, 8]} mt={[2, 4, 6, 8]}>
      <Text
        fontStyle="Montserrat"
        fontSize="30px"
        fontWeight="bold"
        marginBottom="30px"
      >
        Discover what's available
      </Text>
      <Grid
        h="500px"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(11, 1fr)"
        gap={4}
      >
        <GridItem boxShadow="lg" rowSpan={6} colSpan={4} bg="papayawhip">
          <CategoryCard></CategoryCard>
        </GridItem>
        <GridItem boxShadow="lg" colSpan={2} rowSpan={3} bg="papayawhip">
          <CategoryCard></CategoryCard>
        </GridItem>
        <GridItem boxShadow="lg" colSpan={2} rowSpan={3} bg="papayawhip">
          <CategoryCard></CategoryCard>
        </GridItem>
        <GridItem boxShadow="lg" colSpan={3} rowSpan={3} bg="papayawhip">
          <CategoryCard></CategoryCard>
        </GridItem>
        <GridItem boxShadow="lg" colSpan={3} rowSpan={3} bg="papayawhip">
          <CategoryCard></CategoryCard>
        </GridItem>
        <GridItem boxShadow="lg" colSpan={4} rowSpan={3} bg="papayawhip">
          <CategoryCard></CategoryCard>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default CategoryCardsLayout;
