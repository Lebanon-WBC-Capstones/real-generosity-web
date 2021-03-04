import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import Card from '../Card';

const ItemsList = ({ filtered, setItemsCounter }) => {
  setItemsCounter(filtered.length);

  return (
    <Box maxWidth="540px" bg="white" borderRadius="1px">
      <Grid templateColumns="repeat(2, 0.5fr)" gap={1} my="4px">
        {filtered.map((f) => (
          <Card {...f} />
        ))}

        {/* {searchQuery
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
            })} */}
      </Grid>
    </Box>
  );
};

export default ItemsList;
