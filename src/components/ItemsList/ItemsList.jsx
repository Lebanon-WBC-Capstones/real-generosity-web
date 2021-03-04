import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import Card from '../Card';
import { items } from '../../assets/data/items';

const ItemsList = ({ searchQuery, setItemsCounter, categoryName }) => {
  const filtered = items.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const filteredCategory = items.filter((item) => {
    return item.category.toLowerCase().includes(categoryName.toLowerCase());
  });

  return (
    <Box maxWidth="540px" bg="white" borderRadius="1px">
      <Grid templateColumns="repeat(2, 0.5fr)" gap={1} my="4px">
        {searchQuery
          ? filtered.map((item) => {
              setItemsCounter(filtered.length);
              return <Card key={Date.now() + '' + Math.random()} {...item} />;
            })
          : categoryName !== 'All'
          ? filteredCategory.map((item) => {
              setItemsCounter(filteredCategory.length);
              return <Card key={Date.now() + '' + Math.random()} {...item} />;
            })
          : items.map((item) => {
              setItemsCounter(filtered.length);
              return <Card key={Date.now() + '' + Math.random()} {...item} />;
            })}
      </Grid>
    </Box>
  );
};

export default ItemsList;
