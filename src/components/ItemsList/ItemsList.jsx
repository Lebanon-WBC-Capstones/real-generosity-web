import React from 'react';
import { Box, Grid } from '@chakra-ui/react';

import Card from '../Card';

import { items } from '../../assets/data/items';

const ItemsList = () => {
  return (
    <Box maxWidth="540px" bg="white" borderRadius="1px">
      <Grid templateColumns="repeat(2, 0.5fr)" gap={1} my="4px">
        {items.map((item) => (
          <Card key={Date.now() + '' + Math.random()} {...item} />
        ))}
      </Grid>
    </Box>
  );
};

export default ItemsList;
