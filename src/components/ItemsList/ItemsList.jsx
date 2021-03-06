import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import Card from '../Card';

const ItemsList = ({ items }) => {
  return (
    <Box maxWidth="540px" bg="white" borderRadius="1px">
      <Grid templateColumns="repeat(2, 0.5fr)" gap={1} my="4px">
        {items.map((item) => (
          <Card key={item.id} id={item.id} {...item.data()} />
        ))}
      </Grid>
    </Box>
  );
};

export default ItemsList;
